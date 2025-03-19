import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Content2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 mt-10 p-10 bg-[#FEEED2] rounded-lg"
    >
      {/* Nội dung chữ */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-black lodestone">
          Đời Sống Nhân Dân - Giản Dị & Kiên Cường
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Những ngày tháng gắn liền với tem phiếu, cửa hàng mậu dịch và những
          món ăn thời bao cấp. Bạn đã từng nghe đến "cơm độn khoai", "bánh mì
          mậu dịch" hay "cửa hàng mậu dịch quốc doanh" chưa?
        </p>
        <Link
          to="/doi-song"
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition"
        >
          Khám phá ngay
        </Link>
      </div>

      {/* Ảnh */}
      <div className="md:w-1/2">
        <img
          src="/doisong.jpg"
          alt="Cuộc sống thời bao cấp"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default Content2;
