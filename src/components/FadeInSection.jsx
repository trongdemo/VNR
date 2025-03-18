import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Theo dõi liên tục khi cuộn lên/xuống

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Khi cuộn lên sẽ biến mất
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-10 p-6 bg-[#CAB891] text-black text-center text-3xl font-bold"
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
