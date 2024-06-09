import type { UserGH } from "../types";

export type UserGHActions = 
{ type: "set-user-gh", payload: { user: UserGH} } |
{ type: "get-repo-gh", payload: { user: UserGH} } |
{ type: "clear-user-gh" }

export type UserGHState = {
  user: UserGH
}

export const initialState: UserGHState = {
  user: {
    name: "",
    followers: 0,
    following: 0,
    location: "",
    bio: "",
    repos: []
  }
}

export const userGHReducer = (state: UserGHState, action: UserGHActions) => {
  if(action.type === 'set-user-gh') {
    return {
      ...state,
      user: action.payload.user
    }
  }
  if(action.type === 'get-repo-gh') {
    return {
      ...state,
      user: action.payload.user
    }
  }
  if(action.type === 'clear-user-gh') {
    return {
      ...state,
      user: initialState.user
    }
  }
  return state
}