import { useReducer, createContext } from "react";
import {
  userGHReducer,
  initialState,
  type UserGHActions,
} from "../reducers/user-gh";

type UserGHContextType = {
  state: typeof initialState;
  dispatch: React.Dispatch<UserGHActions>;
};

export const UserGHContext = createContext<UserGHContextType>(
  {} as UserGHContextType
);

export const UserGHProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userGHReducer, initialState);
  return (
    <UserGHContext.Provider value={{ state, dispatch }}>
      {children}
    </UserGHContext.Provider>
  );
};
