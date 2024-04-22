import RepoItem from '../repo-item/repo-item'
import styles from './repo-list.module.css'
const RepoList = () => {
  return (
    <div className={styles['repo-list']}>
      <div className={styles['repo-list__heading']}>
        <h1 className={styles['repo-list__heading__title']}>GitHub</h1>
        <p className={styles['repo-list__heading__description']}>How people build software</p>
      </div>
      <div className={styles['repo-list__grid']}>
        <RepoItem />
        <RepoItem />
        <RepoItem />
        <RepoItem />
      </div>
    </div>
  )
}

export default RepoList