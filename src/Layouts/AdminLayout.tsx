import { Outlet } from 'react-router-dom'
import { Home, Briefcase } from 'lucide-react'
import AdminSidebar from '../Components/shared/AdminSidebar'

const items = [
    { label: 'Dashboard', path: '/dashboard', icon: <Home /> },
    { label: 'Jobs', path: '/jobs-management', icon: <Briefcase /> },
]

export default function AdminLayout() {

    return (
        <div >

            <div className='flex flex-row' >
                <AdminSidebar items={items} />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}