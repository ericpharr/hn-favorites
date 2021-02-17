import { useUserStore } from "./user-context";
import { Item, Spinner } from "./ui/news-feed";
import useFetch from "./use-fetch";

export const NewsItem = (props) => {
  const url = `https://hacker-news.firebaseio.com/v0/item/${props.id}.json`;
  const { status, value, error } = useFetch(url);
  const {user, dispatch} = useUserStore();

  const handleChange = (e) => {
    return e.target.checked
      ? dispatch({ type: "FAVORITE", payload: parseInt(e.target.value) })
      : dispatch({ type: "UNFAVORITE", payload: parseInt(e.target.value) });
  };
  return (
    <>
      {status === "success" && value !== null ? (
        <Item
          title={value.title}
          by={value.by}
          key={value.id}
          id={value.id}
          url={
            value.url
              ? value.url
              : `https://news.ycombinator.com/item?id=${value.id}`
          }
          favorite={user.favorites.includes(value.id)}
          toggleFavorite={handleChange}
        />
      ) : <Spinner/>}
    </>
  );
};
