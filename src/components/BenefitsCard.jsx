import React from 'react'

const BenefitsCard = ({ icon, title, details, isDarkMode = false }) => {
  return (
    <div
      className={`w-11/12 h-32  border border-solid rounded-3xl flex flex-row px-10 py-6 gap-6 items-center ${
        isDarkMode
          ? "bg-neutral-900 border-neutral-700 text-neutral-50"
          : "bg-transparent border-black text-neutral-900"
      }`}
    >
      <span
        className={`border rounded-full p-4 flex items-center justify-center ${
          isDarkMode ? "border-none bg-neutral-600" : "border-black"
        }`}
      >
        <img className="w-6" src={icon} alt="icon" />
      </span>
      <div className="flex flex-col gap-2">
        <h6 className="font-sans font-semibold text-left">{title}</h6>
        <p
          className={`text-left ${
            isDarkMode ? "opacity-70" : "opacity-70"
          }`}
        >
          {details}
        </p>
      </div>
    </div>
  );
};

export default BenefitsCard;

