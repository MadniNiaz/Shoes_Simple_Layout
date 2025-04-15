import React from "react";
import NikeLogo from '../Images/NikeLogo.png'

function Navigation() {
  return (
    <div>
      <nav className="flex justify-between items-center ">
        {" "}
        {/*Navbar */}
        <div className="w-[16%] h-20 flex justify-center items-center">
          {" "}
          {/*Navbar logo */}
          <img className=" h-24 p-6" src={NikeLogo} alt="logo" />
        </div>
        <ul className="flex gap-14 justify-center items-center text-xl font-semibold  ">
          {" "}
          {/* list */}
          <li className="active:animate-ping">
            <a href="#">Menu</a>
          </li>
          <li className="active:animate-ping">
            <a href="#">Location</a>
          </li>
          <li className="active:animate-ping">
            <a href="#">About</a>
          </li>
          <li className="active:animate-ping">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="  w-[16%] flex justify-center">
          {/*Navbar button */}
          <button className="border border-[#D01C28] bg-[#D01C28] text-white w-20 p-4 h-9 flex justify-center items-center rounded-md active:animate-ping">
            <a href="#">Login</a>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
