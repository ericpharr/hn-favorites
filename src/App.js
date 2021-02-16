import { LoginProvider } from "./components/login-context";
import { Feed } from "./components/news-feed";

function App() {
  // Login state

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-green-200 w-90">
        {/* Return loginform or hackernews items */}
        <LoginProvider>
          <Feed />
        </LoginProvider>
      </div>
    </>
  );
}

export default App;
