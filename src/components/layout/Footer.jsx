import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
function PolicyList() {
  const policies = [
    { name: "About products", link: "#" },
    { name: "Private Policy", link: "#" },
    { name: "Delivery policy", link: "#" },
  ];

  return (
    <div>
      <h2 className="text-xl font-plus-jakarta mb-2">Policy</h2>
      {policies.map((policy, index) => (
        <a
          key={index}
          href={policy.link}
          className="text-gray-600 hover:underline block font-open-sans"
        >
          {policy.name}
        </a>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div className="md:mr-4">
      <h2 className="text-xl font-plus-jakarta mb-2">Contact</h2>
      <p className="text-gray-600 mb-1 flex items-center font-open-sans">
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
        <a href="mailto:phatdao@gmail.com" className="hover:underline">
          phatdao@gmail.com
        </a>
      </p>
      <p className="text-gray-600 flex items-center font-open-sans">
        <FontAwesomeIcon
          icon={faPhone}
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
        <a href="tel:0922xxxxxxxx" className="hover:underline">
          0922xxxxxxxx
        </a>
      </p>
    </div>
  );
}

function EcommerceSocial() {
  return (
    <div className="md:mr-4">
      <h2 className="text-xl font-plus-jakarta mb-2">Ecommerce</h2>
      <div className="flex space-x-5">
        <a href="https://shopee.vn" target="_blank" rel="noopener noreferrer">
          <img
            src="/src/assets/image/icons8-shopee-50.png"
            alt="shopee"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
      </div>
      <h2 className="text-xl font-plus-jakarta mb-2 mt-px">Social</h2>
      <div className="flex space-x-5">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTiktok}
            style={{ width: "20px", height: "20px" }}
          />
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col md:flex-row md:space-x-4 md:w-full">
          <div className="flex-1">
            <PolicyList />
          </div>
          <div className="flex-1 md:flex md:justify-center">
            <Contact />
          </div>
          <div className="flex-1 flex justify-end">
            <EcommerceSocial />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
