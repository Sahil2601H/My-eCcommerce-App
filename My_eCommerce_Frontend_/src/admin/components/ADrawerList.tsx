import { Divider } from '@mui/material';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface MenuItem {
    name: string;
    path: string;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
}

const ADrawerList: React.FC<{ menu: MenuItem[]; menu2: MenuItem[]; toggleDrawer: () => void }> = ({ menu, menu2, toggleDrawer }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="h-full w-[300px] border-r py-6 flex flex-col justify-between bg-white shadow-lg">
            {/* Main Menu */}
            <div className="space-y-2 px-3">
                {menu.map((item, index) => (
                    <div 
                        key={index} 
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                            location.pathname === item.path 
                                ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md' 
                                : 'text-gray-700 hover:bg-gray-100 hover:text-blue-500'
                        }`}
                        onClick={() => navigate(item.path)}
                    >
                        <div className="text-xl">{item.icon}</div>
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Account & Logout */}
            <Divider/>
            <div className="space-y-2 px-3 pb-4 mt-2">
                {menu2.map((item, index) => (
                    <div 
                        key={index} 
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                            location.pathname === item.path 
                                ? 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md' 
                                : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
                        }`}
                        onClick={() => navigate(item.path)}
                    >
                        <div className="text-xl">{item.icon}</div>
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ADrawerList;
