"use client";
import Link from "next/link";
// import { useState } from "react";

const HeaderBottom = () => {
  //   const [showDiv, setShowDiv] = useState(false);
  //   const showDivFunction = () => {};

  const navigation = [
    { title: "Desktop", href: "/desktop" },
    { title: "Laptop", href: "/laptop" },
    { title: "Component", href: "/component" },
    { title: "Monitor", href: "/monitor" },
    { title: "UPS", href: "/ups" },
    { title: "Phone", href: "/phone" },
    { title: "Tablet", href: "/tablet" },
    { title: "Office Equipment", href: "/office-equipment" },
    { title: "Camera", href: "/camera" },
    { title: "Security", href: "/security" },
    { title: "Networking", href: "/networking" },
    { title: "Software", href: "/software" },
    { title: "Server & Storage", href: "/server-storage" },
    { title: "Accessoris", href: "/accessoris" },
    { title: "Gadget", href: "/gadget" },
    { title: "Gaming", href: "/gaming" },
    { title: "TV", href: "/tv" },
    { title: "Appliance", href: "/appliance" },
  ];
  return (
    <div className=" h-12 flex items-center justify-center px-5 border border-b shadow-md ">
      {navigation.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className="  mx-[6px] text-[13px] font-semibold hover:text-orangeColor duration-300"
        >
          {title}
        </Link>
      ))}
      {/* {showDiv && (
          <div className=" absolute bg-slate-400 px-2 py-1 rounded-md">
            This is the div that appears when you hover over the text
          </div>
        )} */}

      {/* {navigation.map(({ title, href }) => (
          <Link
            key={title}
            href={href}
            className=" flex items-center text-sm font-medium border border-transparent hover:border-white px-2 cursor-pointer duration-200"
          >
            {title}
          </Link>
        ))} */}
    </div>
  );
};

export default HeaderBottom;
