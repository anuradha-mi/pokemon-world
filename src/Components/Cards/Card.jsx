import React from "react";

const Card = ({ image, name, type, stats, onClick }) => {
  return (
    <div
      className="group relative w-[340px] h-[520px] overflow-hidden rounded-3xl bg-[linear-gradient(145deg,#0d1117,#111827)] border border-[rgba(255,215,0,0.6)] shadow-[0_0_30px_rgba(255,215,0,0.25)] transition-all duration-[600ms] ease-in-out cursor-pointer hover:scale-105 hover:-translate-y-[5px] hover:shadow-[0_0_45px_rgba(255,215,0,0.45)]"
      onClick={onClick}
    >
      {/* Background */}
      <div className="absolute inset-0 flex justify-center items-center z-[1]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center rounded-3xl transition-transform duration-[600ms] ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/85 rounded-2xl transition-colors duration-[400ms]" />
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-[rgba(255,215,0,0.5)] shadow-[0_0_20px_rgba(255,215,0,0.3),inset_0_0_10px_rgba(255,215,0,0.15)] z-[2] pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 w-full px-[14px] py-[10px] backdrop-blur-[10px] bg-white/[0.08] border-t border-white/20 rounded-t-2xl z-[3] transition-all duration-500 group-hover:bg-white/[0.12]">
        <h2 className="text-[1.6rem] font-bold text-[#ffd700] [text-shadow:0_0_6px_rgba(255,215,0,0.8)] mb-[2px]">
          {name}
        </h2>
        <p className="text-[0.85rem] text-white/85 italic mb-[6px]">{type}</p>

        {/* Stats — revealed on hover, CSS-only via group-hover */}
        <div className="flex flex-col gap-[2px] max-h-0 opacity-0 overflow-hidden transition-all duration-[350ms] ease-in-out group-hover:max-h-[200px] group-hover:opacity-100">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex justify-between items-center border-b border-white/10 pb-[2px] transition-colors duration-300 hover:text-[#ffd700]"
            >
              <span className="text-white/70 font-medium text-[0.85rem]">
                {stat.label}
              </span>
              <span className="text-white font-semibold text-[0.85rem]">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;