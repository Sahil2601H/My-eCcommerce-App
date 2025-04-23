import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AccountBox, Add, Dashboard, Inventory, Logout, Payment, Payments, Receipt, ShoppingBag } from '@mui/icons-material';
import { logout } from '../../State/AuthSlice';
import { useAppDispatch } from '../../State/Store';

interface MenuItem {
    name: string;
    path: string;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
}

const DrawerList: React.FC<{ toggleDrawer: () => void }> = ({ toggleDrawer }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        try {
          await dispatch(logout()).unwrap();
          navigate("/");
        } catch (error) {
          console.error("Logout failed:", error);
        }
      };





    const menu: MenuItem[] = [
        { name: "Dashboard", path: "/seller", icon: <Dashboard />, activeIcon: <Dashboard /> },
        { name: "Orders", path: "/seller/orders", icon: <ShoppingBag />, activeIcon: <ShoppingBag /> },
        { name: "Product", path: "/seller/products", icon: <Inventory />, activeIcon: <Inventory /> },
       
        { name: "Add Product", path: "/seller/addproducts", icon: <Add />, activeIcon: <Add /> },
        { name: "Payments", path: "/seller/payments", icon: <Payments />, activeIcon: <Payments /> },
        { name: "Transaction", path: "/seller/transaction", icon: <Receipt />, activeIcon: <Receipt /> },
    ];

    const menu2: MenuItem[] = [
        { 
            name: "Account", 
            path: "/seller/account", 
            icon: <AccountBox />, 
            activeIcon: <AccountBox /> 
        },
        { 
            name: "Logout", 
            path: "#",
            icon: <Logout />, 
            activeIcon: <Logout />,
            onClick: handleLogout
        }
    ];

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
            <div className="space-y-2 px-3 pb-4">
        {menu2.map((item, index) => (
          <div 
          key={index}
          onClick={() => {
              if (item.onClick) {
                  item.onClick();
              } else {
                  navigate(item.path);
              }
          }}
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
              location.pathname === item.path 
                  ? 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
          }`}
      >
          <div className="text-xl">{item.icon}</div>
          <span className="text-sm font-medium">{item.name}</span>
      </div>
                ))}
            </div>
        </div>
    );
};

export default DrawerList;
