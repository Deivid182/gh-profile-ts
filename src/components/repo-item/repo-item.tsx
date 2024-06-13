import styles from './repo-item.module.css'
import type { Repo } from '../../types'
import { formatDateToRelative } from '../../utils'

type Props = {
  repo: Repo
}

const RepoItem: React.FC<Props> = ({
  repo
}) => {
  return (
    <div className={styles.repo}>
      <div className={styles.repo__info}>
        <h3 className={styles.repo__info__title}>{repo.name}</h3>
        <p className={styles.repo__info__description}>
          {repo.description}
        </p>
      </div>
      <div className={styles.repo__stats}>
        <div className={styles.repo__stats__item}>
          <img src="/Chield_alt.svg" alt="chield icon" className={styles.repo__stats__icon} width={24} height={24} />
          <span className={styles.repo__stats__item__label}>{repo.license}</span>
        </div>
        <div className={styles.repo__stats__item}>
          <img src="/Nesting.svg" alt="fork icon" className={styles.repo__stats__icon} width={24} height={24} />
          <span className={styles.repo__stats__item__label}>{repo.forks}</span>
        </div>
        <div className={styles.repo__stats__item}>
          <img src="/Star.svg" alt="chield icon" className={styles.repo__stats__icon} width={24} height={24} />
          <span className={styles.repo__stats__item__label}>{repo.stargazers_count}</span>
        </div>
        <p className={styles.repo__stats__updated}>{formatDateToRelative(repo.updated_at)}</p>
      </div>
    </div>
  )
}

export default RepoItem