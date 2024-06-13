//every user in github should have these properties

export type UserGH = {
  name: string
  followers: number
  following: number
  location: string
  bio: string,
  avatar_url: string
  repos_url: string
}

export type Repo = {
  id: string
  name: string
  description: string
  html_url: string
  forks: number
  updated_at: string
  license: string
  stargazers_count: number
}