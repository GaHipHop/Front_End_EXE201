import React from "react";
import Sidebar from "../adminLayout/Sidebar";
import AdminHeader from "../adminLayout/AdminHeader";
import { Button, Link } from "@nextui-org/react";

function TransactionTable({ transactions }) {
  return (
    <section className="flex flex-col items-start text-base font-medium tracking-tight text-center text-black max-md:flex-wrap max-md:pr-5">
      <div className="flex justify-between w-full px-2.5 py-2.5 bg-white">
        <div className="flex-1 flex justify-center items-center">
          <span>Transaction ID</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c1464cb22b146ac3bc2043e1b4ed429fb597dbb98baa6cb1fcd8be106992207?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
            alt=""
            className="shrink-0 my-auto w-4 aspect-square"
          />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>Address</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>Date</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>VND</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>Customers</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9cedf493e57c7b085f3341928e0c919d74ff21e556d9350d03d5d8207c232a3?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
            alt=""
            className="shrink-0 my-auto w-4 aspect-square"
          />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>Details</span>
        </div>
      </div>
      <TransactionTableBody transactions={transactions} />
      <Pagination />
    </section>
  );
}

function TransactionTableBody({ transactions }) {
  return (
    <>
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="flex justify-between w-full px-2.5 py-2.5 text-base tracking-tight text-black bg-white max-md:flex-wrap"
        >
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {transaction.id}
          </div>
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {transaction.location}
          </div>
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {transaction.date}
          </div>
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {transaction.amount}
          </div>
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {transaction.name}
          </div>
          <div className="flex-1 flex justify-center items-center font-plus-jakarta">
            <Link href={`#`} passHref>
              <Button
                as="a"
                className="px-3 text-center whitespace-nowrap rounded-2xl text-white bg-pink-300 border-2 border-solid border-white"
                auto
                flat
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

function Pagination() {
  return (
    <div className="flex gap-5 self-center px-5 mt-2 text-base tracking-tight text-center text-black whitespace-nowrap max-md:mt-5">
      <a href="#" className="underline">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
    </div>
  );
}

function Transaction() {
  const transactions = [
    {
      id: "HI-0001",
      location: "Thủ Đức",
      date: "25-03-2024",
      amount: "80,000",
      name: "Đào Tiến Phát",
    },
    {
      id: "HI-0002",
      location: "Thủ Đức",
      date: "25-03-2024",
      amount: "80,000",
      name: "Đào Tiến Phát",
    },
    {
      id: "HI-0003",
      location: "Thủ Đức",
      date: "25-03-2024",
      amount: "80,000",
      name: "Đào Tiến Phát",
    },
    {
      id: "HI-0004",
      location: "Thủ Đức",
      date: "25-03-2024",
      amount: "80,000",
      name: "Đào Tiến Phát",
    },
    {
      id: "HI-0005",
      location: "Thủ Đức",
      date: "25-03-2024",
      amount: "80,000",
      name: "Đào Tiến Phát",
    },
    {
      id: "HI-0006",
      location: "Thủ Đức",
      date: "25-03-2024",
      amount: "80,000",
      name: "Đào Tiến Phát",
    },
    {
      id: "HI-0007",
      location: "Thủ Đức",
      date: "25-03-2024",
      amount: "80,000",
      name: "Đào Tiến Phát",
    },
    {
      id: "HI-0008",
      location: "Thủ Đức",
      date: "25-03-2024",
      amount: "80,000",
      name: "Đào Tiến Phát",
    },
    {
      id: "HI-0009",
      location: "Thủ Đức",
      date: "25-03-2024",
      amount: "80,000",
      name: "Đào Tiến Phát",
    },
    {
      id: "HI-0010",
      location: "Thủ Đức",
      date: "25-03-2024",
      amount: "80,000",
      name: "Đào Tiến Phát",
    },
  ];

  return (
    <div className="h-screen bg-white flex">
      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}
      <main className="flex flex-col w-full overflow-auto">
        <header className="flex flex-col self-stretch my-auto max-md:mt-4 max-md:max-w-full">
          <AdminHeader title="TRANSACTION" />
          <section className="flex flex-col px-6 pt-6 mt-4 bg-white border-t border-solid border-black border-opacity-30 max-md:pr-5 max-md:max-w-full">
            <div className="mx-4 max-md:mr-2.5 max-md:max-w-full">
              <TransactionTable transactions={transactions} />
            </div>
            <section className="px-5 pt-5 pb-9 mt-5 bg-white rounded-3xl shadow-sm max-md:max-w-full">
              <div className="flex gap-5 justify-between max-md:flex-col max-md:gap-0">
              </div>
            </section>
          </section>
        </header>
      </main>
    </div>
  );
}

export default Transaction;
