import { useState } from "react";
import { useNewsSnatch } from "./useNewsSnatch.js";

type NewsSnatchProps = {
  HandleNewNews: React.Dispatch<React.SetStateAction<{}>>;
  news: {
    id: number;
    tittle: string;
    body: string;
  };
};

//news component:
//owns a button that sends a signal to rerender a news snippet
//News got fetched via custom useEffect hook from useNewsSnatch.js
//Gets random snippets Via math random variable stored in a useState which is passed to useNewsSnatch
//to get a random snippet. Afterwards snippet is stored in another state var called newNews
//button delayed on click
export default function NewsSnatch({ HandleNewNews, news }: NewsSnatchProps) {
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
      <div className="grid grid-cols-1 mt-3">
        <div className="justify-self-center">
          <h1 className="text-4xl font-bold p-2 text-slate-200">
            {news ? news?.tittle : "Get angry now"}
          </h1>
        </div>
        <div className="overflow-scroll min-h-40 max-h-40 mr-5 ml-5 font-medium text-xl p-1 text-slate-200">
          {news?.body}
        </div>
        <div className="justify-self-center">
          <button
            className="font-bold bg-sky-600 hover:bg-sky-500 rounded-lg p-3 text-gray-100"
            disabled={disBtn}
            onClick={handleClick}
          >
            Next news
          </button>
        </div>
      </div>
    </>
  );
}
