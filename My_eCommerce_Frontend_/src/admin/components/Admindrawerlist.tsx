import React from 'react';
import ADrawerList from '../components/ADrawerList';
import { Dashboard, LocalOffer, GridOn, ElectricBolt, Category, ShoppingBag, AccountBox, Logout, Add } from '@mui/icons-material';

const menu = [
    { name: "Seller Table", path: "/Admindashboard/SellerTb", icon: <Dashboard />, activeIcon: <Dashboard /> },
    { name: "Coupons", path: "/Admindashboard/coupons", icon: <LocalOffer />, activeIcon: <LocalOffer /> },
    { name: "Add Coupnes", path: "/Admindashboard/Add-coupons", icon: <Add />, activeIcon: <Add /> },
    { name: "Home Grid", path: "/Admindashboard/HomeGrid", icon: <GridOn />, activeIcon: <GridOn /> },
    { name: "Electric Category", path: "/Admindashboard/ElectricCategory", icon: <ElectricBolt />, activeIcon: <ElectricBolt /> },
    { name: "Shop by Category", path: "/Admindashboard/ShopByCategory", icon: <Category />, activeIcon: <Category /> },
    { name: "Deals", path: "/Admindashboard/Deals", icon: <ShoppingBag />, activeIcon: <ShoppingBag /> },
];

const menu2 = [
    { name: "Account", path: "/Admindashboard/Account", icon: <AccountBox />, activeIcon: <AccountBox /> },
    { name: "Logout", path: "/Admindashboard/Logout", icon: <Logout />, activeIcon: <Logout /> },
];

function Admindrawerlist({ toggleDrawer }: { toggleDrawer: () => void }) {
    return (
        <ADrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
    );
}

export default Admindrawerlist;
