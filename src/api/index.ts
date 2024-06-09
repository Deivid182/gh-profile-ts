export const getGithubUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export const getGithubUserRepos = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}