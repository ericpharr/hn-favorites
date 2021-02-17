import { useState } from "react";
import { useUserStore } from "./user-context";
import { NewsCategory } from "./news-category";
import { NewsItem } from "./news-item";
import {
  FeedContainer,
  FeedHeader,
  ItemsContainer,
  Tab,
  Tabs,
} from "./ui/news-feed";
import { Button } from "./ui/common";

export const Feed = (props) => {
  const { user } = useUserStore();
  const [state, setState] = useState("top");

  const submitFavorites = props.submitFavorites;

  const categories = ["top", "best", "new"];

  const changeCategory = (e) => setState(e.target.id);

  return (
    <>
      <FeedContainer>
        <FeedHeader greeting={`Hi ${user.firstName}`}>
          Pick your favorite articles, and submit your favorites from the
          favorites tab!
        </FeedHeader>
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
            <>
              <div className="w-11/12 mx-auto md:w-1/2">
                {user.favorites.length > 0 ? (
                  <Button onClick={() => submitFavorites(true)}>
                    Submit Your Favorites
                  </Button>
                ) : (
                  <Button disabled>Add Favorites to Submit</Button>
                )}
              </div>
              {user.favorites.map((favorite) => (
                <NewsItem id={favorite} key={favorite} />
              ))}
            </>
          )}
        </ItemsContainer>
      </FeedContainer>
    </>
  );
};
