import { useState, useEffect } from "react";
// import {NewsType, CommentType} from "./Types"
import {useLocalStorage} from "./useLocalStorage"


type UserCommentProps ={
  HandleCommentPost: React.Dispatch<React.SetStateAction<{}>>,
  comments:[
      {
        commentBody: {
          id: number,
          commentId: number,
          commentText: string,
        },
      },
  ],
  news: {
    id:number,
    tittle:string,
    body:string
  }
}

// comment line with a button, provided useState function and comments array by a parrent component
// button handles the adding comments to and existing array via provided useState
// another use state is used by input, updating current comment value until it is added via button funciton.
export default function UserComment({ HandleCommentPost, comments, news }: UserCommentProps) {
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
  
  useEffect(()=>{
    if(comments != null || []){
      window.localStorage.setItem("NC2", JSON.stringify(comments))
    };
  },[comments]);

  function AddingComments() {
    setCommentId(commentId + 1);
    if(comments != null){
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
    }
    else{
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
      <div>
        <input
          className=" border-2 border-blue-500 rounded-mg p-1"
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className=" bg-blue-600 rounded-sm p-1" onClick={AddingComments}>Send</button>
      </div>
    </>
  );
}
