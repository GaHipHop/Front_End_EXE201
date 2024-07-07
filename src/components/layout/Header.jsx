import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCategory } from '../../lib/service/categoryService';
import { getAllProductByCategoryId } from '../../lib/service/productService';

const Header = ({ onCategorySelect }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [categories, setCategories] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleBlur = () => {
    setSearchOpen(false);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategory();
        const data = response.data.data;
        console.log('Fetched Categories:', data.result);
        setCategories(data.result);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategoryClick = async (categoryId) => {
    try {
      const response = await getAllProductByCategoryId(categoryId);
      const products = response.data.data.result;
      if (onCategorySelect) {
        onCategorySelect(products);
      }
      navigate('/product');
    } catch (error) {
      console.error('Failed to fetch products by category:', error);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "hs-script-loader";
    script.async = true;
    script.defer = true;
    script.src = "//js-na1.hs-scripts.com/46686268.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <header
      className={`flex justify-between items-center px-14 py-5 w-full text-black bg-white border-b border-black max-md:px-5 transition-all duration-300 ease-in-out ${
        isSticky ? 'fixed top-0 left-0 shadow-lg z-50' : 'fixed z-40'
      }`}
    >
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
              <span className="text-[22px] hover:underline decoration-1">Categories</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            {categories.length > 0 ? (
              categories.map((category) => (
                <DropdownItem
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  textValue={category.categoryName}
                >
                  <span className="font-poiret-one text-lg">{category.categoryName}</span>
                </DropdownItem>
              ))
            ) : (
              <DropdownItem textValue="No categories available">
                <span className="font-poiret-one text-lg">No categories available</span>
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
        <a
          href="/about"
          className="block text-[22px] hover:underline hover:decoration-black decoration-1"
        >
          About us
        </a>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 text-[40px] font-medium font-poiret-one">
      <span className="font-bold">Ga Hiphop</span>
      </div>
      <div className="flex items-center space-x-4">
        {searchOpen ? (
          <Input
            ref={inputRef}
            className="h-10 w-[15rem]"
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
        <FontAwesomeIcon icon={faCartShopping} size="lg" className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
