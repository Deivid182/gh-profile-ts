import { useReducer, createContext, useMemo, useEffect } from "react";
import { Toaster, toast } from "sonner"
import {
  userGHReducer,
  initialState,
  type UserGHActions,
} from "../reducers/app";

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

  useEffect(() => {
    if (state.toast.message !== "") {
      state.toast.type === "success" ? toast.success(state.toast.message) : toast.error(state.toast.message)
    }
  }, [state.toast])

  const isUserInfoEmpty = useMemo(() => {
    return state.user.name === "";
  }, [state.user.name]);

  return (
    <UserGHContext.Provider value={{ state, dispatch, isUserInfoEmpty }}>
      <Toaster toastOptions={{ duration: 3000 }} position="top-center" />
      {children}
    </UserGHContext.Provider>
  );
};
