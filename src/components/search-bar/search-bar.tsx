import styles from './search-bar.module.css'
const SearchBar = () => {
  return (
    <div className={styles.search}>
      <img src="/Search.svg" alt="search icon" width={24} height={24} className={styles.search__icon}/>
      <input type="text" placeholder="username" className={styles.search__input}/>
    </div>
  )
}

export default SearchBar