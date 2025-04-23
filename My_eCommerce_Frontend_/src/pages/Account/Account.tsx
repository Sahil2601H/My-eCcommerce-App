import { Divider } from "@mui/material";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Order from "./Order";
import OrderDetails from "./OrderDetails";
import UserDetail from "./UserDetail";

const menu = [
  { name: "Orders", path: "orders" },
  { name: "Order Details", path: "order-details" },
  { name: "Profile", path: "profile" },
  { name: "Saved Cards", path: "saved-cards" },
  { name: "Addresses", path: "addresses" },
  { name: "Logout", path: "logout" },
];

function Account() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/account") {
      navigate("/account/orders", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10">
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">Zosh</h1>
      </div>
      <Divider className="border border-black" />

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh] gap-6 mt-6 border border-black p-4 rounded-lg shadow-md">
        {/* Sidebar Menu */}
        <section className="col-span-1 lg:border-r lg:border-black lg:pr-5 py-5 h-full">
          <div className="flex flex-col items-center space-y-2">
            {menu.map((item) => {
              const isActive = window.location.pathname.includes(item.path);

              return (
                <div
                  key={item.name}
                  className={`w-[80%] text-gray-700 font-medium px-4 py-3 cursor-pointer 
                  rounded-lg transition duration-300 ease-in-out flex items-center gap-3
                  border border-transparent
                  ${isActive ? "bg-[#42a5f5] text-white shadow-md border-[#42a5f5]" : "bg-transparent"}
                  hover:border-[#42a5f5] hover:text-[#42a5f5]"`}
                  onClick={() => navigate(`/account/${item.path}`)}
                >
                  {/* Blue Stripe Indicator */}
                  <div
                    className={`w-1 h-full bg-[#007AFF] transition-all rounded-sm ${
                      isActive ? "visible" : "invisible"
                    }`}
                  />
                  {item.name}
                </div>
              );
            })}
          </div>
        </section>

        {/* Dynamic Section Content */}
        <section className="col-span-2 border-l border-black pl-5 w-full">
          <Routes>
            <Route path="" element={<Navigate to="orders" />} />
            <Route path="orders" element={<Order />} />
            <Route path="order-details" element={<OrderDetails />} />
            <Route path="profile" element={<UserDetail />} />
            <Route path="saved-cards" element={<div>Saved Cards Section</div>} />
            <Route path="addresses" element={<div>Addresses Section</div>} />
            <Route path="logout" element={<div>Logout Functionality</div>} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default Account;
