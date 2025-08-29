import ecommerce1 from '../assets/images/cases/ecuatraveling/netflix1.png'
import ecommerce2 from '../assets/images/cases/ecuatraveling/netflix2.png'
import ecommerce3 from '../assets/images/cases/ecuatraveling/netflix3.png'
import ecommerce4 from '../assets/images/cases/ecuatraveling/netflix4.png'

import fintech1 from '../assets/images/cases/pencil/pnow1.png'
import fintech2 from '../assets/images/cases/pencil/pnow2.png'
import fintech3 from '../assets/images/cases/pencil/pnow3.png'
import fintech4 from '../assets/images/cases/pencil/pencil-4.jpg'

import health1 from '../assets/images/cases/zinetikan/ats1.png'
import health2 from '../assets/images/cases/zinetikan/ats2.png'
import health3 from '../assets/images/cases/zinetikan/ats3.png'
import health4 from '../assets/images/cases/zinetikan/zinetikan-4.jpg'

const cases = {
  'react-ecommerce': {
    id: 0,
    title: 'Netflix Clone',
    subtitle: 'Streaming Platform Interface',
    text: 'A pixel-perfect Netflix clone built with React, featuring user authentication, movie browsing, trailer integration, and responsive design. The project demonstrates advanced React concepts including custom hooks, context API, and component optimization. Integrated with TMDB API for real-time movie data and Firebase for authentication. The application showcases modern UI/UX patterns with smooth animations and seamless user experience across all devices.',
    year: '2024',
    roles: ['Frontend Development', 'React Development', 'API Integration'],
    techs: ['React', 'Firebase', 'TMDB API', 'CSS3', 'JavaScript'],
    images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
    ids: [6, 7, 8, 9],
    url: 'react-ecommerce',
    visit: 'https://www.ayman-netflix-clone.com/'
  },
  'vue-dashboard': {
    id: 1,
    title: 'ProficientNow Website',
    subtitle: 'Corporate Business Platform',
    text: 'A professional corporate website for ProficientNow built with modern web technologies. The project features responsive design, optimized performance, and intuitive user interface. Developed with focus on clean code architecture, SEO optimization, and cross-browser compatibility. The website includes dynamic content sections, contact forms, and smooth scrolling animations that enhance user engagement and business credibility.',
    year: '2024',
    roles: ['Frontend Development', 'Web Development', 'UI Implementation'],
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
    images: [fintech1, fintech2, fintech3, fintech4],
    ids: [10, 11, 12, 13],
    url: 'vue-dashboard',
    visit: 'https://www.proficientnow.com/'
  },
  'nextjs-portfolio': {
    id: 2,
    title: 'ProficientNow ATS System',
    subtitle: 'Applicant Tracking Platform',
    text: 'An advanced Applicant Tracking System (ATS) for ProficientNow that streamlines the recruitment process. Built with modern frontend frameworks, the system features candidate management, resume parsing, interview scheduling, and real-time notifications. The application provides an intuitive dashboard for HR teams with advanced filtering, search functionality, and automated workflows. Focused on user experience and efficient data handling for high-volume recruitment operations.',
    year: '2023',
    roles: ['Frontend Development', 'System Development', 'Dashboard Design'],
    techs: ['React', 'Node.js', 'MongoDB', 'Express', 'Material-UI'],
    images: [health1, health2, health3, health4],
    ids: [14, 15, 16, 17],
    url: 'nextjs-portfolio',
    visit: 'https://ats.proficientnow.com/'
  }
}


export default cases
