export type TypeExperience = {
    id: number,
    company: string,
    yearStart: string,
    yearEnd: string,
    presentTime: boolean,
    position: string,
    responsibilities: string[] 
}

export const experienceData:ReadonlyArray<TypeExperience> = [
    {
        id: 1,
        company: 'Стоматологический центр "Мой Зубной"',
        yearStart: '2021',
        yearEnd: '',
        presentTime: true,
        position: 'Главный специалист ИТ',
        responsibilities: [
            'Разработка модуля для складского учета',
            'Автоматизация бизнес-процессов компании',
            'Доработка и поддержка внутренних сервисов компании',
            'Доработка сайта компании. Верстка новых страниц, форм',
            'Администрирование и сопровождение ERP-системы компании',
            'Внедрение и настройка коллтрекинга',
            'Контроль за работой ИТ-специалистов',
        ]
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

        ]
    },
    {
        id: 3,
        company: 'ООО "Кар-финанс"',
        yearStart: '2020',
        yearEnd: '2020',
        presentTime: false,
        position: 'Веб-разработчик',
        responsibilities: [
            'Разработка сайтов для компании',
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
        ]
    }
]