export const menuData = [
  {
    id: 1,
    title: 'Обо мне',
    href: '',
    activeClass: '',
    icon: 'FaUserAlt'
  },
  {
    id: 2,
    title: 'Резюме',
    href: '#resume',
    activeClass: '',
    icon: 'CgFileDocument'
  },
  {
    id: 3,
    title: 'Кейсы',
    href: '#portfolio',
    activeClass: '',
    icon: 'BsPersonWorkspace'
  },
];

export interface IMenu {
    id: number,
    title: string,
    href: string,
    activeClass: string,
    icon: string
}
