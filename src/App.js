import { UserProvider as UserProvider } from "./components/user-context";
import { Feed } from "./components/news-feed";
import { createContext, useState } from "react";
import { Summary } from "./components/summary";

function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-200 to-green-100 w-90">
        <UserProvider>
          {submitted ? <Summary /> : <Feed submitFavorites={setSubmitted} />}
        </UserProvider>
      </div>
    </>
  );
}

export default App;
