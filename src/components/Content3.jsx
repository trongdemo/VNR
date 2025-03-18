import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Content3 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 p-10 bg-[#FEEED2] rounded-lg"
    >
      {/* Ảnh */}
      <div className="md:w-1/2">
        <img
          src="/jkq.png"
          alt="Đời sống nhân dân thời kỳ bao cấp"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Nội dung chữ */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-black lodestone">
          Những khó khăn thời bao cấp
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Giai đoạn bao cấp đầy rẫy những khó khăn về kinh tế, chính trị và đời sống.
          Người dân phải đối mặt với tình trạng thiếu lương thực, quản lý nhà nước chặt chẽ
          và sự khan hiếm hàng hóa thiết yếu.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          Tuy khó khăn, nhưng tinh thần đoàn kết và sáng tạo giúp nhân dân vượt 
          qua mọi thử thách, tạo nên những ký ức khó quên.
        </p>

        {/* Nút "Tìm hiểu thêm" */}
        <button
          onClick={() => navigate("/khokhan")}
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition"
        >
          Tìm hiểu thêm
        </button>
      </div>
    </motion.div>
  );
};

export default Content3;
