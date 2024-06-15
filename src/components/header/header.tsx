import { useState } from "react";
import styles from "./header.module.css";
import { useApp } from "../../hooks/use-app";
import { getGithubUser } from "../../api";
import { useMutation } from "@tanstack/react-query";
import { FetchError } from "../../utils";
const Header = () => {
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const { state, dispatch, isUserInfoEmpty } = useApp();
  const { mutate } = useMutation({
    mutationFn: getGithubUser,
    onSuccess: (data) => {
      dispatch({ type: "set-user-gh", payload: { user: data, repos: data.repos } });
    },
    onError: (err) => {
      const error = err as FetchError;
      console.log(error.res);
      dispatch({
        type: "show-toast",
        payload: { message: "User not found", type: "error" },
      });
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    dispatch({ type: "clear-user-gh" });
    if (!query) {
      setMessage("Please enter a username");
      return;
    }
    mutate(query);
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
            // data-testid="search-bar"
            placeholder="username"
            className={styles.header__container__search__input}
            value={query}
            onChange={handleChange}
          />
        </form>
        {message && (
          <p className={styles.header__container__error}>{message}</p>
        )}
        {!isUserInfoEmpty && (
          <div className={styles.header__container__user}>
            <img
              src={state.user.avatar_url}
              alt="user image"
              width={100}
              height={100}
              className={styles.header__container__user__image}
            />
            <div className={styles.header__container__user__info}>
              <p
                data-testid="username"
                className={styles.header__container__user__info__username}
              >
                {state.user.name}
              </p>
              <p className={styles.header__container__user__info__bio}>
                {state.user.bio}
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
