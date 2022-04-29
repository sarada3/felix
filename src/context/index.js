import { createContext, useReducer } from "react";

export const actionTypes = {
  setUrl: "SET_URL",
};

const initialState = {
  url: "home",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_URL":
      return {
        url: action.value,
      };
    default:
      throw new Error("Unknown behavior");
  }
};

// context
export const RouteContext = createContext();

// provider
export const RouteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RouteContext.Provider value={{ url: state.url, dispatch }}>
      {children}
    </RouteContext.Provider>
  );
};
