import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { getAllCategory } from "../../../lib/service/categoryService"; // Điều chỉnh đường dẫn này nếu cần
import { getAllDiscount } from "../../../lib/service/discountService";
import AdminHeader from "../adminLayout/AdminHeader";
import Sidebar from "../adminLayout/Sidebar";

// Định nghĩa kiểu dữ liệu cho danh mục và discount
interface Category {
  id: number;
  categoryName: string;
}

interface Discount {
  id: number;
  percent: number;
  expiredDate: string;
  status: boolean;
}

function AddProductForm() {
  // Sử dụng kiểu dữ liệu cho state
  const [categories, setCategories] = useState<Category[]>([]);
  const [discounts, setDiscounts] = useState<Discount[]>([]); // Thêm state cho discount

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategory(); // Thay đổi đường dẫn API nếu cần
        const categories = response.data?.data.result ?? [];
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };

    const fetchDiscounts = async () => {
      try {
        const response = await getAllDiscount(); // Gọi API lấy danh sách discount
        const discounts = response.data.data ?? [];
        setDiscounts(discounts);
      } catch (error) {
        console.error("Error fetching discounts:", error);
        setDiscounts([]);
      }
    };

    fetchCategories();
    fetchDiscounts();
  }, []);

  return (
    <section className="flex flex-col items-start text-base font-medium tracking-tight text-center text-black max-md:flex-wrap max-md:pr-5">
      <div className="flex flex-col justify-between w-full px-2.5 py-2.5 bg-white">
        <h2 className="text-left text-pink-500 mb-4">Add</h2>
        <div className="flex justify-between w-full px-2.5 py-2.5 bg-white">
          <div className="flex-1 flex flex-col items-start px-2.5">
            <label htmlFor="name" className="mb-2">Name</label>
            <input id="name" type="text" className="w-full p-2 border rounded" placeholder="Name" />
          </div>
        </div>
        <div className="flex justify-between w-full px-2.5 py-2.5 bg-white">
          <div className="flex-1 flex flex-col items-start px-2.5">
            <label htmlFor="category" className="mb-2">Category</label>
            <select id="category" className="w-full p-2 border rounded">
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.categoryName}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 flex flex-col items-start px-2.5">
            <label htmlFor="discount" className="mb-2">Discount</label>
            <select id="discount" className="w-full p-2 border rounded">
              {discounts.map(discount => (
                <option key={discount.id} value={discount.id}>{`Discount ${discount.percent}% - Expires on ${discount.expiredDate}`}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between w-full px-2.5 py-2.5 bg-white">
          <div className="flex-1 flex flex-col items-start px-2.5">
            <label htmlFor="price" className="mb-2">Price</label>
            <input id="price" type="text" className="w-full p-2 border rounded" placeholder="1,2,3,..." />
          </div>
          <div className="flex-1 flex flex-col items-start px-2.5">
            <label htmlFor="quantity" className="mb-2">Quantity</label>
            <input id="quantity" type="text" className="w-full p-2 border rounded" placeholder="1,2,3,..." />
          </div>
        </div>
        <div className="flex justify-between w-full px-2.5 py-2.5 bg-white">
          <div className="flex-1 flex flex-col items-start px-2.5">
            <label htmlFor="description" className="mb-2">Description</label>
            <textarea id="description" className="w-full p-2 border rounded" placeholder="1,2,3,..."></textarea>
          </div>
        </div>
        <div className="flex justify-center w-full py-2.5 bg-white">
          <Button className="text-white bg-red-600 border-2 border-solid border-white rounded-2xl">Back</Button>
          <Button className="text-white bg-pink-400 border-2 border-solid border-white rounded-2xl">Add</Button>
        </div>
      </div>
    </section>
  );
}

function AdminProduct() {
  return (
    <div className="h-screen bg-white flex">
      <Sidebar />
      <main className="flex flex-col w-full overflow-auto">
        <header className="flex flex-col self-stretch my-auto max-md:mt-4 max-md:max-w-full">
          <AdminHeader title="Add Product" extraContent={null} />
          <section className="flex flex-col px-6 pt-6 mt-4 bg-white border-t border-solid border-black border-opacity-30 max-md:pr-5 max-md:max-w-full">
            <div className="mx-4 max-md:mr-2.5 max-md:max-w-full">
              <AddProductForm />
            </div>
          </section>
        </header>
      </main>
    </div>
  );
}

export default AdminProduct;
