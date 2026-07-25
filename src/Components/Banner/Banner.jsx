import React from "react";

function Banner({ image, name, description, onClose }) {
  return (
    <div
      className="fixed inset-0 w-full h-full bg-black/70 flex items-center justify-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 text-white p-8 rounded-xl max-w-[400px] text-center relative shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2.5 right-3 bg-transparent border-none text-white text-xl cursor-pointer hover:text-red-400 transition-colors"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={image}
          alt={name}
          className="w-[150px] h-[150px] object-contain mb-4 mx-auto"
        />
        <h2 className="text-2xl font-bold mb-2 text-amber-400">{name}</h2>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default Banner;