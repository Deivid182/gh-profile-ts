import styles from './repo-item.module.css'
const RepoItem = () => {
  return (
    <div className={styles.repo}>
      <div className={styles.repo__info}>
        <h3 className={styles.repo__info__title}>GitHub</h3>
        <p className={styles.repo__info__description}>How people build software</p>
      </div>
      <div className={styles.repo__stats}>
        <div className={styles.repo__stats__item}>
          <img src="/Chield_alt.svg" alt="chield icon" className={styles.repo__stats__icon} width={24} height={24} />
          <span className={styles.repo__stats__item__label}>MIT</span>
        </div>
        <div className={styles.repo__stats__item}>
          <img src="/Nesting.svg" alt="fork icon" className={styles.repo__stats__icon} width={24} height={24} />
          <span className={styles.repo__stats__item__label}>7</span>
        </div>
        <div className={styles.repo__stats__item}>
          <img src="/Star.svg" alt="chield icon" className={styles.repo__stats__icon} width={24} height={24} />
          <span className={styles.repo__stats__item__label}>Stars</span>
        </div>
        <p className={styles.repo__stats__updated}>updated 4 days ago</p>
      </div>
    </div>
  )
}

export default RepoItem