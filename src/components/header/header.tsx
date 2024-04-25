import { useState } from "react";
import { getGithubUser } from "../../api";
import type { UserGH } from "../../types";
import styles from "./header.module.css";
const Header = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState<UserGH | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUser(null);
    setError(null);
    if (!query) {
      setError("Please enter a username");
      return;
    }

    const userFound = await getGithubUser(query);
    console.log(userFound)
    if(userFound.name != null) {
      setUser(userFound);
    } else {
      setError("User not found");
    }

  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <form
          name="form"
          onSubmit={handleSubmit}
          className={styles.header__container__search}
        >
          <img
            src="/Search.svg"
            alt="search icon"
            width={24}
            height={24}
            className={styles.header__container__search__icon}
          />
          <input
            type="text"
            data-testid="search-bar"
            placeholder="username"
            className={styles.header__container__search__input}
            value={query}
            onChange={handleChange}
          />
        </form>
        {user ? (
          <div className={styles.header__container__user}>
            <img
              src="/github-logo.jpg"
              alt="user image"
              width={100}
              height={100}
              className={styles.header__container__user__image}
            />
            <div className={styles.header__container__user__info}>
              <p data-testid="username" className={styles.header__container__user__info__username}>
                {user.name}
              </p>
              <p className={styles.header__container__user__info__bio}>
                {user.bio}
              </p>
            </div>
          </div>
        ) : (
          <p className={styles.header__container__error}>{error}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
