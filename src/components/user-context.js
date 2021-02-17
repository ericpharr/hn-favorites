import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { LoginForm } from "./login-form";

const UserContext = createContext();
const UserDispatch = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        signedIn: true,
        user: { ...action.payload, favorites: [] },
      };
    case "LOGOUT":
      return { ...state, signedIn: false, user: {} };
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

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    signedIn: false,
    user: { favorites: [] },
  });

  return (
    <UserContext.Provider value={state.user}>
      <UserDispatch.Provider value={dispatch}>
        {state.signedIn ? children : <LoginForm />}
      </UserDispatch.Provider>
    </UserContext.Provider>
  );
};

export const useUserStore = () => {
    return { user: useContext(UserContext), dispatch: useContext(UserDispatch) };
};
