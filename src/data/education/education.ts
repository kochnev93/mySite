export type TypeEducation = {
    id: number,
    university: string,
    faculty: string,
    specialty: string,
    city: string,
    yearStart: string,
    yearEnd: string,
}

export const educationData:ReadonlyArray<TypeEducation> = [
    {
        id: 3,
        university: 'Skillbox',
        faculty: 'JavaScript (профессиональный уровень)',
        specialty: '',
        city: '',
        yearStart: '2020',
        yearEnd: '2020',
    },
    {
        id: 1,
        university: 'Тихоокеанский Государственный университет',
        faculty: 'Факультет компьютерных и фундаментальных наук',
        specialty: 'Прикладная математика и информатика',
        city: 'Хабаровск',
        yearStart: '2015',
        yearEnd: '2018',
    },
    {
        id: 2,
        university: 'Тихоокеанский Государственный университет',
        faculty: 'Факультет компьютерных и фундаментальных наук',
        specialty: 'Прикладная математика',
        city: 'Хабаровск',
        yearStart: '2011',
        yearEnd: '2015',
    },

]