export type TypeExperience = {
  id: number;
  company: string;
  yearStart: string;
  yearEnd: string;
  presentTime: boolean;
  position: string;
  responsibilities: string[];
};

export const experienceData: ReadonlyArray<TypeExperience> = [
  {
    id: 1,
    company: 'Стоматологический центр "Мой Зубной"',
    yearStart: '2021',
    yearEnd: '',
    presentTime: true,
    position: 'Главный специалист ИТ',
    responsibilities: [
      'Разработка модуля для складского учета с использованием React, Redux-toolkit, Express и других технологий',
      'Автоматизация бизнес-процессов компании',
      'Доработка и поддержка внутренних сервисов компании (php, mysql)',
      'Доработка сайта компании. Верстка новых страниц, форм',
      'Администрирование и сопровождение ERP-системы компании',
      'Внедрение и настройка коллтрекинга',
      'Контроль за работой ИТ-специалистов',
    ],
  },
  {
    id: 2,
    company: 'Стоматологический центр "Мой Зубной"',
    yearStart: '2018',
    yearEnd: '2021',
    presentTime: false,
    position: 'Специалист ИТ',
    responsibilities: [
      'Верстка новых страниц на сайте',
      'Сопровождение сайта компании',
      'Мониторинг работоспособности сетевой инфраструктуры',
      'Техническая поддержка пользователей',
    ],
  },
  {
    id: 3,
    company: 'ООО "Кар-финанс"',
    yearStart: '2020',
    yearEnd: '2021',
    presentTime: false,
    position: 'Веб-разработчик',
    responsibilities: [
      'Разработка и поддержка сайтов с использованием HTML, CSS, JavaScript, WordPress и других технологий',
      'Оптимизация производительности и скорости загрузки веб-страниц',
      'Интеграция с базами данных, MySQL',
      'Работа с API и интеграция сторонних сервисов'
    ],
  },
  {
    id: 4,
    company: 'Тихоокеанский государственный университет',
    yearStart: '2018',
    yearEnd: '2018',
    presentTime: false,
    position: 'Графический дизайнер',
    responsibilities: [
      'Разработка брендбука',
      'Разработка макетов для официального сайта',
      'Верстка печатной продукции',
    ],
  },
];
