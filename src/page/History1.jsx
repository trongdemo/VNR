import { motion } from "framer-motion";

const History1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-6 py-12 bg-[#FEEED2] rounded-lg shadow-lg"
    >
      <h1 className="text-4xl font-bold text-center lodestone text-black mb-6">
        Bối Cảnh Lịch Sử & Quốc Tế Của Thời Kỳ Bao Cấp
      </h1>

      {/* Bối cảnh lịch sử */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black">🔹 Bối Cảnh Lịch Sử</h2>
        <p className="mt-4 text-lg text-gray-700">
          Sau khi thống nhất đất nước năm 1975, Việt Nam bước vào thời kỳ xây dựng và phát triển nền kinh tế theo mô hình kế hoạch hóa tập trung. 
          Nhà nước kiểm soát toàn bộ các hoạt động kinh tế, từ sản xuất, phân phối đến tiêu dùng. 
          Do điều kiện chiến tranh kéo dài, nền kinh tế gặp nhiều khó khăn, dẫn đến tình trạng thiếu hụt hàng hóa, thực phẩm và nhu yếu phẩm. 
        </p>
        <img
          src="/chientranh1.jpg"
          alt="Bối cảnh lịch sử thời bao cấp"
          className="w-full h-auto mt-4 rounded-lg shadow-md"
        />
      </section>

      {/* Tình hình quốc tế */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black">🌍 Tình Hình Quốc Tế</h2>
        <p className="mt-4 text-lg text-gray-700">
          Thời kỳ bao cấp của Việt Nam diễn ra trong bối cảnh chiến tranh lạnh giữa hai khối tư bản chủ nghĩa và xã hội chủ nghĩa. 
          Việt Nam chịu ảnh hưởng sâu sắc từ mô hình kinh tế của Liên Xô và các nước Đông Âu. 
          Tuy nhiên, đến những năm 1980, khủng hoảng kinh tế xảy ra trên toàn cầu, đặc biệt là sự sụp đổ của Liên Xô, đã đặt ra nhiều thách thức cho Việt Nam.
        </p>
        <img
          src="/chientranhlanh.jpg"
          alt="Tình hình quốc tế thời bao cấp"
          className="w-full h-auto mt-4 rounded-lg shadow-md"
        />
      </section>

      {/* Kết luận */}
      <section>
        <h2 className="text-2xl font-semibold text-black">📌 Kết Luận</h2>
        <p className="mt-4 text-lg text-gray-700">
          Với những khó khăn cả trong và ngoài nước, Việt Nam buộc phải thay đổi mô hình kinh tế. 
          Đến năm 1986, Đảng Cộng Sản Việt Nam đề ra chính sách Đổi Mới, chuyển nền kinh tế từ bao cấp sang kinh tế thị trường, mở ra một thời kỳ phát triển mạnh mẽ.
        </p>
      </section>
    </motion.div>
  );
};

export default History1;
