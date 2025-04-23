import React from 'react';
import DrawerList from '../drowerlist';

const SellerDrawerList: React.FC<{ toggleDrawer: () => void }> = ({ toggleDrawer }) => {
    return <DrawerList toggleDrawer={toggleDrawer} />;
};

export default SellerDrawerList;
