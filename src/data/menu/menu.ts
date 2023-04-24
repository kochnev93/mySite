export const menuData = [
  {
    id: 1,
    title: 'Обо мне',
    href: '',
    activeClass: '',
    icon: 'FaUserAlt',
    dataAttr: 'About'
  },
  {
    id: 2,
    title: 'Резюме',
    href: '#resume',
    activeClass: '',
    icon: 'CgFileDocument',
    dataAttr: 'Resume'
  },
  {
    id: 3,
    title: 'Кейсы',
    href: '#portfolio',
    activeClass: '',
    icon: 'BsPersonWorkspace',
    dataAttr: 'Works'
  },
];

export interface IMenu {
    id: number,
    title: string,
    href: string,
    activeClass: string,
    icon: string,
    dataAttr: string
}
