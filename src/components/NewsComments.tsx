import { useEffect } from "react";

type NewsCommentsProps = {
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
// comment section, simply displays comment array in list format
// should provide keys latter, as well as prop validation
// comments provided by a parent component
export default function NewsComments({
  HandleCommentPost,
  comments,
  news,
}: NewsCommentsProps) {
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

  const listOfComments = comments?.map((comment) => {
    if (comment?.commentBody?.id === news?.id) {
      return (
        <div className="text-green-50">
          <li key={comment?.commentBody?.commentId}>
            User: {comment?.commentBody?.commentText}
          </li>
        </div>
      );
    }
  });

  return (
    <>
      <div className="flex">
        <div className="flex-1 bg-gray-700 whitespace-pre-line overflow-y-scroll min-h-20 max-h-20 focus:bg-green-700  ml-1 mr-1 pt-2 pr-2 pl-2 rounded-lg mt-3 mb-3">
          {listOfComments}
        </div>
      </div>
    </>
  );
}
