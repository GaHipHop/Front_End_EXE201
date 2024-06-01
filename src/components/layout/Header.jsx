import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-14 py-5 w-full text-black bg-white border-b border-black max-md:px-5">
      <div className="flex items-center space-x-4 font-poiret-one">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e4339a56fab22957162049c2f58e5884d8d2ea943f28743013a119ef8078b13?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
          className="w-[60px]"
          alt="Logo"
        />
        <a href="#categories" className="block text-[22px]">
          Categories
        </a>
        <a href="#about" className="block text-[22px]">
          About us
        </a>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 text-[40px] font-plus-jakarta font-medium">
        Ga Hiphop
      </div>
      <div className="flex items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b11c8ebc8b6577fca84b07a11b82bc14b07dd21107243946b23f65c4a8271b8c?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
          className="w-[30px]"
          alt="Search"
        />
      </div>
    </header>
  );
};

export default Header;
