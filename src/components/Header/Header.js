import styles from '../Header/Header.module.scss';

export const Header = ({titleCategory, description}) => {
  return (
    <div className={styles.bg}>
      <h1>{titleCategory}</h1>
      <h4>{description}</h4>
    </div>
  )
}
