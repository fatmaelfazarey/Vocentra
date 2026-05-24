import { Outlet } from 'react-router-dom';
import TopHeader from '../Components/shared/TopHeader';
import Header from '../Components/shared/Header';
import Footer from '../Components/shared/Footer';

const Layout = () => {
    return (
        <div>
            <div>
                <TopHeader />
                <Header />
                <div>
                    <Outlet />
                </div>
                <Footer />
            </div>

        </div>
    );
};


export default Layout