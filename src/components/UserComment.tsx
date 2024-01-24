import { useState, useEffect } from "react";
// import {NewsType, CommentType} from "./Types"
import { useLocalStorage } from "./useLocalStorage";

type UserCommentProps = {
  HandleCommentPost: React.Dispatch<React.SetStateAction<{}>>;
  comments: [
    {
      commentBody: {
        id: number;
        commentId: number;
        commentText: string;
      };
    },
  ];
  news: {
    id: number;
    tittle: string;
    body: string;
  };
};

// comment line with a button, provided useState function and comments array by a parrent component
// button handles the adding comments to and existing array via provided useState
// another use state is used by input, updating current comment value until it is added via button funciton.
export default function UserComment({
  HandleCommentPost,
  comments,
  news,
}: UserCommentProps) {
  const [commentId, setCommentId] = useState(0);
  const [comment, setComment] = useState("");

  // useEffect(()=>{
  //   const loadedComments = window.localStorage.getItem("NC2");
  //   if(loadedComments != null || "[]"){
  //     console.log("in the hook")
  //     console.log(JSON.parse(loadedComments))
  //     HandleCommentPost(
  //       JSON.parse(loadedComments)
  //   )
  //   }
  // },[]);

  useEffect(() => {
    if (comments != null || []) {
      window.localStorage.setItem("NC2", JSON.stringify(comments));
    }
  }, [comments]);

  function AddingComments() {
    setCommentId(commentId + 1);
    if (comments != null) {
      HandleCommentPost([
        ...comments,
        {
          commentBody: {
            id: news?.id,
            commentId: commentId,
            commentText: comment,
          },
        },
      ]);
      setComment("");
    } else {
      HandleCommentPost([
        {
          commentBody: {
            id: news?.id,
            commentId: commentId,
            commentText: comment,
          },
        },
      ]);
      setComment("");
    }
  }
  return (
    <>
      <div className="flex flex-wrap rounded-lg ml-3 mr-3 mb-3 bg-gray-700">
        <textarea
          onKeyDown={(event) => {
            if (event.key === "Enter" && event.shiftKey === false) {
              event.preventDefault();
              AddingComments();
            }
          }}
          className="flex-auto bg-gray-700 rounded-lg text-gray-100 border-0 outline-none resize-none shadow-none focus:min-h-60 min-w-10 m-2 pr-2 pl-2 pt-1 whitespace-pre-line"
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {/* <input */}
        {/*   className="bg-gray-600 border-2 border-blue-500 rounded-mg " */}
        {/*   type="text" */}
        {/*   placeholder="Comment" */}
        {/*   value={comment} */}
        {/*   onChange={(e) => setComment(e.target.value)} */}
        {/* /> */}
        <button
          className="self-end justify-self-end font-bold bg-sky-600 hover:bg-sky-500 rounded-full mb-2 mr-2 p-2 text-gray-100"
          onClick={AddingComments}
        >
          Send
        </button>
      </div>
    </>
  );
}
