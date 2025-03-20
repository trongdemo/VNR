import React from "react";

const Content5 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 p-10 bg-[#FEEED2] rounded-lg">
      <h2
        className="text-4xl font-bold text-black text-center mb-6 lodestone"
      >
        Sách online từ bao cấp tới đổi mới đất nước
      </h2>
      <div className="w-screen h-screen">
        <iframe
          src="https://online.flippingbook.com/view/1031055283/?embed=true"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Content5;
