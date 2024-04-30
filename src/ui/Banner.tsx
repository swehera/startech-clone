"use client";
import { heroImage, sideHeroImage } from "@/images";
import { FaCartPlus } from "react-icons/fa";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" flex items-center justify-center w-full relative">
      <div className=" mx-auto  mt-6 flex justify-between gap-x-8">
        <div>
          <Image
            width={872}
            src={heroImage}
            alt="hero-image"
            className=" pb-1 pr-1 bg-slate-200 "
          />
        </div>
        <div className=" flex flex-col gap-y-4">
          <div className=" pb-1 pr-1 bg-slate-100">
            <div className=" px-5 py-5 bg-yellowColor flex flex-col items-center">
              <p className=" font-semibold text-[15px] mt-3 mb-2">
                Compare Products
              </p>
              <p className=" text-xs  text-gray-600">
                Choose Two Products to Compare
              </p>
              <input
                type="text"
                placeholder="Search and Select Product"
                className=" flex-1 px-3 py-2 outline-none rounded-sm my-3"
              />
              <input
                type="text"
                placeholder="Search and Select Product"
                className="  flex-1 px-3 py-2 outline-none rounded-sm "
              />
              <button className=" mb-4 text-sm font-semibold px-3 py-2 w-[87%] border-2 border-sideBorderColor mt-3 rounded-sm text-sideBorderColor hover:bg-sideBorderColor hover:text-white duration-700">
                View Comparison
              </button>
            </div>
          </div>
          <div>
            <Image
              width={320}
              src={sideHeroImage}
              alt="side-photo"
              className=" pb-1 pr-1 bg-slate-200"
            />
          </div>
        </div>
      </div>
      {/* cart work start */}

      <div className=" absolute z-40 cursor-pointer ">
        <div className=" fixed right-10 bottom-12">
          <div className=" bg-cartBgColor hover:bg-cartBgHoverColor duration-300 border-[1px]  border-slate-500 px-4 py-2 rounded-sm flex  relative">
            <div>
              <FaCartPlus className=" text-white text-2xl" />
              <p className=" text-[10px] text-white font-semibold mt-1">CART</p>
            </div>

            <div className=" absolute -right-2 -top-2">
              <div className=" text-white text-center text-[11px] bg-orangeColor rounded-full px-2 py-1">
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cart work end */}
    </div>
  );
};

export default Banner;
