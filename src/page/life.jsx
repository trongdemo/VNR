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

const Life = () => {
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
        Cuộc Sống Thời Bao Cấp
      </h1>

      {/* Hệ thống tem phiếu */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center gap-2">
          📜 Hệ thống tem phiếu & mua hàng
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          Trong thời kỳ bao cấp, nhà nước quản lý chặt chẽ việc phân phối hàng
          hóa thông qua hệ thống tem phiếu. Mỗi gia đình được cấp một số lượng
          tem phiếu nhất định, dựa trên số nhân khẩu và tiêu chuẩn lao động. Các
          mặt hàng thiết yếu như gạo, thịt, đường, sữa, vải vóc đều cần tem
          phiếu để mua. Ví dụ, phiếu sữa được phân loại theo nhóm đối tượng như
          trẻ em hoặc người ốm, và phiếu đường có các loại khác nhau tùy theo
          tiêu chuẩn.
        </p>

        {/* Hình ảnh tem phiếu */}
        <motion.div
          className="flex justify-center mt-6"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src="/tem.jpg"
            alt="Tem phiếu thời bao cấp"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Bảng tiêu chuẩn tem phiếu */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-center text-red-700">
            📝 Tiêu chuẩn tem phiếu
          </h3>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse border border-gray-600 text-center text-sm md:text-base">
              <thead>
                <tr className="bg-red-100 text-red-800">
                  <th className="border border-gray-600 px-4 py-2">
                    Tiêu chuẩn
                  </th>
                  <th className="border border-gray-600 px-4 py-2">
                    Thịt (kg)
                  </th>
                  <th className="border border-gray-600 px-4 py-2">Cá (kg)</th>
                  <th className="border border-gray-600 px-4 py-2">
                    Đường (kg)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ĐB(cán bộ cao cấp)", 7.5, "NA", 3.5],
                  ["A(Bộ trưởng...)", 4.2, 4.0, 2.0],
                  ["B(Thứ trưởng..)", 3.0, 3.0, 2.0],
                  ["C(Chuyên viên cấp cao giám đốc)", 2.0, 1.5, 1.5],
                  ["D(Trưởng phòng..)", 0.8, 1.0, 0.7],
                  ["E(Công nhân viên chức..)", 0.4, 0.5, 0.35],
                  ["N(Nhân dân)", 0.3, "NA", 0.1],
                  ["TR(trẻ em)", 0.3, "NA", 0.25],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((cell, i) => (
                      <td key={i} className="border border-gray-600 px-4 py-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hình ảnh xếp hàng */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 mt-8 items-center justify-center"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <div className="text-center md:text-left">
            <h1 className="text-lg md:text-xl font-semibold text-gray-800">
              - Người dân thường phải xếp hàng dài tại các cửa hàng mậu dịch để
              mua nhu yếu phẩm. Việc xếp hàng trở thành một phần quen thuộc
              trong cuộc sống hàng ngày, đôi khi kéo dài từ sáng sớm đến tối
              muộn. Tuy nhiên, do nguồn cung hạn chế, nhiều khi dù có tem phiếu,
              người dân vẫn không mua được hàng hóa cần thiết.
            </h1>
          </div>
          <motion.img
            src="/xephang.jpg"
            alt="Người dân xếp hàng mua hàng hóa"
            className="w-full max-w-xs rounded-lg shadow-lg"
            variants={imageVariants}
            whileHover="hover"
          />
          <motion.img
            src="/xephang2.jpg"
            alt="Cảnh xếp hàng thời bao cấp"
            className="w-full max-w-xs rounded-lg shadow-lg"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
      </motion.section>

      {/* Bữa ăn & thực phẩm */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center gap-2">
          🍚 Bữa ăn & thực phẩm
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
          Bữa ăn thời bao cấp thường đơn giản với cơm độn khoai, rau muống luộc,
          canh rau tập tàng và mắm tôm chưng. Thịt, cá rất hiếm và chỉ xuất hiện
          trong các dịp đặc biệt.
          <span className="text-red-600 font-semibold">
            {" "}
            Đặc biệt, cơm bobo trở thành món ăn quen thuộc với nhiều gia đình do
            tình trạng thiếu gạo kéo dài.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Cơm độn sắn */}
          <motion.div
            className="flex flex-col items-center"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <img
              src="/com.jpg"
              alt="Cơm độn khoai, sắn"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
            <p className="mt-3 text-gray-700 italic text-sm md:text-base text-center">
              🍚 Cơm độn khoai, sắn – món ăn phổ biến thời bao cấp do thiếu gạo.
            </p>
          </motion.div>

          {/* Mắm tôm chưng */}
          <motion.div
            className="flex flex-col items-center"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <img
              src="/mamtom.jpg"
              alt="Mắm tôm chưng"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
            <p className="mt-3 text-gray-700 italic text-sm md:text-base text-center">
              🥣 Mắm tôm chưng – một trong những món mặn quen thuộc của người
              dân lúc bấy giờ.
            </p>
          </motion.div>
        </div>

        {/* Phần đặc biệt về Cơm Bobo */}
        <motion.div
          className="mt-10 p-6 bg-yellow-200 rounded-lg shadow-lg"
          variants={sectionVariants}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-red-700">
            🍵 Cơm Bobo – Biểu tượng của thời bao cấp
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-800 text-center leading-relaxed">
            Khi gạo trở nên khan hiếm,{" "}
            <span className="font-semibold text-red-600">bobo</span> – một loại
            hạt nhập khẩu từ Đông Âu – được sử dụng thay thế. Tuy nhiên, bobo có
            vị khô cứng, khó ăn, khiến nhiều người phải ngâm nước thật lâu trước
            khi nấu để làm mềm. Dù vậy, với bao thế hệ, hương vị của nó vẫn là
            ký ức không thể quên về một thời kỳ gian khó.
          </p>

          <motion.div
            className="flex justify-center mt-6"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <img
              src="/bobo.jpg"
              alt="Cơm Bobo"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Cuộc sống & Sinh hoạt */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center gap-2">
          🏢 Cuộc sống & Sinh hoạt
        </h2>

        {/* Công việc */}
        <motion.div
          className="mt-6 flex flex-col items-center"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <motion.img
            src="/yen-phu.jpg"
            alt="Công việc thời bao cấp"
            className="w-full max-w-md rounded-lg shadow-lg"
            whileHover="hover"
          />
          <p className="mt-4 text-lg font-semibold text-gray-800 text-center">
            🏭 Hầu hết người dân làm việc trong các cơ quan nhà nước, hợp tác xã
            hoặc xí nghiệp quốc doanh. Công việc được phân công theo kế hoạch,
            ít có sự linh hoạt.
          </p>
        </motion.div>

        {/* Giải trí */}
        <motion.div
          className="mt-8 flex flex-col items-center"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <motion.img
            src="/cinema.jpg"
            alt="Giải trí thời bao cấp"
            className="w-full max-w-md rounded-lg shadow-lg"
            whileHover="hover"
          />
          <p className="mt-4 text-lg font-semibold text-gray-800 text-center">
            🎥 Hoạt động giải trí chủ yếu là xem phim tại các rạp chiếu bóng,
            nghe đài phát thanh, tham gia các buổi văn nghệ quần chúng hoặc đọc
            sách, báo. Phương tiện giải trí cá nhân còn hạn chế, do đó các hoạt
            động tập thể được ưa chuộng.
          </p>
        </motion.div>

        {/* Giao lưu cộng đồng */}
        <motion.div
          className="mt-8 flex flex-col items-center"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <motion.img
            src="/vannghe.jpg"
            alt="Giao lưu cộng đồng"
            className="w-full max-w-md rounded-lg shadow-lg"
            whileHover="hover"
          />
          <p className="mt-4 text-lg font-semibold text-gray-800 text-center">
            🤝 Tinh thần láng giềng và cộng đồng rất cao. Người dân thường xuyên
            tham gia các phong trào thi đua và họp tổ dân phố.
          </p>
        </motion.div>
      </motion.section>

      {/* Video tư liệu */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-red-700 flex items-center justify-center gap-2">
          🎥 Video tư liệu
        </h2>
        <iframe
          allow="autoplay; encrypted-media"
          loading="lazy"
          className="w-full md:w-3/4 h-64 md:h-96 mx-auto mt-6 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/rTKRy445pwQ"
          title="Cuộc sống thời bao cấp"
          allowFullScreen
        ></iframe>
      </motion.section>
    </motion.div>
  );
};

export default Life;
