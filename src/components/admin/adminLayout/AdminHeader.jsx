import React from 'react';

const AdminHeader = ({ title, extraContent }) => {
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
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/179e0622cea34c2612198e7cb92e0aecaa2ca707bd71783d9ecdec9aa40f4c23?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
            className="shrink-0 shadow-sm aspect-square w-[60px]"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
