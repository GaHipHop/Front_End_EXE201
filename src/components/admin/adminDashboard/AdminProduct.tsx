import React from "react";
import Sidebar from "../adminLayout/Sidebar";
import AdminHeader from "../adminLayout/AdminHeader";
import { Button } from "@nextui-org/react";

function AddProductForm() {
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
              <option value="category1">Categories</option>
              <option value="category2">Category 1</option>
              <option value="category3">Category 2</option>
            </select>
          </div>
          <div className="flex-1 flex flex-col items-start px-2.5">
            <label htmlFor="image" className="mb-2">Image</label>
            <div className="w-full flex">
              <input type="file" id="image" className="w-full p-2 border rounded" />
              <img src="https://firebasestorage.googleapis.com/v0/b/artworks-sharing-platform.appspot.com/o/images%2F1.image.png?alt=media&token=3c77475f-90df-4f19-879e-c8024ae789bb" alt="Sample" className="w-16 h-16 ml-4" />
            </div>
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
