import { Divider } from '@mui/material';
import React from 'react';

interface ProfileFieldProps {
  keys: string;
  value: string;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ keys, value }) => {
  return (
    <div className="flex items-center bg-slate-50 p-4 rounded-lg shadow-sm border border-gray-200">
      {/* Label */}
      <p className="w-24 lg:w-40 pr-5 font-medium text-gray-700">{keys}</p>

      {/* Divider */}
      <Divider orientation="vertical" flexItem className="!h-5" />

      {/* Value */}
      <p className="ml-5 text-gray-900">{value}</p>
    </div>
  );
};

export default ProfileField;
