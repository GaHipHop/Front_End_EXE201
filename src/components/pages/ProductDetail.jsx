import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

function PolicySection() {
  return (
    <section className="flex flex-col gap-4 text-base tracking-tight text-black">
      <p className="text-2xl font-medium">Policy</p>
      <p>About products</p>
      <p>Private Policy</p>
      <p>Delivery policy</p>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="flex flex-col text-2xl font-medium tracking-tight text-black whitespace-nowrap">
      <p className="text-center">Contact</p>
      <p className="z-10 mt-0 text-center">Contact</p>
      <div className="flex gap-2.5 mt-2 text-base">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb0a2d47c1e9d57bc77903c2cd0291a14234d323f75a2d5e9bd2839bee05f06?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&"
          alt=""
          className="shrink-0 aspect-[0.97] w-[33px]"
        />
        <div className="flex flex-col my-auto">
          <p>phatdao@gmail.com</p>
          <p className="z-10 -mt-3">phatdao@gmail.com</p>
        </div>
      </div>
      <div className="flex gap-3 mt-1 text-base">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd09e5c8398ef144202e0051bed64ea0d338eca63947859f35094b7c1fae125?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&"
          alt=""
          className="shrink-0 aspect-[0.97] w-[33px]"
        />
        <p className="flex-auto my-auto">0922xxxxxxxx</p>
      </div>
    </section>
  );
}

function EcommerceSection() {
  return (
    <section className="flex flex-col mt-1.5">
      <p className="text-2xl font-medium tracking-tight text-center text-black">
        Ecommerce
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0881c1c1385bbcfe1b605704848c84ce989e9079ced1066ba7ed8a7d8dcf23a?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&"
        alt=""
        className="mt-2 w-9 aspect-[1.06]"
      />
      <p className="mt-6 text-2xl font-medium tracking-tight text-center text-black">
        Social
      </p>
      <p className="z-10 mt-0 text-2xl font-medium tracking-tight text-center text-black">
        Social
      </p>
      <div className="flex gap-3 mt-3.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fae79f1daca40f01d4dc22e9f25048611434028bfeccc40477acc77dd57e5059?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&"
          alt=""
          className="shrink-0 w-9 aspect-[1.06]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/157c2e91e65cd9cc09d27d0419cf0def2b33283291ee35e8a3f52e865e8bed1d?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&"
          alt=""
          className="shrink-0 aspect-[1.09] w-[37px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c34d741ce2cca8203f3f5b91b34fb4ffbcfc527f812b205157606d0efa765dc6?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&"
          alt=""
          className="shrink-0 aspect-[1.12] w-[38px]"
        />
      </div>
    </section>
  );
}

function MainContent() {
  return (
    <main className="px-10 py-4 w-full bg-white border-t border-black border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[40%] max-md:w-full mx-auto">
          <div className="flex flex-col grow max-md:mt-8">
            <Link to="/product" className="hover:underline mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4da31893cf6b60f515d90fcf502cdffa8eceb14b82bd89a7d1b0ec445f066ff2?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&"
                alt="icon"
                className="aspect-[1.35] w-[30px]"
              />
            </Link>
            <div
              className="flex flex-col justify-center mt-10 bg-white border border-black border-solid rounded-[20px] max-md:mt-8 mx-auto"
              style={{ width: "250px" }} // chỉnh thông số kích thước hình
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17a0a0baf75932fe539061729da14d51570dfa47ae02214ea4ccd1bc89a6460c?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&"
                alt="Decorative item"
                className="w-full aspect-[0.8]"
                style={{ width: "100%", height: "auto" }} // Adjusted width and height
              />
            </div>
          </div>
        </div>
        <section className="flex flex-col ml-3 w-[70%] max-md:ml-0 max-md:w-full">
          <article className="flex flex-col mt-16 text-xl tracking-tight text-black max-md:mt-8">
            <h3 className="leading-8 font-semibold">
              Handmade self-dried clay flowers as graduation gifts, very meaningful November 20th gifts - Cheap handmade clay flowers
            </h3>
            <p className="mt-5">Price: 50,000 - 80,000đ</p>
            <p className="pt-6 pb-2 mt-10 whitespace-nowrap border-b border-black border-solid max-md:mt-8">
              Description
            </p>
            <p className="mt-4 text-base leading-6">
              Handmade self-dried clay flowers are a great choice as graduation gifts or November 20th gifts, bringing special meaning and value to the recipient. These flowers are created entirely by hand, from self-dried clay, by Ga Hiphop shop.
              <br />
              <br />
              Self-dried clay flowers are not only beautiful and graceful, but also show the care and dedication of the maker. Each flower is created by hand, with each petal and small detail carefully sculpted and shaped. This creates a unique product with high aesthetic value.
              <br />
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}

function ProductDetail() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="flex flex-col items-center w-full mt-[5rem]">
        {/* Adjusted margin-top */}
        <MainContent />
        <Button
          className="mt-4 px-6 py-2 mb-5 text-medium rounded-xl shadow-sm"
          style={{
            backgroundColor: "#525252", // Change this color to make the button more visible
            color: "white", // Text color
          }}
        >
          Add To Cart
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
