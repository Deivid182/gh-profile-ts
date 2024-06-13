import Stat from '../stat/stat'
import styles from './card-profile.module.css'
import { useApp } from '../../hooks/use-app'
const CardProfile = () => {

  const { state } = useApp();

  return (
    <div className={styles['card-container']}>
      <div className={styles['card-container__logo']}>
        <img src={state.user.avatar_url} alt="avatar image" className={styles['card-container__image']} width={150} height={150}/>
      </div>
      <div className={styles['card-container__info']}>
        <Stat label="Followers" value={state.user.followers.toString()} />
        <Stat label="Following" value={state.user.following.toString()} />
        <Stat label="Location" value={state.user.location ?? "No visible"} />
      </div>
    </div>
  )
}

export default CardProfile