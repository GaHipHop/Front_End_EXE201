import React, { useRef } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';

const ProductCard = ({ imgSrc, title, price, productId }) => (
  <div className="flex flex-col pb-4 w-full font-medium tracking-tight text-center text-black bg-white border border-black border-solid rounded-[20px] max-md:mt-8 mx-2">
    <Link to={`/productDetail`} className="hover:underline">
      <img loading="lazy" src={imgSrc} alt={title} className="w-full h-auto object-contain p-2" />
      <div className="flex flex-col px-4 mt-6">
        <span className="text-xl">{title}</span>
        <span className="mt-6 text-xl border border-black border-solid">{price}</span>
      </div>
    </Link>
  </div>
);

const MainContent = () => {
  const firstRowProducts = products.slice(0, 4);
  const secondRowProducts = products.slice(4, 8);

  return (
    <main className="flex flex-col items-center justify-center w-full max-w-[1354px] mx-auto mt-20">
      <section className="flex flex-col items-center gap-5 w-full text-5xl tracking-tight text-center text-black whitespace-nowrap max-md:flex-wrap max-md:text-4xl">
        <h1 className="mt-7 max-md:text-4xl">Souvenir</h1>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3ec57f46eb32b6706d3179b8a20f3c9ee2a70e937e7b3a5a7b42fdafdd8f24?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&" alt="" className="shrink-0 self-start w-10 aspect-square" />
      </section>
      <section className="w-full mt-10 grid grid-cols-4 gap-5">
        {firstRowProducts.map((product, index) => (
          <ProductCard key={index} imgSrc={product.imgSrc} title={product.title} price={product.price} />
        ))}
      </section>
      <section className="w-full mt-10 grid grid-cols-4 gap-5">
        {secondRowProducts.map((product, index) => (
          <ProductCard key={index} imgSrc={product.imgSrc} title={product.title} price={product.price} />
        ))}
      </section>
      <section className="w-full mt-10 grid grid-cols-4 gap-5">
        {firstRowProducts.map((product, index) => (
          <ProductCard key={index} imgSrc={product.imgSrc} title={product.title} price={product.price} />
        ))}
      </section>
    </main>
  );
};

const products = [
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/21d7edbba6661b5412e4786c57324e3dc31dc1477f980a385abdb24b0b0688ad?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&", title: "Handmade self-dried clay ...", price: "80.000" },
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bba96cf1cb613f0e2fccb43504c3ff7b9f00ba338a1b60dd4f14b25b081555dd?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&", title: "Velvet Zinc Flower", price: "80.000" },
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c5263ec5782057068a0ccd1418c4c1e46f3e1992917fbc7856075a9d7e56d4c?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&", title: "Handmade Zinc Velvet flowers", price: "80.000" },
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c5263ec5782057068a0ccd1418c4c1e46f3e1992917fbc7856075a9d7e56d4c?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&", title: "Handmade Zinc Velvet flowers", price: "80.000" }
];

const Pagination = () => (
  <div className="flex gap-3 px-5 mt-3 text-2xl tracking-tight text-center text-black whitespace-nowrap mx-auto">
    <span className="underline">1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>...</span>
  </div>
);

function Product() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <MainContent />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Product;
