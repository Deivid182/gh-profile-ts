import { useReducer, createContext, useMemo } from "react";
import {
  userGHReducer,
  initialState,
  type UserGHActions,
} from "../reducers/user-gh";

type UserGHContextType = {
  state: typeof initialState;
  dispatch: React.Dispatch<UserGHActions>;
  isUserInfoEmpty: boolean;
};

export const UserGHContext = createContext<UserGHContextType>(
  {} as UserGHContextType
);

export const UserGHProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userGHReducer, initialState);

  const isUserInfoEmpty = useMemo(() => {
    return state.user.name === "";
  }, [state.user.name]);
  return (
    <UserGHContext.Provider value={{ state, dispatch, isUserInfoEmpty }}>
      {children}
    </UserGHContext.Provider>
  );
};
