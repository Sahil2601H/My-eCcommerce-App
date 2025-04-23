import React from "react";
import ProfileField from "../../components/Profilefield";

const UserDetail: React.FC = () => {
  return (
    <div className="flex justify-center py-10 bg-gray-10 min-h-screen">
      <div className="w-full lg:w-[100%] bg-white shadow-md rounded-lg p-6 border border-gray-200">
        {/* Title */}
        <div className="pb-5 border-b border-gray-300">
          <h1 className="text-2xl font-bold text-gray-700">Personal Details</h1>
        </div>

        {/* Profile Fields */}
        <div className="mt-5 space-y-4">
          <ProfileField keys="Name" value="Sahil Halpati" />
          <ProfileField keys="Mobile" value="6352433097" />
          <ProfileField keys="Email" value="halpatisahil.myecommerce@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
