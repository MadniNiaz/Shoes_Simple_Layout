import React from "react";
import Shoes from "../Images/Shoes.png";
import facebook from "../Images/facebook.png";
import Amazon from "../Images/Amazon.jpeg";

function Hero() {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className=" h-full  w-[40%] flex flex-col justify-center p-2">
        {/*content section */}
        <h1 className="text-8xl font-extrabold">YOUR FEET DESERVE THE BEST</h1>
        <p className="  mt-10">
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES
        </p>
        <div className=" w-[100%] mt-7 text-2xl flex gap-10 ">
          {/*for button */}
          <button className="border bg-red-700 text-white cursor-pointer rounded-md p-0.5 w-[26%] active:animate-ping">
            shop Now
          </button>
          <button className="border rounded-md p-0.5 w-[26%] cursor-pointer active:animate-ping active:bg-red-700">Category</button>
        </div>
        <div className="mt-6 ">
          {/*lower section */}
          <p className="text-gray-500 ">Also available on</p>

          <div className=" mt-3 flex gap-7 items-center  ">
            <a className=" w-[10%]" href="https://www.facebook.com" target="_blank">
            <img className="w-[80%] cursor-pointer" src={facebook} />
            </a>
           
           <a className=" w-[10%]"  href="https://www.amazon.com" target="_blank">
            <img className="w-[80%] cursor-pointer" src={Amazon} />
            </a>
          </div>
        </div>
      </div>
      <div className=" h-full w-[40%] flex justify-center items-center  ">
        {/*Picture section */}
        <img src={Shoes} className=" w-auto h-auto max-h-[500px]"   />
      </div>
    </div>
  );
}

export default Hero;
