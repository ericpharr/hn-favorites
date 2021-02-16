import { Item } from "./ui/news-feed";
import useFetch from "./use-fetch";

export const NewsItem = (props) => {
  const url = `https://hacker-news.firebaseio.com/v0/item/${props.id}.json`;
  const {status, value, error}= useFetch(url);

  return (
    <>
      {status === "success" ? (
        <Item
          title={value.title}
          by={value.by}
          key={value.id}
          url={
            value.url
              ? value.url
              : `https://news.ycombinator.com/item?id=${value.id}`
          }
        />
      ) : null}
    </>
  );
};
