import { FC } from 'react'
import styles from './Home.module.scss'


const Home: FC = () => {
  return (
    <div>
      <h1 className={styles.logo}>hELLO</h1>
      <a href="">Я ссылка</a>
    </div>
  )
}

export default Home 