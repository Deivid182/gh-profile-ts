import SearchBar from '../search-bar/search-bar'
import styles from './header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <SearchBar />
      </div>
    </header>
  )
}

export default Header