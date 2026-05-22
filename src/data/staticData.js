import Ecommerce from '../assets/Ecommerce.png';
import Portfolio from '../assets/Portfolio.png';
import Financial from '../assets/Financial.png';
import Vinay from '../assets/Vinay.png';
import Mani from '../assets/Mani.png';

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern shopping experience with lightning-fast search and smooth checkout.',
    image: Ecommerce,
    tags: ['React', 'Tailwind', 'Vite']
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Real-time analytics and beautiful charts for tracking financial metrics.',
    image: Financial,
    tags: ['React Router', 'Recharts']
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A sleek, dark-themed personal portfolio showcasing creative work.',
    image: Portfolio,
    tags: ['Tailwind', 'Framer Motion']
  }
];

export const team = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'Lead Developer',
    avatar: Mani
  },
  {
    id: 2,
    name: 'Sam Smith',
    role: 'UI/UX Designer',
    avatar: Vinay
  }
];
