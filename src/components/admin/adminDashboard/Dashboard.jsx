import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import AdminHeader from "../adminLayout/AdminHeader";
import Sidebar from "../adminLayout/Sidebar";

const StatisticCard = ({ color, imageSrc, title, value }) => (
  <div className={`flex flex-col w-full max-md:w-full ${color}`}>
    <div className="flex flex-col justify-center items-center px-4 py-6 w-full text-xl font-semibold tracking-tight text-center bg-white rounded-xl shadow-lg">
      <img
        loading="lazy"
        src={imageSrc}
        className="aspect-square w-[50px] mx-auto"
        alt={title}
      />
      <div className="mt-3">{title}</div>
      <div className="mt-4 text-2xl">{value}</div>
    </div>
  </div>
);

function Dashboard() {
  return (
    <div className="h-screen bg-white-100 flex">
      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      <main className="flex flex-col w-full overflow-auto">
        <header className="flex flex-col self-stretch my-auto max-md:mt-4 max-md:max-w-full">
          <AdminHeader title="DASHBOARD" />
          <section className="flex flex-col px-6 pt-6 mt-4 bg-white border-t border-solid border-gray-300 max-md:pr-5 max-md:max-w-full">
            <div className="mx-4 max-md:mr-2.5 max-md:max-w-full">
              <section className="grid grid-cols-4 gap-4 max-md:grid-cols-1">
                <StatisticCard
                  color="text-sky-600 bg-cyan-100"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/afbd1a83fa817145ad1d33dfd6e48c6221f43ca578c3fe3157e63472c74d1977?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
                  title="Revenue"
                  value="70.050.000đ"
                />
                <StatisticCard
                  color="text-red-600 bg-rose-100"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0e5993ab021a0ea5d1cb419afc07bfb9a22b59c5bc9e40501e315ef065482e79?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
                  title="Transaction"
                  value="75"
                />
                <StatisticCard
                  color="text-teal-600 bg-green-100"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5c06ca009a70d6dcbcbab11a5690b9d8a5e823aff36964cae34c53f4d19926c2?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
                  title="Categories"
                  value="4"
                />
                <StatisticCard
                  color="bg-zinc-300 text-stone-600"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e4db3a152c0f87152095412756cde64a9183a36e35a434939451ce25422b9c47?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
                  title="Products"
                  value="12"
                />
              </section>
            </div>
            <section className="px-5 pt-5 pb-9 mt-5 bg-white rounded-3xl shadow-lg max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <section className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow font-semibold tracking-tight text-black max-md:mt-10 max-md:max-w-full">
                    <h2 className="text-2xl max-md:max-w-full">Revenue</h2>
                    <p className="mt-6 text-base max-md:max-w-full">Overview</p>
                    <div className="flex gap-1 mt-10 max-md:flex-wrap max-md:mt-8 max-md:max-w-full">
                      <div className="flex flex-col items-end self-start text-base whitespace-nowrap">
                        <p className="self-stretch">Millions</p>
                        <p className="mt-7">10</p>
                        <p className="mt-10 max-md:mt-8">8</p>
                        <p className="mt-10 max-md:mt-8">6</p>
                        <p className="mt-10 max-md:mt-8">4</p>
                        <p className="mt-10 max-md:mt-8">2</p>
                      </div>
                      <div className="flex flex-auto gap-0 items-start max-md:flex-wrap max-md:max-w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/530fbccbadb30d4e6a813b52e3774fb992814514adc1c68ed0abc98d2fd356a3?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
                          className="shrink-0 w-3.5 border-2 border-black border-solid aspect-[0.04] stroke-[2px] stroke-black max-md:hidden"
                          alt=""
                        />
                        <div className="flex flex-col grow shrink-0 mt-6 basis-0 w-fit max-md:max-w-full">
                          <div className="flex flex-col items-start self-end py-3 pr-4 pl-10 mr-20 max-w-full bg-white rounded-xl shadow-lg w-[140px] max-md:pl-5 max-md:mr-2.5">
                            <p className="text-sm">December 25</p>
                            <p className="mt-4 text-xs">10.254.000đ</p>
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28eccfefcbd198779a0fa563897f7959eafbd9ab2e22baf4a6d945cf78f97e19?apiKey=402c56a5a1d94d11bd24e7050966bb9d&"
                            className="mt-2.5 ml-4 max-w-full border-solid aspect-[2.78] border-[3px] border-pink-200 border-opacity-90 stroke-[3px] stroke-pink-200 stroke-opacity-90 w-[526px]"
                            alt="Revenue Graph"
                          />
                          <div className="shrink-0 mt-10 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10 max-md:mt-8 max-md:max-w-full"></div>
                          <p className="self-end mt-12 text-base max-md:mt-8">
                            Days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col font-semibold tracking-tight text-black max-md:mt-10">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button
                          className="self-end px-4 py-3.5 text-medium rounded-xl shadow-lg"
                          style={{
                            backgroundColor: "#e879f9", // Change this color to make the button more visible
                            color: "white", // Text color
                          }}
                        >
                          Dec 2023
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu>
                        <DropdownItem key="jan2023">Jan 2023</DropdownItem>
                        <DropdownItem key="feb2023">Feb 2023</DropdownItem>
                        <DropdownItem key="mar2023">Mar 2023</DropdownItem>
                        <DropdownItem key="apr2023">Apr 2023</DropdownItem>
                        <DropdownItem key="may2023">May 2023</DropdownItem>
                        <DropdownItem key="jun2023">Jun 2023</DropdownItem>
                        <DropdownItem key="jul2023">Jul 2023</DropdownItem>
                        <DropdownItem key="aug2023">Aug 2023</DropdownItem>
                        <DropdownItem key="sep2023">Sep 2023</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <div className="flex flex-col items-start px-5 pt-10 pb-5 mt-5 bg-white rounded-xl shadow-lg">
                      <div className="flex items-start w-full justify-between">
                        <div className="flex flex-col">
                          <h2 className="text-lg">Sales</h2>
                          <p className="mt-3 text-xs text-gray-500">
                            Orders and shipping
                          </p>
                        </div>
                        <p className="text-2xl">24</p>
                      </div>
                      <div className="flex items-start w-full justify-between mt-6">
                        <div className="flex flex-col">
                          <h2 className="text-lg">Revenue</h2>
                          <p className="mt-3 text-xs text-gray-500">
                            Average Revenue
                          </p>
                        </div>
                        <p className="text-2xl">70.050.000đ</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </section>
        </header>
      </main>
    </div>
  );
}

export default Dashboard;
