import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Content1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 p-10 bg-[#FEEED2] rounded-lg"
    >
      {/* Nội dung chữ */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-black lodestone" >
          Thời Kỳ Bao Cấp - Bối cảnh lịch sử 
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Khám phá những câu chuyện và sản phẩm mang đậm dấu ấn của thời kỳ bao cấp. Hãy cùng quay lại một thời kỳ đáng nhớ!
        </p>
        <Link
          to="/boi-canh-lich-su"
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition"
        >
          Tìm hiểu thêm
        </Link>
      </div>

      {/* Ảnh */}
      <div className="md:w-1/2">
        <img
          src="/jkq.png"
          alt="Thời Kỳ Bao Cấp"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default Content1;
