import Stat from '../stat/stat'
import styles from './card-profile.module.css'
const CardProfile = () => {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-container__logo']}>
        <img src="/github-logo.jpg" alt="github logo" className={styles['card-container__image']} width={150} height={150}/>
      </div>
      <div className={styles['card-container__info']}>
        <Stat label="Followers" value="27839" />
        <Stat label="Following" value="0" />
        <Stat label="Location" value="San Francisco, CA" />
      </div>
    </div>
  )
}

export default CardProfile