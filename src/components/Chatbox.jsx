import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Danh sách câu hỏi sẵn
  const predefinedQuestions = [
    "Hệ thống tem phiếu hoạt động thế nào?",
    "Cuộc sống thời bao cấp ra sao?",
    "Kinh tế thời bao cấp có gì đặc biệt?",
    "Y tế và giáo dục thời bao cấp thế nào?",
    "Văn hóa thời bao cấp có gì nổi bật?",
  ];

  // Gửi tin nhắn tới API
  const sendMessage = async (message = input) => {
    if (!message.trim()) return;

    const userMessage = { role: "user", text: message };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
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

      const botResponse =
        response.data.candidates[0]?.content.parts[0]?.text ||
        "Không có phản hồi từ API.";
      const botMessage = { role: "bot", text: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Lỗi API Gemini:", error);
      const errorMessage = {
        role: "bot",
        text: "Đã có lỗi xảy ra. Vui lòng thử lại sau!",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handlePredefinedQuestion = (question) => {
    setInput(question);
    sendMessage(question);
  };

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
      <h1 className="text-4xl md:text-6xl font-bold text-center text-red-800 lodestone mb-12">
        ChatBot Thời Bao Cấp
      </h1>

      {/* Khung hiển thị chat */}
      <div className="bg-white rounded-lg shadow-lg p-6 h-[400px] overflow-y-auto mb-6">
        {messages.length === 0 && !loading && (
          <div className="mb-4">
            <p className="text-center text-gray-500 italic mb-4">
              Hỏi mình bất cứ điều gì về thời bao cấp nhé!
            </p>
            <div className="bg-gray-100 text-gray-800 p-4 rounded-lg">
              <p className="mb-2 font-semibold text-center">
                Chọn một câu hỏi sẵn:
              </p>
              <div className="flex flex-col gap-2">
                {predefinedQuestions.map((question, i) => (
                  <button
                    key={i}
                    onClick={() => handlePredefinedQuestion(question)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-left"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {messages.map((msg, index) => {
          if (msg.role === "user") {
            return (
              <div key={index} className="mb-4 flex justify-end">
                <div className="max-w-[70%] p-4 rounded-lg bg-red-600 text-white">
                  <p>{msg.text}</p>
                </div>
              </div>
            );
          }

          if (msg.role === "bot") {
            return (
              <div key={index} className="mb-4 flex justify-start">
                <div className="max-w-[70%] p-4 rounded-lg bg-gray-200 text-gray-800">
                  <p>{msg.text}</p>
                </div>
              </div>
            );
          }

          return null;
        })}

        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] p-4 rounded-lg bg-gray-200 text-gray-800">
              <p>Đang xử lý...</p>
            </div>
          </div>
        )}
      </div>

      {/* Ô nhập liệu + nút gửi */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nhập câu hỏi của bạn..."
          className="flex-1 p-4 rounded-lg border-2 border-red-500 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-md transition-all duration-300"
        />
        <button
          onClick={() => sendMessage()}
          disabled={loading}
          className={`px-6 py-4 rounded-lg text-white font-semibold text-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-700 hover:bg-red-800 active:scale-95"
          } shadow-lg transition-all duration-300 transform hover:shadow-xl`}
        >
          Gửi
        </button>
      </div>
    </motion.div>
  );
};

export default ChatBot;