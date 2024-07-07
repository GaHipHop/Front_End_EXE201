import React from "react";
import Sidebar from "../adminLayout/Sidebar";
import AdminHeader from "../adminLayout/AdminHeader";
import { Button } from "@nextui-org/react";

function CategoryTable({ categories }) {
  return (
    <section className="flex flex-col items-start text-base font-medium tracking-tight text-center text-black max-md:flex-wrap max-md:pr-5">
      <div className="flex justify-between w-full px-2.5 py-2.5 bg-white">
        <div className="flex-1 flex justify-center items-center">
          <span>No</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>Categories ID</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>Category Name</span>
        </div>
      </div>
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex justify-between w-full px-2.5 py-2.5 text-base tracking-tight text-black bg-white max-md:flex-wrap"
        >
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {index + 1}
          </div>
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {category.id}
          </div>
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            <span className="bg-gray-200 p-1 rounded">{category.name}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

function AdminCategory() {
  const categories = [
    { id: "C-001", name: "Souvenir" },
    { id: "C-002", name: "Home decoration" },
    { id: "C-003", name: "Gift box" },
  ];

  return (
    <div className="h-screen bg-white flex">
      <Sidebar />
      <main className="flex flex-col w-full overflow-auto">
        <header className="flex flex-col self-stretch my-auto max-md:mt-4 max-md:max-w-full">
          <AdminHeader title="Categories" />
          <section className="flex flex-col px-6 pt-6 mt-4 bg-white border-t border-solid border-black border-opacity-30 max-md:pr-5 max-md:max-w-full">
            <div className="mx-4 max-md:mr-2.5 max-md:max-w-full">
              <CategoryTable categories={categories} />
            </div>
            <div className="flex justify-center w-full py-2.5 bg-white space-x-4">
              <Button className="text-white bg-pink-300 border-2 border-solid border-white rounded-2xl">
                Back
              </Button>
              <Button className="text-white bg-pink-300 border-2 border-solid border-white rounded-2xl">
                Save
              </Button>
            </div>
          </section>
        </header>
      </main>
    </div>
  );
}

export default AdminCategory;
