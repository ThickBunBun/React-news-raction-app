import { useState, useEffect } from "react";
import NewsComments from "../components/NewsComments";
import UserComment from "../components/UserComment";
import NewsSnatch from "../components/NewsSnatch";
import { NewsType, CommentType } from "../components/Types";

// Main news component
function NewsPart() {
  const [newNews, setNewNews] = useState<NewsType | null>(null);
  const loadedComments = window.localStorage.getItem("NC2");
  const [comments, setComments] = useState(() => {
    if (loadedComments != null || "[]") {
      return JSON.parse(loadedComments);
    }
  });
  return (
    <>
      <div className="grid grid-cols-1 h-lvh">
        <NewsSnatch HandleNewNews={setNewNews} news={newNews} />
        <br />
        <br />
        <NewsComments
          HandleCommentPost={setComments}
          comments={comments}
          news={newNews}
        />
        <br />
        <UserComment
          HandleCommentPost={setComments}
          comments={comments}
          news={newNews}
        />
      </div>
    </>
  );
}

// root component
export default function MainPage() {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-gray-800 from-10% via-sky-950 via-40% to-gray-900 to-90% ">
        <div className="ml-8 mr-8">
          <NewsPart />
        </div>
      </div>
    </>
  );
}
