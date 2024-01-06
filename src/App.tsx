import { useState,useEffect } from "react";
import NewsComments from "./components/NewsComments";
import UserComment from "./components/UserComment";
import NewsSnatch from "./components/NewsSnatch";
import {NewsType, CommentType} from "./components/Types"

// Main news component
function NewsPart() {
  const [newNews, setNewNews] = useState<NewsType | null>(null);
  const loadedComments = window.localStorage.getItem("NC2");
  const [comments, setComments] = useState(()=>{
    if(loadedComments != null || "[]"){
      return JSON.parse(loadedComments)
    }
  });
  console.log("root components")
  console.log(comments)

  return (
    <>
      <NewsSnatch
        HandleNewNews={setNewNews}
        news={newNews}
      />
      <br />
      <br />
      <NewsComments 
        HandleCommentPost={setComments} 
        comments={comments} 
        news={newNews} />
      <br />
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
