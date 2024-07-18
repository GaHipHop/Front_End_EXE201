import { Button } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { postCart } from '../../lib/service/cartService'; // Import dịch vụ giỏ hàng
import { GetKindById } from '../../lib/service/kindService';
import { GetProductById } from '../../lib/service/productService';
import Footer from "../layout/Footer";
import Header from "../layout/Header";

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

const QuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="flex items-center">
      <Button auto light onClick={handleDecrease}>-</Button>
      <input 
        type="text" 
        value={quantity} 
        readOnly 
        className="w-12 text-center mx-2 border border-gray-300 rounded" 
      />
      <Button auto light onClick={handleIncrease}>+</Button>
    </div>
  );
};

function MainContent({ productId, onAddToCart, setKindId }) {
  const [kind, setKind] = useState(null);
  const [product, setProduct] = useState(null);
  const [kinds, setKinds] = useState([]);
  const [quantity, setQuantity] = useState(1);

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
          setKindId(kindsData[0].id); // Lấy kindId đầu tiên
        }
      } catch (error) {
        console.error('Failed to fetch product or kinds:', error);
      }
    };

    fetchProductAndKinds();
  }, [productId, setKindId]);

  const handleKindClick = async (kindId) => {
    try {
      const kindResponse = await GetKindById(kindId);
      setKind(kindResponse.data.data);
      setKindId(kindId); // Cập nhật kindId khi người dùng chọn loại khác
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
                <p className="mt-1">Discount: {product.discount.percent}% - until {new Date(product.discount.expiredDate).toLocaleDateString()}</p>
                <p className="mt-1">Color: {kind.colorName}</p>
                <p className="mt-1">Quantity: {kind.quantity}</p>
                <p className="pt-6 pb-2 mt-10 whitespace-nowrap border-b border-black border-solid max-md:mt-8">
                  Description
                </p>
                <p className="mt-4 text-base leading-6">{product.productDescription}</p>
              </div>
            )}
            {kinds.length > 0 && <KindList kinds={kinds} onKindClick={handleKindClick} />}
            <div className="mt-4 text-center">
              <QuantitySelector initialQuantity={1} onQuantityChange={(newQuantity) => setQuantity(newQuantity)} />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

function ProductDetail() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [kindId, setKindId] = useState(null);

  const handleAddToCart = async (kindId, quantity) => {
    try {
      const response = await postCart({ id: kindId, quantity });
      const newItem = response.data.data;

      // Lấy giỏ hàng từ localStorage
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      
      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng
        cartItems[existingItemIndex].quantity += newItem.quantity;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
        cartItems.push(newItem);
      }

      // Lưu giỏ hàng cập nhật vào localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      console.log("Product added to cart:", newItem);
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="flex flex-col items-center w-full mt-[5rem]">
        <MainContent productId={productId} onAddToCart={handleAddToCart} setKindId={setKindId} />
        <Button
          className="mt-4 px-6 py-2 mb-5 text-medium rounded-xl shadow-sm"
          style={{
            backgroundColor: "#525252", // Change this color to make the button more visible
            color: "white", // Text color
          }}
          onClick={() => handleAddToCart(kindId, quantity)}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetail;
