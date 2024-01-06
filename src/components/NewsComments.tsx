import { useEffect } from "react";

type NewsCommentsProps ={
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
  news:{
    id:number,
    tittle:string,
    body:string
  }

}
// comment section, simply displays comment array in list format
// should provide keys latter, as well as prop validation
// comments provided by a parent component
export default function NewsComments({HandleCommentPost ,comments, news }:NewsCommentsProps) {

  // useEffect(()=>{
  //   const loadedComments = window.localStorage.getItem("NEWS_COMMENTS");
  //   if(loadedComments != null){
  //     console.log("in the hook")
  //     console.log(JSON.parse(loadedComments))
  //     HandleCommentPost(
  //     JSON.parse(loadedComments)
  //   )
  //   }
  // },[])

  console.log('in the funciton')
  console.log(window.localStorage.getItem("NC2"))
  const listOfComments = comments?.map((comment) => {
    if (comment?.commentBody?.id === news?.id) {
      return (
        <li key={comment?.commentBody?.commentId}>
          {comment?.commentBody?.commentText}
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
