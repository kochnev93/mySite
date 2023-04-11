import { FC } from 'react';
import { ReactNode } from 'react';

//Styles
import styles from './Experience.module.scss'

// type Props = {
//     children: ReactNode,
//     title: string,
//   };

const Experience: FC = () => {
    const experience = [
        {
            id: 1,
            company: 'Стоматологический центр "Мой Зубной"',
            position: 'Главный специалист ИТ',
            responsibilities: [
                'Разработка модуля для складского учета',
                'Поддержка сайта',
            ]
        },
        {
            id: 2,
            company: 'Стоматологический центр "Мой Зубной"',
            position: 'Специалист ИТ',
            responsibilities: [
                'Разработка модуля для складского учета',
                'Поддержка сайта',
                'Заявки',
            ]
        }
]

  return (
    <ul className={styles.experience}>
        {experience.map(item => {
            return(
                <li key={item.id}>
                    <h4>{item.position}</h4>
                    <span>{item.company}</span>
                    <ul>
                        {item.responsibilities.map((skill, index) => {
                            return(
                                <li key={index}>{skill}</li>
                            )
                        })}
                    </ul>

                </li>
            )
        })}
    </ul>
  );
};

export default Experience;
