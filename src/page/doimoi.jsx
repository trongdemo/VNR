import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Variants cho animation
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DoiMoi = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="container mx-auto p-6 md:p-10 bg-gradient-to-b from-[#FFF9E6] to-white text-gray-800 rounded-lg shadow-xl"
    >
      {/* Tiêu đề chính */}
      <h1 className="text-4xl md:text-6xl font-bold text-center text-green-700 lodestone mb-12">
        Đổi Mới 1986 - Hành Trình Phát Triển Việt Nam
      </h1>

      {/* Bối cảnh */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-green-600 flex items-center gap-2">
          🌱 Bối cảnh trước Đổi Mới
        </h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          Trước năm 1986, Việt Nam rơi vào khủng hoảng kinh tế nghiêm trọng sau
          chiến tranh và chính sách bao cấp. Nền kinh tế tập trung, thiếu hụt
          hàng hóa, lạm phát cao (đỉnh điểm lên tới 700% vào năm 1986), và sự
          cấm vận từ phương Tây đã khiến đời sống người dân khó khăn. Đại hội
          Đảng lần thứ VI (tháng 12/1986) đã đánh dấu bước ngoặt với việc thông
          qua chính sách Đổi Mới, hướng tới mở cửa và phát triển kinh tế thị
          trường.
        </p>
      </motion.section>

      {/* Chính sách Đổi Mới */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-green-600 flex items-center gap-2">
          📜 Các Chính Sách Đổi Mới
        </h2>
        <ul className="mt-4 space-y-4 text-base md:text-lg leading-relaxed">
          <li>
            <strong>Kinh tế thị trường định hướng xã hội chủ nghĩa:</strong> Cho
            phép các thành phần kinh tế (nhà nước, tập thể, tư nhân) cùng phát
            triển, khuyến khích cạnh tranh và đầu tư.
          </li>
          <li>
            <strong>Cải cách nông nghiệp:</strong> Thực hiện khoán 10, giao đất
            cho nông dân, thúc đẩy sản xuất lương thực và chấm dứt tình trạng
            thiếu ăn.
          </li>
          <li>
            <strong>Mở cửa kinh tế:</strong> Khuyến khích đầu tư nước ngoài,
            thành lập các khu công nghiệp, và hội nhập quốc tế (ví dụ: gia nhập
            ASEAN năm 1995).
          </li>
          <li>
            <strong>Cải cách doanh nghiệp nhà nước:</strong> Tái cấu trúc, cổ
            phần hóa để tăng hiệu quả sản xuất.
          </li>
        </ul>
        <motion.div
          className="flex justify-center mt-6"
          variants={sectionVariants}
        >
          <img
            src="/anh 33.jpg" // Thay bằng hình ảnh thực tế
            alt="Chính sách Đổi Mới"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* Thành tựu */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-green-600 flex items-center gap-2">
          🎉 Thành Tựu Đạt Được
        </h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          Kể từ 1986, Việt Nam đã đạt được nhiều thành tựu đáng kể: tăng trưởng
          GDP trung bình 6-7% mỗi năm, giảm tỷ lệ nghèo từ 58% (1993) xuống dưới
          10% (2020), và trở thành một trong những quốc gia phát triển nhanh
          nhất châu Á. Hội nhập quốc tế (WTO, CPTPP) và sự phát triển của công
          nghiệp, nông nghiệp, và dịch vụ đã cải thiện đáng kể đời sống người
          dân.
        </p>
        <motion.div
          className="flex justify-center mt-6"
          variants={sectionVariants}
        >
          <img
            src="/video2.gif" // Thay bằng hình ảnh thực tế
            alt="Thành tựu Đổi Mới"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* Nút quay lại */}
      <div className="text-center mt-10">
        <Link
          to="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          Quay lại
        </Link>
      </div>
    </motion.div>
  );
};

export default DoiMoi;