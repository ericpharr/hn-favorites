import { useEffect, useState } from "react";
import { useLogin } from "./login-context";
import { NewsCategory } from "./news-category";
import { NewsItem } from "./news-item";
import { FeedContainer, Item, ItemsContainer, Tab, Tabs } from "./ui/news-feed";

export const Feed = (props) => {
  const [user, dispatch] = useLogin();
  const [state, setState] = useState("top");

  const categories = ["top", "best", "new"];

  const changeCategory = (e) => setState(e.target.id);

  return (
    <>
      Hello {user.firstName} {user.lastName}
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
        </Tabs>
        <ItemsContainer>
          <NewsCategory category={state} />
        </ItemsContainer>
      </FeedContainer>
    </>
  );
};
