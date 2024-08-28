import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Logo from "../assets/Images/logo.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Movies",
    },
    {
      id: 3,
      name: "TV",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "News",
    },
    {
      id: 6,
      name: "My Stuff",
    },
    {
      id: 7,
      name: "Hubs",
    },
  ];
  return (
    <div className="absolute z-[1] flex w-full items-center justify-between bg-gradient-to-b from-[#1e2126] to-transparent p-4 px-10">
      <img src={Logo} alt="Logo" className="w-[85px] cursor-pointer" />
      <ul className="hidden gap-8 md:flex">
        {menu.map((item, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer rounded-md px-3 py-1 pb-2 text-[18px] font-medium text-gray-400 transition-all duration-500 ease-in-out hover:text-white"
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <div className="md:hidden">
        <h2
          onClick={() => setToggle(!toggle)}
          className="flex cursor-pointer items-center gap-1 rounded-md bg-gray-700 px-3 py-1 pb-2 font-medium text-white"
        >
          Home
          {!toggle ? (
            <IoIosArrowDown className="mt-1 text-white" />
          ) : (
            <IoIosArrowUp className="mt-1 text-white" />
          )}
        </h2>
        {toggle ? (
          <ul className="absolute left-0 right-0 ml-auto mr-auto mt-3 w-[200px] rounded-md bg-gray-700 px-3 text-center">
            {menu.map(
              (item, index) =>
                index > 0 && (
                  <li
                    key={index}
                    className="mb-3 mt-2 cursor-pointer rounded-md px-3 py-1 pb-2 text-[18px] font-medium text-gray-400 transition-all duration-500 ease-in-out hover:bg-gray-600 hover:text-white"
                  >
                    {item.name}
                  </li>
                ),
            )}
          </ul>
        ) : null}
      </div>
      <div className="flex gap-10">
        <FaSearch className="cursor-pointer rounded-md px-[2px] py-[2px] pb-[2px] text-[35px] text-gray-300 transition-all duration-500 ease-in-out hover:text-white" />
        <h2 className="cursor-pointer rounded-full border-[2px] border-white px-[10px] text-[20px] text-gray-300">
          C
        </h2>
      </div>
    </div>
  );
};

export default Header;
