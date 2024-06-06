import React from 'react';

const AdminHeader = () => {
  return (
    <div className="flex gap-5 justify-between self-center px-5 w-full text-5xl font-medium tracking-tight text-center whitespace-nowrap max-w-[1072px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
      <div className="my-auto bg-clip-text text-transparent max-md:text-4xl font-plus-jakarta">
        <span className="text-custom-purple">DASHBOARD</span>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/179e0622cea34c2612198e7cb92e0aecaa2ca707bd71783d9ecdec9aa40f4c23?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
        className="shrink-0 shadow-sm aspect-square w-[68px]"
        alt="User Avatar"
      />
    </div>
  );
};

export default AdminHeader;
