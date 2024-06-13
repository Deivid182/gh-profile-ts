import { FetchError } from "../utils";
import type { UserGH, Repo } from "../types";
export const getGithubUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if(!response.ok) {
    throw new FetchError(response);
  }
  const data: UserGH = await response.json();
  const repos: Repo[] = await getGithubUserRepos(data.repos_url);
  return { ...data, repos };
}

export const getGithubUserRepos = async (reposUrl: string) => {
  const response = await fetch(reposUrl);
  if(!response.ok) {
    throw new FetchError(response);
  }
  return await response.json();
}