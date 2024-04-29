import { heroImage, sideHeroImage } from "@/images";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" flex items-center justify-center w-full ">
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
              <button className=" mb-4 text-sm font-semibold px-3 py-1 w-[87%] border-2 border-purpoleColor mt-3 rounded-sm text-purpoleColor">
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
    </div>
  );
};

export default Banner;
