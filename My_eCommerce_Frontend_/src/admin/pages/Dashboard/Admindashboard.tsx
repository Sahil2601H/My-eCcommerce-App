import React from 'react';

import SellerRoute from '../../../Routes/SellerRoute';
import Adminroute from '../../../Routes/Adminroute';
import Admindrawerlist from '../../components/Admindrawerlist';

const toggleDrawer = () => {};

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <div className="lg:flex lg:h-[90vh]">
        <section className="hidden lg:block h-full">
          {<Admindrawerlist toggleDrawer={toggleDrawer} /> }
        </section>
        <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
          {<Adminroute/>}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;