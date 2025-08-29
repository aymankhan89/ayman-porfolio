import ecommerce1 from '../assets/images/cases/ecuatraveling/ecuatraveling-1.jpg'
import ecommerce2 from '../assets/images/cases/ecuatraveling/ecuatraveling-2.jpg'
import ecommerce3 from '../assets/images/cases/ecuatraveling/ecuatraveling-3.jpg'
import ecommerce4 from '../assets/images/cases/ecuatraveling/ecuatraveling-4.jpg'

import fintech1 from '../assets/images/cases/pencil/pencil-1.jpg'
import fintech2 from '../assets/images/cases/pencil/pencil-2.jpg'
import fintech3 from '../assets/images/cases/pencil/pencil-3.jpg'
import fintech4 from '../assets/images/cases/pencil/pencil-4.jpg'

import health1 from '../assets/images/cases/zinetikan/zinetikan-1.jpg'
import health2 from '../assets/images/cases/zinetikan/zinetikan-2.jpg'
import health3 from '../assets/images/cases/zinetikan/zinetikan-3.jpg'
import health4 from '../assets/images/cases/zinetikan/zinetikan-4.jpg'

const cases = {
  'react-ecommerce': {
    id: 0,
    title: 'React E-Commerce Platform',
    subtitle: 'Modern Shopping Application',
    text: 'A full-featured e-commerce web application built with React and modern frontend technologies. The project features responsive design, real-time cart management, payment integration, and optimized performance. Built with component-based architecture, the application provides seamless user experience across all devices. Implementation includes Redux for state management, React Router for navigation, and custom hooks for business logic.',
    year: '2024',
    roles: ['Frontend Development', 'React Development', 'UI Implementation'],
    techs: ['React', 'Redux', 'JavaScript', 'CSS3', 'Webpack'],
    images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
    ids: [6, 7, 8, 9],
    url: 'react-ecommerce',
    visit: 'https://www.ayman-react-ecommerce.com/'
  },
  'vue-dashboard': {
    id: 1,
    title: 'Vue.js Admin Dashboard',
    subtitle: 'Enterprise Management Platform',
    text: 'A comprehensive admin dashboard built with Vue.js for managing business operations and analytics. Features include real-time data visualization, user management, reporting tools, and responsive design. The application utilizes Vue 3 Composition API, Pinia for state management, and modern UI components. Built with performance optimization and scalability in mind, supporting large datasets and complex user interactions.',
    year: '2024',
    roles: ['Frontend Development', 'Vue.js Development', 'Dashboard Design'],
    techs: ['Vue.js', 'Pinia', 'TypeScript', 'Chart.js', 'Vite'],
    images: [fintech1, fintech2, fintech3, fintech4],
    ids: [10, 11, 12, 13],
    url: 'vue-dashboard',
    visit: 'https://www.ayman-vue-dashboard.com/'
  },
  'nextjs-portfolio': {
    id: 2,
    title: 'Next.js Portfolio Website',
    subtitle: 'Personal Portfolio Platform',
    text: 'A modern portfolio website built with Next.js featuring server-side rendering, optimized performance, and dynamic content management. The project showcases advanced Next.js features including API routes, image optimization, and static site generation. Built with responsive design principles and modern web standards, the site delivers excellent performance scores and SEO optimization.',
    year: '2023',
    roles: ['Frontend Development', 'Next.js Development', 'Performance Optimization'],
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    images: [health1, health2, health3, health4],
    ids: [14, 15, 16, 17],
    url: 'nextjs-portfolio',
    visit: 'https://www.ayman-nextjs-portfolio.com/'
  }
}

export default cases
