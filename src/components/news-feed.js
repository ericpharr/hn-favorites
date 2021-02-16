import { useState } from "react";
import { useLogin } from "./login-context";
import { NewsCategory } from "./news-category";
import { NewsItem } from "./news-item";
import { FeedContainer, ItemsContainer, Tab, Tabs } from "./ui/news-feed";

export const Feed = (props) => {
  const [user, dispatch] = useLogin();
  const [state, setState] = useState("top");

  const categories = ["top", "best", "new"];

  const changeCategory = (e) => setState(e.target.id);

  return (
    <>
      Hello {user.firstName} {user.lastName}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          return dispatch({ type: "LOGOUT" });
        }}
      >
        Log Out
      </a>
      <FeedContainer>
        <Tabs>
          {categories.map((category) => (
            <Tab
              active={category === state}
              key={category}
              id={category}
              onClick={changeCategory}
            >
              {category}
            </Tab>
          ))}
          <Tab
            active={state === "favorites"}
            id="favorites"
            onClick={changeCategory}
          >
            Favorites
          </Tab>
        </Tabs>
        <ItemsContainer>
          {categories.includes(state) ? (
            <NewsCategory category={state} />
          ) : (
            user.favorites.map((favorite) => (
              <NewsItem id={favorite} key={favorite} />
            ))
          )}
        </ItemsContainer>
      </FeedContainer>
    </>
  );
};
