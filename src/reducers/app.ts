import type { Repo, UserGH } from "../types";

export type UserGHActions = 
{ type: "set-user-gh", payload: { user: UserGH, repos: Repo[]} } |
{ type: "get-repo-gh", payload: { user: UserGH} } |
{ type: "show-toast", payload: { message: string, type: string } } |
{ type: "clear-user-gh" }

export type UserGHState = {
  user: UserGH,
  repos: Repo[],
  toast: {
    message: string
    type: string
  }
}

export const initialState: UserGHState = {
  user: {
    name: "Github",
    avatar_url: "/github-logo.jpg",
    followers: 27839,
    following: 0,
    location: "San Francisco",
    bio: "how people build software",
    repos_url: ""
  },
  repos: [],
  toast: {
    message: "",
    type: ""
  }
}

export const userGHReducer = (state: UserGHState, action: UserGHActions) => {
  if(action.type === 'set-user-gh') {
    return {
      ...state,
      user: action.payload.user,
      repos: action.payload.repos
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

  if(action.type === 'show-toast') {
    return {
      ...state,
      toast: {
        message: action.payload.message,
        type: action.payload.type
      }
    }
  }
  return state
}