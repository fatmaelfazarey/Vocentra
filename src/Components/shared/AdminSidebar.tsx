import { LogOut, Maximize, Minimize } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../services/authService'

interface SidebarItem {
    label: string
    path: string
    icon: React.ReactNode
}

interface AdminSidebarProps {
    items: SidebarItem[]
    logo?: React.ReactNode
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ items, logo }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className={`h-screen bg-secondary border-r border-gray-200 transition-all duration-300 flex flex-col
            ${collapsed ? 'w-20' : 'w-64'}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-text/30">
                {!collapsed && (
                    <div className="text-lg font-bold text-primary flex-1">
                        {logo || 'Admin Panel'}
                    </div>
                )}

                <button
                    onClick={() => setCollapsed(prev => !prev)}
                    className="text-text hover:text-primary mx-auto"
                >
                    {collapsed ? <Maximize width={18} /> : <Minimize width={18} />}
                </button>
            </div>

            {/* Menu */}
            <nav className="flex-1 p-3 space-y-2">
                {items.map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg transition-all
                            ${isActive
                                ? 'bg-primary text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }
                            ${collapsed ? 'justify-center' : ''}`
                        }
                    >
                        <div className="text-xl">{item.icon}</div>

                        {!collapsed && (
                            <span className="text-sm font-medium">
                                {item.label}
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>


            <div
                onClick={() => { logout(); navigate('/') }}
                className="p-3 border-t border-text/30 text-xs hover:text-primary cursor-pointer text-gray-500 flex justify-center items-center gap-2">
                {!collapsed ? 'Logout' : ''}
                < LogOut width={18} />
            </div>
        </div>
    )
}

export default AdminSidebar