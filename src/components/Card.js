import React from "react";

const Card = ({ type, amount, bgButton, bgText, text1, text2, text3, bgBorder }) => {
  return (
    <div className="inline-block px-8 py-12 shadow-lg bg-white">
      <p className="text-center font-bold my-4">{type}</p>
      <p className="text-center mb-8">
        <span className="font-bold font-['Mulish']">$</span>
        <span className="text-4xl font-bold">{amount}</span>/mo
      </p>
      <div className="text-[14px]">
        <p className="flex gap-x-1 my-2">
          <box-icon name="check-circle" color="#34D399"></box-icon>
          <span>{text1}</span>
        </p>
        <p className="flex gap-x-1 my-2">
          <box-icon name="check-circle" color="#34D399"></box-icon>
          <span>{text2}</span>
        </p>
        <p className="flex gap-x-1 my-2">
          <box-icon name="check-circle" color="#34D399"></box-icon>
          <span>{text3}</span>
        </p>
      </div>
      <div className="flex justify-center">
        <button
          style={{
            backgroundColor: bgButton,
            color: bgText,
            borderWidth: "2px",
            borderColor: bgBorder,
            borderStyle: "solid",
          }}
          className="uppercase px-6 rounded-[4px] py-2 mt-8 font-bold text-[12px]"
        >
          Sign up today
        </button>
      </div>
    </div>
  );
};

export default Card;
