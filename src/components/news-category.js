import { NewsItem } from "./news-item";
import {Spinner} from "./ui/news-feed";
import useFetch from "./use-fetch";

export const NewsCategory = (props) => {
  const url = `https://hacker-news.firebaseio.com/v0/${props.category}stories.json`;
  const { status, value, error } = useFetch(url);

  return (
    <>
      {status === "success"
        ? value.slice(0, 20).map((item) => <NewsItem id={item} key={item} />)
        : <Spinner/>}
    </>
  );
};
