import { FC } from 'react'
import styles from './Home.module.scss'


const Home: FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.slider}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg" alt="" />
      </div>


      <div className={styles.bio}>
        <div className={styles.img}>
          <div className={styles.img__wrapper}>
            <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg" alt="" />
          </div>
        </div>
        <div className={styles.bio__title}>
        <h1>Кочнев Антон</h1>
        </div>
        <div className={styles.bio__subtitle}>Разработчик</div>
        <div className={styles.social}>social</div>
      </div>

      <div className={styles.actions}>
        <button>Скачать резюме</button>
        <button>Написать</button>
      </div>

      
    </div>
  )
}

export default Home 