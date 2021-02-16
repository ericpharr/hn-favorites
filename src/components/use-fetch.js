import { useCallback, useEffect, useReducer, useState } from "react";

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "success":
      return { ...state, status: "success", value: action.payload };
    case "pending":
      return { ...state, status: "pending" };
    case "error":
      return { ...state, status: "error", error: action.payload };
    default:
      throw new Error(`No Action of type: ${action.type}`);
  }
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    status: "idle",
    value: null,
    error: null,
  });

  const execute = useCallback(() => {
    dispatch({ type: "pending" });
    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: "success", payload: response });
      })
      .catch((error) => {
        dispatch({ type: "error", payload: error });
      });
  }, [url]);

  useEffect(() => {
    execute();
  }, [url]);

  return state;
};

export default useFetch;
