export const portfolioData = [
  {
    id: 1,
    title: 'Smart School',
    href: '/portfolio/smart-school',
    img: 'Portfolio/SmartSchool/smart_main.webp',
  },
  {
    id: 2,
    title: 'Salang',
    href: '/portfolio/salang',
    img: 'Portfolio/Salang/salang_main.webp',
  },
  {
    id: 3,
    title: 'Storage',
    href: '/portfolio/mz_storage',
    img: 'Portfolio/Storage/storage6.webp',
  },
];

export interface IPortfolio {
  id: number;
  title: string;
  href: string;
  img: string;
}
