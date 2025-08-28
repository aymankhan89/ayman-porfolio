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
  'ecommerce-app': {
    id: 0,
    title: 'E-Commerce Mobile App',
    subtitle: 'Shopping Application',
    text: 'This mobile application was designed to provide a seamless shopping experience for users. The project focused on creating an intuitive user interface with smooth navigation and engaging micro-interactions. The design emphasizes visual hierarchy, product discovery, and conversion optimization. Through extensive user research and usability testing, we created a design system that balances aesthetics with functionality, resulting in improved user engagement and sales conversion rates.',
    year: '2024',
    roles: ['UI Design', 'UX Research', 'Prototyping'],
    techs: ['Figma', 'Principle', 'UserTesting', 'Maze'],
    images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
    ids: [6, 7, 8, 9],
    url: 'ecommerce-app',
    visit: 'https://www.mustafa-ecommerce-case.com/'
  },
  'fintech-dashboard': {
    id: 1,
    title: 'FinTech Dashboard',
    subtitle: 'Financial Technology Platform',
    text: 'A comprehensive dashboard design for a financial technology platform that helps users manage their investments and track market trends. The design challenge was to present complex financial data in an accessible and visually appealing way. Through card-sorting exercises and user interviews, we developed an information architecture that prioritizes the most important metrics while maintaining easy access to detailed analytics. The result is a clean, professional interface that builds trust and confidence.',
    year: '2023',
    roles: ['UI Design', 'UX Research', 'Information Architecture'],
    techs: ['Figma', 'Sketch', 'InVision', 'Hotjar'],
    images: [fintech1, fintech2, fintech3, fintech4],
    ids: [10, 11, 12, 13],
    url: 'fintech-dashboard',
    visit: 'https://www.mustafa-fintech-case.com/'
  },
  'health-app': {
    id: 2,
    title: 'Healthcare Mobile App',
    subtitle: 'Digital Health Platform',
    text: 'This healthcare application was designed to help users track their wellness journey and connect with healthcare professionals. The design process involved extensive research into accessibility standards and healthcare UX best practices. We conducted user interviews with both patients and healthcare providers to understand their needs and pain points. The final design features clear navigation, accessible color schemes, and intuitive data visualization that makes health tracking simple and motivating for users of all ages.',
    year: '2023',
    roles: ['UI Design', 'UX Research', 'Accessibility Design'],
    techs: ['Figma', 'Adobe XD', 'Lookback', 'Optimal Workshop'],
    images: [health1, health2, health3, health4],
    ids: [14, 15, 16, 17],
    url: 'health-app',
    visit: null
  }
}

export default cases
