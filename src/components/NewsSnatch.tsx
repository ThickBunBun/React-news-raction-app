import { useState } from "react";
import { useNewsSnatch } from "./useNewsSnatch.js";

type NewsSnatchProps={
  HandleNewNews: React.Dispatch<React.SetStateAction<{}>>,
  news: {
    id:number,
    tittle:string,
    body:string
  }
}


//news component:
//owns a button that sends a signal to rerender a news snippet
//News got fetched via custom useEffect hook from useNewsSnatch.js
//Gets random snippets Via math random variable stored in a useState which is passed to useNewsSnatch
//to get a random snippet. Afterwards snippet is stored in another state var called newNews
//button delayed on click
export default function NewsSnatch({ HandleNewNews, news }:NewsSnatchProps) {
  const [disBtn, setDisBtn] = useState(false);
  const [randomPost, setRandomPost] = useState(
    Math.floor(Math.random() * 5) + 1,
  );
  const randNews = useNewsSnatch(randomPost);

  function handleClick() {
    setRandomPost(Math.floor(Math.random() * 5) + 1);
    HandleNewNews({
      ...news,
      id: randNews.id,
      tittle: randNews.title,
      body: randNews.body,
    });
    setDisBtn(true);
    const timeOutId = setTimeout(() => {
      setDisBtn((v) => !v);
      clearTimeout(timeOutId);
    }, 1000);
  }
  return (
    <>
      <div><h1 className=" italic text-xl font-bold p-2">{news ? news?.tittle : "Get angry now"}</h1></div>
      <div className=" font-light p-1">{news?.body}</div>
      <button className=" bg-zinc-700 rounded-sm p-1 ml-1" disabled={disBtn} onClick={handleClick}>
        Next news
      </button>
    </>
  );
}
