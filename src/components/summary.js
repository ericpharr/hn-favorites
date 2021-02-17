import { FormContainer } from "./ui/login";
import useFetch from "./use-fetch";
import { useUserStore } from "./user-context";

const SummaryItem = (props) => {
  const { status, value, error } = useFetch(
    `https://hacker-news.firebaseio.com/v0/item/${props.id}.json`
  );
  return status === "success" ? (
    <a
      className="text-indigo-800"
      href={
        value.url
          ? value.url
          : `https://new.ycombinator.com/item?id=${value.id}`
      }
    >
      <li className="my-4">{value.title}</li>
    </a>
  ) : null;
};
export const Summary = (props) => {
  const { user } = useUserStore();
  return (
    <FormContainer>
      <h1 className="text-4xl font-bold">
        {user.firstName} {user.lastName}
      </h1>
      <p className="mb-4 font-serif text-sm">{user.email}</p>
      <h2 className="pb-1 mb-4 text-xl font-bold border-b border-gray-400">
        Your Favorites
      </h2>
      <ul className="text-center border-gray-400 divide-y">
        {user.favorites.map((favorite) => (
          <SummaryItem id={favorite} key={favorite} />
        ))}
      </ul>
    </FormContainer>
  );
};
