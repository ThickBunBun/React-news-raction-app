import { useState, useEffect } from "react";

export function useNewsSnatch(randomPost) {

  const [news ,setNews] = useState('')
  useEffect(()=>{
    fetch(`https://dummyjson.com/posts/${randomPost}`)
      .then(res => res.json())
      .then(data => setNews(data))
  
  },[randomPost])

  return news;
  // return randomPost;
}
