import React, { useState, useRef, useEffect } from "react";
import {
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleBlur = () => {
    setSearchOpen(false);
  };

  const items = [
    {
      key: "souvenir",
      label: "Souvenir",
    },
    {
      key: "decoration",
      label: "Decoration",
    },
  ];

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <header className="flex justify-between items-center px-14 py-5 w-full text-black bg-white border-b border-black max-md:px-5">
      <div className="flex items-center space-x-4 font-poiret-one">
        <a href="/" className="flex items-center space-x-4 font-poiret-one">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e4339a56fab22957162049c2f58e5884d8d2ea943f28743013a119ef8078b13?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
            className="w-[60px]"
            alt="Logo"
          />
        </a>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="none">
              <span className="text-[22px] hover:underline decoration-1">
                Categories
              </span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            {items.map((item) => (
              <DropdownItem key={item.key}>
                <span className="font-poiret-one text-lg">{item.label}</span>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <a
          href="/about"
          className="block text-[22px] hover:underline hover:decoration-black decoration-1"
        >
          About us
        </a>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 text-[40px] font-bold font-poiret-one font-medium">
        Ga Hiphop
      </div>
      <div className="flex items-center space-x-4">
        {searchOpen ? (
          <Input
            ref={inputRef}
            className="h-10 w-[15rem]" // Set a fixed width here
            placeholder="Type to search..."
            size="sm"
            type="search"
            onBlur={handleBlur}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            onClick={handleSearchClick}
            className="cursor-pointer"
          />
        )}
        <FontAwesomeIcon
          icon={faCartShopping}
          size="lg"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
