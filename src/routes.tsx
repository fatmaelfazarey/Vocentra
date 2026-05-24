import { lazy } from 'react';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import NotFound from './Pages/NotFound';
import ContactPage from './Pages/ContactPage';
import LoadingPage from './Pages/LoadingPage';
import ServicesPage from './Pages/ServicesPage';
import InvestorsPage from './Pages/InvestorsPage';
import CareersPage from './Pages/CareersPage';

const Layout = lazy(() => import('./Layouts/Layout'));

export const routes = [
    {
        element: <Layout />,
        public: true,
        children: [
            { index: true, path: '/', element: <LandingPage /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/contact', element: <ContactPage /> },
            { path: '/services', element: <ServicesPage /> },
            { path: '/investors', element: <InvestorsPage /> },
            { path: '/careers', element: <CareersPage /> },
        ]
    },


    { path: '*', element: <NotFound />, public: true },
];