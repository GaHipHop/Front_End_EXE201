import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { GetKindById } from '../../lib/service/kindService';
import { GetProductById } from '../../lib/service/productService';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

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

function KindList({ kinds, onKindClick }) {
  return (
    <div className="flex flex-wrap gap-4">
      {kinds.map((kind, index) => (
        <div key={index} className="w-[calc(20%-10px)] flex flex-col items-center" onClick={() => onKindClick(kind.id)}>
          <img src={kind.image} alt={kind.colorName} className="w-[50%] h-auto" />
          <p>{kind.colorName}</p>
        </div>
      ))}
    </div>
  );
}

function MainContent({ productId }) {
  const [kind, setKind] = useState(null);
  const [product, setProduct] = useState(null);
  const [kinds, setKinds] = useState([]);

  useEffect(() => {
    const fetchProductAndKinds = async () => {
      try {
        const productResponse = await GetProductById(productId);
        const productData = productResponse.data.data;
        setProduct(productData);

        const kindsData = productData.kinds;
        setKinds(kindsData);

        if (kindsData.length > 0) {
          const kindResponse = await GetKindById(kindsData[0].id);
          setKind(kindResponse.data.data);
        }
      } catch (error) {
        console.error('Failed to fetch product or kinds:', error);
      }
    };

    fetchProductAndKinds();
  }, [productId]);

  const handleKindClick = async (kindId) => {
    try {
      const kindResponse = await GetKindById(kindId);
      setKind(kindResponse.data.data);
    } catch (error) {
      console.error('Failed to fetch kind:', error);
    }
  };

  return (
    <main className="px-10 py-4 w-full bg-white border-t border-black border-solid max-md:px-5 max-md:max-w-full">
      {kind && (
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
                className="flex flex-col justify-center mt-10 bg-white rounded-[20px] max-md:mt-8 mx-auto"
                style={{ width: "200px", height: "200px" }} // chỉnh thông số kích thước hình
              >
                <img
                  loading="lazy"
                  src={kind.image}
                  alt={kind.colorName}
                  className="w-full aspect-[0.8]"
                  style={{ width: "100%", height: "auto" }} // Adjusted width and height
                />
              </div>
              <p className="mt-4 text-center text-base font-medium">{kind.colorName}</p>
              <p className="mt-1 text-center text-base">Quantity: {kind.quantity}</p>
            </div>
          </div>
          <section className="flex flex-col ml-3 w-[70%] max-md:ml-0 max-md:w-full">
            {product && (
              <div className="flex flex-col mt-16 text-xl tracking-tight text-black max-md:mt-8">
                <h3 className="leading-8 font-semibold">{product.productName}</h3>
                <p className="mt-2">Category: {product.category.categoryName}</p>
                <p className="mt-5">
                  Price: {product.currentPrice !== product.productPrice ? (
                    <>
                      <span className="line-through">{product.productPrice}đ</span> <span className="font-bold">{product.currentPrice}đ</span>
                    </>
                  ) : (
                    <span className="font-bold">{product.productPrice}đ</span>
                  )}
                </p>
                <p className="mt-1">Discount: {product.discount.percent}%</p>
                <p className="mt-1">Discount Expiry: {new Date(product.discount.expiredDate).toLocaleDateString()}</p>
                <p className="mt-1">Stock Quantity: {product.stockQuantity}</p>
                <p className="pt-6 pb-2 mt-10 whitespace-nowrap border-b border-black border-solid max-md:mt-8">
                  Description
                </p>
                <p className="mt-4 text-base leading-6">{product.productDescription}</p>
              </div>
            )}
            {kinds.length > 0 && <KindList kinds={kinds} onKindClick={handleKindClick} />}
          </section>
        </div>
      )}
    </main>
  );
}

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="flex flex-col items-center w-full mt-[5rem]">
        <MainContent productId={productId} />
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
