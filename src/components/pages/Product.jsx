import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

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

const MainContent = ({ products }) => (
  <main className="flex flex-col items-center justify-center w-full max-w-[1354px] mx-auto mt-20">
    <section className="flex flex-col items-center gap-5 w-full text-5xl tracking-tight text-center text-black whitespace-nowrap max-md:flex-wrap max-md:text-4xl">
      <h1 className="mt-7 max-md:text-4xl">Souvenir</h1>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3ec57f46eb32b6706d3179b8a20f3c9ee2a70e937e7b3a5a7b42fdafdd8f24?apiKey=2d591b1c79224a4881e4a85e4f46aa1b&" alt="" className="shrink-0 self-start w-10 aspect-square" />
    </section>
    <section className="w-full mt-10 grid grid-cols-4 gap-5">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard
            key={index}
            imgSrc="link-to-product-image"
            title={product.productName}
            price={product.productPrice}
            productId={product.id}
          />
        ))
      ) : (
        <div className="col-span-4 text-center">No products available</div>
      )}
    </section>
  </main>
);

const Product = () => {
  const [products, setProducts] = useState([]);

  const handleCategorySelect = (selectedProducts) => {
    setProducts(selectedProducts);
  };

  return (
    <div className="flex flex-col bg-white">
      <Header onCategorySelect={handleCategorySelect} />
      <MainContent products={products} />
      <Footer />
    </div>
  );
};

export default Product;
