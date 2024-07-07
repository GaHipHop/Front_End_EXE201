import React, { useEffect, useState } from 'react';

const AdminHeader = ({ title, extraContent }) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUserEmail(userInfo.email); // Lấy email từ thông tin người dùng
    }
  }, []);

  return (
    <div className="flex items-center w-full text-5xl font-medium tracking-tight whitespace-nowrap max-w-[1072px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="bg-clip-text text-transparent font-plus-jakarta mt-5 ml-9">
            <span className="text-custom-purple">{title}</span>
          </div>
          {extraContent && (
            <div className="ml-4">{extraContent}</div>
          )}
        </div>
        <div className="ml-9 mt-5">
          <span className="text-lg font-semibold text-gray-700">{userEmail}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
