import { useState } from "react";
import styles from "./search-bar.module.css";

type Props = {
  onSubmit?: (value: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit && onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
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
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
