import styles from './stat.module.css'
type Props = {
  label: string
  value: string
}
const Stat = ({ value, label }: Props) => {
  return (
    <div className={styles.stat}>
      <p className={styles.stat__label}>{label}</p>
      <p className={styles.stat__value}>{value}</p>
    </div>
  )
}

export default Stat