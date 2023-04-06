import { FC } from 'react'
import styles from './Home.module.scss'
import PrintedText from '@/components/PrintedText/PrintedText'
import Image from 'next/image'




const Home: FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.slider}>
        <img src="https://kartinki.cc/files/img/post/98/zheltye-abstraktnye-10.webp" alt="" />
      </div>


      <div className={styles.bio}>
        <div className={styles.img}>
          <div className={styles.img__wrapper}>
            {/* <img src="./photo2.jpg" alt="" /> */}
            <Image src="/photo2.jpg" alt="Кочнев Антон" width={500} height={500} quality={50}/>
          </div>
        </div>
        <div className={styles.bio__title}>
        <h1>Кочнев Антон</h1>
        </div>
        <div className={styles.bio__subtitle}>Разработчик</div>
        <PrintedText/>
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