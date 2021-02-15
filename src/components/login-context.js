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
      return { loggedIn: true, user: { ...action.payload } };
    case "LOGOUT":
      return { loggedIn: false, user: {} };
    default:
      throw new Error("something went wrong");
  }
}

export const LoginProvider = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [state, dispatch] = useReducer(loginReducer, {
    loggedIn: false,
    user: {},
  });

  useEffect(() => {
    if (!state.loggedIn && sessionStorage.getItem("user")) {
      dispatch({
        type: "LOGIN",
        payload: JSON.parse(sessionStorage.getItem("user")),
      });
    }

    if (state.loggedIn && !sessionStorage.getItem("user")) {
      sessionStorage.setItem("user", JSON.stringify(state.user));
    }
    if (!isLoaded) {
      setLoaded(true);
    }
  }, [state]);

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
