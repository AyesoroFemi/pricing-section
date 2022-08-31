import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-3xl font-bold pb-4 pt-10">Pricing</h1>
        <div className="flex justify-center">
          <p className="w-2/5 font-normal text-slate-600 ">
            Sign up in less than 30 seconds. Try out our 7 day risk free trial,
            upgrade at anytime, no questions, no hassle.
          </p>
        </div>
        <div className="flex ml-10 justify-center my-6">
          <button className="bg-emerald-400 px-12 py-3 text-white font-bold rounded-l-sm text-white uppercase">
            Monthly
          </button>
          <button className="bg-gray-200 px-12 py-3 font-bold rounded-r-sm text-slate-600 uppercase">
            Annually
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
