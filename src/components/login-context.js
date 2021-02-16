import {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { LoginForm } from "./login-form";

const LoginContext = createContext();
const LoginDispatch = createContext();

function loginReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        user: { ...action.payload, favorites: [] },
      };
    case "LOGOUT":
      return { ...state, loggedIn: false, user: {} };
    case "FAVORITE":
      return {
        ...state,
        user: {
          ...state.user,
          favorites: [...state.user.favorites, action.payload],
        },
      };
    case "UNFAVORITE":
      const itemIndex = state.user.favorites.indexOf(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          favorites: [
            ...state.user.favorites.slice(0, itemIndex),
            ...state.user.favorites.slice(itemIndex + 1),
          ],
        },
      };
    default:
      throw new Error("something went wrong");
  }
}

export const LoginProvider = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [state, dispatch] = useReducer(loginReducer, {
    loggedIn: sessionStorage.getItem("user") !== null,
    user: JSON.parse(sessionStorage.getItem("user")) || {},
  });

  useEffect(() => {
    if (state.loggedIn && !sessionStorage.getItem("user")) {
      sessionStorage.setItem("user", JSON.stringify(state.user));
    }

    if (!state.loggedIn && sessionStorage.getItem("user")) {
      sessionStorage.clear();
    }

    if (!isLoaded) {
      setLoaded(true);
    }
  }, [state]);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user.favorites]);

  return (
    <LoginContext.Provider value={state.user}>
      <LoginDispatch.Provider value={dispatch}>
        {isLoaded && !state.loggedIn ? <LoginForm /> : children}
      </LoginDispatch.Provider>
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return [useContext(LoginContext), useContext(LoginDispatch)];
};
