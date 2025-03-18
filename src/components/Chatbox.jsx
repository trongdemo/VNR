import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Variants cho animation
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ChatBot = () => {
  // State để lưu lịch sử chat
  const [messages, setMessages] = useState([]);
  // State để lưu nội dung input
  const [input, setInput] = useState("");
  // State để hiển thị trạng thái loading
  const [loading, setLoading] = useState(false);

  // Danh sách câu hỏi sẵn
  const predefinedQuestions = [
    "Hệ thống tem phiếu hoạt động thế nào?",
    "Cuộc sống thời bao cấp ra sao?",
    "Kinh tế thời bao cấp có gì đặc biệt?",
    "Y tế và giáo dục thời bao cấp thế nào?",
    "Văn hóa thời bao cấp có gì nổi bật?",
  ];

  // Hàm gửi yêu cầu tới API Gemini
  const sendMessage = async (message = input) => {
    if (!message.trim()) return; // Không gửi nếu input rỗng

    // Thêm câu hỏi của người dùng vào lịch sử chat
    const userMessage = { role: "user", text: message };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Xóa input sau khi gửi
    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        {
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Lấy phản hồi từ API
      const botResponse =
        response.data.candidates[0]?.content.parts[0]?.text ||
        "Không có phản hồi từ API.";
      const botMessage = { role: "bot", text: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Lỗi khi gọi API Gemini:", error);
      const errorMessage = {
        role: "bot",
        text: "Đã có lỗi xảy ra. Vui lòng thử lại sau!",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Xử lý khi nhấn Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Xử lý nhấp vào câu hỏi sẵn
  const handlePredefinedQuestion = (question) => {
    setInput(question); // Đặt câu hỏi vào ô input
    sendMessage(question); // Gửi ngay lập tức
  };

  // Lưu và khôi phục lịch sử chat từ localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="container mx-auto p-6 md:p-10 bg-gradient-to-b from-[#FEEED2] to-[#FDF5E6] rounded-lg text-black shadow-xl"
    >
      {/* Tiêu đề */}
      <h1 className="text-4xl md:text-6xl font-bold text-center text-red-800 lodestone mb-12">
        ChatBot Thời Bao Cấp
      </h1>

      {/* Khu vực hiển thị lịch sử chat */}
      <div className="bg-white rounded-lg shadow-lg p-6 h-[400px] overflow-y-auto mb-6">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            Hỏi mình bất cứ điều gì về thời bao cấp nhé! Hoặc chọn câu hỏi bên
            dưới.
          </p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] p-4 rounded-lg ${
                  msg.role === "user"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] p-4 rounded-lg bg-gray-200 text-gray-800">
              <p>Đang xử lý...</p>
            </div>
          </div>
        )}
      </div>

      {/* Danh sách câu hỏi sẵn */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-red-700 mb-4">
          Các câu hỏi:
        </h3>
        <div className="flex flex-wrap gap-3">
          {predefinedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handlePredefinedQuestion(question)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 text-sm md:text-base"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Ô nhập liệu và nút gửi */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nhập câu hỏi của bạn..."
          className="flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-800"
        />
        <button
          onClick={() => sendMessage()}
          disabled={loading}
          className={`p-4 rounded-lg text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
          } transition-colors duration-300`}
        >
          Gửi
        </button>
      </div>
    </motion.div>
  );
};

export default ChatBot;