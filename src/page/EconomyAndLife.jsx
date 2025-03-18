import { motion } from "framer-motion";

// Variants cho animation từng section
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variants cho hình ảnh
const imageVariants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const EconomyAndLife = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="container mx-auto p-6 md:p-10 bg-gradient-to-b from-[#FEEED2] to-[#FDF5E6] rounded-lg text-black shadow-xl"
    >
      {/* Tiêu đề chính */}
      <h1 className="text-4xl md:text-6xl font-bold text-center text-red-800 lodestone mb-12">
        Kinh tế và Đời sống thời bao cấp
      </h1>

      {/* 1. Kinh tế thiếu thốn, tự cung tự cấp */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center gap-2">
          💸 Kinh tế thiếu thốn, tự cung tự cấp
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Hậu quả chiến tranh:</strong> Sau năm 1975, đất nước chịu
          nhiều tổn thất do chiến tranh kéo dài, với cơ sở hạ tầng bị tàn phá và
          hàng triệu nạn nhân cần hỗ trợ.{" "}
          <em>(WIKIPEDIA, BÁCH KHOA TOÀN THƯ MỞ)</em>
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Chính sách cấm vận:</strong> Việt Nam phải đối mặt với lệnh
          cấm vận kinh tế từ Mỹ và các nước phương Tây, gây khó khăn trong việc
          tiếp cận thị trường và nguồn viện trợ quốc tế.{" "}
          <em>(WIKIPEDIA, BÁCH KHOA TOÀN THƯ MỞ)</em>
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Chiến tranh biên giới:</strong> Cuộc chiến tại biên giới Tây
          Nam và phía Bắc yêu cầu nguồn lực lớn cho quốc phòng, ảnh hưởng đến
          phát triển kinh tế. <em>(WIKIPEDIA, BÁCH KHOA TOÀN THƯ MỞ)</em>
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Hệ thống tem phiếu:</strong> Hàng hóa thiết yếu được phân phối
          qua tem phiếu, phản ánh sự khan hiếm và quản lý tập trung.{" "}
          <em>(BÁO KHÁNH HÒA ĐIỆN TỬ)</em>
        </p>
        <motion.div
          className="flex justify-center mt-6"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src="/kinhte2.jpg" // Thay bằng hình ảnh thực tế
            alt="Kinh tế thiếu thốn"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* 2. Quản lý tập trung, kém hiệu quả */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center gap-2">
          📋 Quản lý tập trung, kém hiệu quả
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Mô hình kinh tế kế hoạch hóa:</strong> Việc áp dụng mô hình
          kinh tế kế hoạch hóa tập trung dẫn đến thiếu linh hoạt và kém hiệu quả
          trong sản xuất và phân phối. <em>(RADIO FREE ASIA)</em>
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Thiếu động lực phát triển:</strong> Sự kiểm soát chặt chẽ của
          nhà nước hạn chế sự sáng tạo và động lực phát triển của các thành phần
          kinh tế tư nhân. <em>(RADIO FREE ASIA)</em>
        </p>
        <motion.div
          className="flex justify-center mt-6"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src="/kinhte3.jpg" // Thay bằng hình ảnh thực tế
            alt="Quản lý tập trung"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* 3. Khó khăn trong mối quan hệ quốc tế */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center gap-2">
          🌐 Khó khăn trong mối quan hệ quốc tế
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Tự cô lập:</strong> Chính sách bảo thủ và tự cô lập khiến Việt
          Nam gặp nhiều khó khăn trong việc giao lưu và hợp tác quốc tế.{" "}
          <em>(WIKIPEDIA, BÁCH KHOA TOÀN THƯ MỞ)</em>
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Thiếu hụt ngoại giao và công nghệ:</strong> Sự hạn chế trong
          quan hệ quốc tế dẫn đến thiếu hụt về ngoại giao, kinh tế và công nghệ,
          cản trở sự phát triển bền vững.
        </p>
        <motion.div
          className="flex justify-center mt-6"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src="/quanhe.jpg" // Thay bằng hình ảnh thực tế
            alt="Khó khăn quan hệ quốc tế"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* 4. Y tế */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center gap-2">
          🩺 Y tế
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Hệ thống y tế bao cấp:</strong> Người dân được khám chữa bệnh
          miễn phí hoặc với chi phí rất thấp. Tuy nhiên, do nền kinh tế khó
          khăn, cơ sở vật chất và trang thiết bị y tế thiếu thốn, dẫn đến chất
          lượng dịch vụ y tế không cao. <em>(VNEXPRESS.NET)</em>
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Thiếu hụt thuốc men và trang thiết bị:</strong> Việc sản xuất
          và cung ứng thuốc men gặp nhiều khó khăn, khiến người dân khó tiếp cận
          dịch vụ y tế chất lượng. <em>(VNEXPRESS.NET)</em>
        </p>
        <motion.div
          className="flex justify-center mt-6"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src="/yte.jpg" // Thay bằng hình ảnh thực tế
            alt="Hệ thống y tế"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* 5. Giáo dục */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center gap-2">
          📚 Giáo dục
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Cơ sở vật chất hạn chế:</strong> Trường học, đặc biệt ở vùng
          sâu, vùng xa, thường được dựng tạm bợ bằng tranh tre, nứa lá. Nhà nước
          chỉ đầu tư ở những cơ sở trọng điểm, còn lại chủ yếu dựa vào sự đóng
          góp của nhân dân. <em>(BÁO GIA LAI ĐIỆN TỬ)</em>
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Chương trình giáo dục:</strong> Chương trình học tập trung vào
          việc xóa mù chữ và bổ túc văn hóa, nhằm nâng cao trình độ dân trí. Tuy
          nhiên, do hạn chế về nguồn lực, chất lượng giáo dục chưa được đảm bảo.{" "}
          <em>(BÁO GIA LAI ĐIỆN TỬ)</em>
        </p>
        <motion.div
          className="flex justify-center mt-6"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src="/giaoduc.jpg" // Thay bằng hình ảnh thực tế
            alt="Hệ thống giáo dục"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* 6. Văn hóa */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center gap-2">
          🎭 Văn hóa
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Kiến trúc và nghệ thuật:</strong> Kiến trúc thời kỳ này phản
          ánh sự đơn giản và tiết kiệm, với các công trình công cộng và nhà ở
          mang phong cách thực dụng. Hoạt động nghệ thuật tập trung vào việc
          tuyên truyền, cổ vũ tinh thần lao động và xây dựng xã hội chủ nghĩa.{" "}
          <em>(TAPCHITOAAN.VN)</em>
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <strong>Đời sống văn hóa:</strong> Hoạt động giải trí hạn chế, chủ yếu
          là các chương trình văn nghệ quần chúng, chiếu phim lưu động và các
          phong trào thi đua lao động.
        </p>
        <motion.div
          className="flex justify-center mt-6"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src="/vanhoa.jpg" // Thay bằng hình ảnh thực tế
            alt="Đời sống văn hóa"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>
      <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center justify-center gap-2">
          🎥 Video tư liệu về hoàn cảnh khó khăn thời bao cấp
        </h2>
      <div className="mt-12 flex justify-center">
        <iframe
          className="w-full md:w-3/4 h-64 md:h-96 mx-auto mt-6 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/pG8hKCK6ctU"
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default EconomyAndLife;
