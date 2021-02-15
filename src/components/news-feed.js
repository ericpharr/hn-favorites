import { useEffect, useState } from "react";
import { useLogin } from "./login-context";
import { FeedContainer, Item, ItemsContainer, Tab, Tabs } from "./ui/news-feed";

export const Feed = (props) => {
  const [user, dispatch] = useLogin();
  const [state, setState] = useState([]);

  useEffect(() => {
    const baseURL = "https://hacker-news.firebaseio.com/v0/";
    async function topStories() {
      const url = `${baseURL}/topstories.json?limitToFirst=10&orderBy="$key"`;
      const result = await fetch(url);

      return result.json();
    }

    async function getStory(id) {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
      const result = await fetch(url);

      return result.json();
    }

    async function getStories() {
      const top = await topStories();
      const data = await Promise.all(top.map((id) => getStory(id)));

      return setState(data);
    }
    getStories();
  }, []);

  useEffect(() => console.log(state));

  return (
    <>
      Hello {user.firstName} {user.lastName}
      <FeedContainer>
        <Tabs>
          <Tab>Top Stories</Tab>
          <Tab active>Favorites</Tab>
          <Tab>Favorites</Tab>
          <Tab>Favorites</Tab>
        </Tabs>
        <ItemsContainer>
          {state.length > 1
            ? state.map((item) => {
                return (
                  <Item
                    title={item.title}
                    by={item.by}
                    key={item.id}
                    url={
                      item.url
                        ? item.url
                        : `https://news.ycombinator.com/item?id=${item.id}`
                    }
                  />
                );
              })
            : null}
        </ItemsContainer>
      </FeedContainer>
    </>
  );
};
