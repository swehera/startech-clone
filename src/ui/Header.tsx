"use client";
import { logo } from "@/images";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <header className=" w-full h-20 bg-headerColor flex items-center gap-x-8 px-6">
      {/* logo work start */}
      <div>
        <Image src={logo} alt="logo" width={110} />
      </div>
      {/* logo work end  */}

      {/* search work start */}
      <div className="flex-1 h-10  relative ">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full px-5 rounded-md outline-none"
        />
        <span className="absolute right-0 w-10 h-full b  text-2xl inline-flex items-center justify-center  cursor-pointer">
          <MdSearch />
        </span>
      </div>
      {/* search work end  */}

      {/* offer section start */}
      <div className=" flex items-center gap-x-2">
        <FaGift className=" text-orangeColor text-2xl" />
        <div>
          <p className=" text-white text-sm">Offers</p>
          <p className=" text-xs text-grayTextColor">Latest Offers</p>
        </div>
      </div>
      {/* offer section end  */}

      {/* happy hour work start */}
      <div className=" flex items-center gap-x-2">
        <AiFillThunderbolt className=" text-orangeColor animate-pulse delay-150 duration-300 text-2xl" />
        <div>
          <p className=" text-white text-sm">Happy Hour</p>
          <p className=" text-xs text-grayTextColor">Special Deals</p>
        </div>
      </div>
      {/* happy hour work end  */}

      {/* Account section work start */}
      <div className=" flex items-center gap-x-2">
        <MdAccountCircle className=" text-orangeColor  text-2xl" />
        <div>
          <p className=" text-white text-sm">Account</p>
          <p className=" text-xs text-grayTextColor">Register or Login</p>
        </div>
      </div>
      {/* Account section work end */}

      {/* button work start */}
      <button className=" px-5 py-3 rounded-sm text-white bg-[#296AC7] font-semibold text-sm">
        PC Builder
      </button>
      {/* button work end  */}
    </header>
  );
};

export default Header;
