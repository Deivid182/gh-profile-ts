import { useState } from "react";
import styles from "./search-bar.module.css";
const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className={styles.search}>
      <img
        src="/Search.svg"
        alt="search icon"
        width={24}
        height={24}
        className={styles.search__icon}
      />
      <input
        type="text"
        data-testid="search-bar"
        placeholder="username"
        className={styles.search__input}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
