import { lazy } from 'react';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import NotFound from './Pages/NotFound';
import ContactPage from './Pages/ContactPage';
import ServicesPage from './Pages/ServicesPage';
import InvestorsPage from './Pages/InvestorsPage';
import CareersPage from './Pages/CareersPage';
import LoginPage from './Pages/LoginPage';
import AdminLayout from './Layouts/AdminLayout';
import Dashboard from './Pages/Dashboard';
import JobManagement from './Pages/JobManagement';

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
            { path: '/login', element: <LoginPage /> },
        ]
    },
    {
        element: <AdminLayout />,
        public: false,
        children: [
            { index: true, path: '/dashboard', element: <Dashboard /> },
            { path: '/jobs-management', element: <JobManagement /> },
        ]
    },


    { path: '*', element: <NotFound />, public: true },
];