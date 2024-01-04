import { useState } from "react";
import { useNewsSnatch } from "./useNewsSnatch.js";
import PropTypes from "prop-types";

//news component:
//owns a button that sends a signal to rerender a news snippet
//News got fetched via custom useEffect hook from useNewsSnatch.js
//Gets random snippets Via math random variable stored in a useState which is passed to useNewsSnatch
//to get a random snippet. Afterwards snippet is stored in another state var called newNews
//button delayed on click
function NewsSnatch({ HandleNewNews, newNews }) {
  const [disBtn, setDisBtn] = useState(false);
  const [randomPost, setRandomPost] = useState(
    Math.floor(Math.random() * 30) + 1,
  );
  const news = useNewsSnatch(randomPost);

  function handleClick() {
    setRandomPost(Math.floor(Math.random() * 30) + 1);
    HandleNewNews({
      ...newNews,
      id: news.id,
      tittle: news.title,
      body: news.body,
    });
    setDisBtn(true);
    const timeOutId = setTimeout(() => {
      setDisBtn((v) => !v);
      clearTimeout(timeOutId);
    }, 1000);
  }
  return (
    <>
      <div>{newNews.tittle}</div>
      <div>{newNews.body}</div>
      <button disabled={disBtn} onClick={handleClick}>
        Next news
      </button>
    </>
  );
}

NewsSnatch.propTypes = {
  newNews: PropTypes.object,
  HandleNewNews: PropTypes.func,
};

// comment section, simply displays comment array in list format
// should provide keys latter, as well as prop validation
// comments provided by a parent component
function NewsComments({ comments, news }) {
  const listOfComments = comments.map((comment) => {
    if (comment.commentBody.id === news.id) {
      return (
        <li key={comment.commentBody.commentId}>
          {comment.commentBody.commentText}
        </li>
      );
    }
  });

  return (
    <>
      <div>{listOfComments}</div>
    </>
  );
}

NewsComments.propTypes = {
  news: PropTypes.object,
  comments: PropTypes.array,
};

// comment line with a button, provided useState function and comments array by a parrent component
// button handles the adding comments to and existing array via provided useState
// another use state is used by input, updating current comment value until it is added via button funciton.
function UserComment({ HandleCommentPost, comments, news }) {
  const [commentId, setCommentId] = useState(0);
  const [comment, setComment] = useState("");
  function AddingComments({ newComment }) {
    setComment(newComment);
    setCommentId(commentId + 1);
    HandleCommentPost([
      ...comments,
      {
        commentBody: {
          id: news.id,
          commentId: commentId,
          commentText: comment,
        },
      },
    ]);
    setComment("");
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={AddingComments}>Send</button>
      </div>
    </>
  );
}

UserComment.propTypes = {
  HandleCommentPost: PropTypes.func,
  news: PropTypes.object,
  comments: PropTypes.array,
};

// Main news component
function NewsPart() {
  const [newNews, setNewNews] = useState({});
  const [comments, setComments] = useState([
    {
      commentBody: {
        id: newNews.id,
        commentId: null,
        commentText: null,
      },
    },
  ]);
  return (
    <>
      <NewsSnatch
        HandleNewNews={setNewNews}
        newNewsId={newNews.id}
        newNews={newNews}
      />
      <NewsComments comments={comments} news={newNews} />
      <UserComment
        HandleCommentPost={setComments}
        comments={comments}
        news={newNews}
      />
    </>
  );
}

// root component
export default function App() {
  return (
    <>
      <NewsPart />
    </>
  );
}
