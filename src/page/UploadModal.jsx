import React, { useState } from "react";
import imageCompression from "browser-image-compression"; // Import thư viện nén ảnh

const UploadModal = ({ isOpen, onClose, onUpload }) => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [preview, setPreview] = useState(null);
  const [uploadType, setUploadType] = useState("file"); // "file" hoặc "url"

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File quá lớn! Vui lòng chọn ảnh dưới 2MB.");
        return;
      }
      setImageFile(file);
      setImageUrl(""); // Xóa URL khi chọn file
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
    setImageFile(null); // Xóa file khi nhập URL
    setPreview(event.target.value);
  };

  const handleUpload = async () => {
    if (!title.trim()) {
      alert("Vui lòng nhập tiêu đề!");
      return;
    }

    if (uploadType === "file" && !imageFile) {
      alert("Vui lòng chọn ảnh từ tệp!");
      return;
    }

    if (uploadType === "url" && !imageUrl.trim()) {
      alert("Vui lòng nhập URL ảnh hợp lệ!");
      return;
    }

    if (uploadType === "file") {
      const options = {
        maxSizeMB: 0.5, // Giảm xuống dưới 1MB
        maxWidthOrHeight: 600, // Resize kích thước ảnh
        useWebWorker: true, // Tối ưu hiệu suất
      };

      try {
        const compressedFile = await imageCompression(imageFile, options);
        const reader = new FileReader();
        reader.readAsDataURL(compressedFile);
        reader.onloadend = () => {
          onUpload(title, reader.result);
          resetForm();
        };
      } catch (error) {
        alert("Lỗi nén ảnh: " + error.message);
      }
    } else {
      onUpload(title, imageUrl);
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle("");
    setImageFile(null);
    setImageUrl("");
    setPreview(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Đóng góp ảnh</h2>

        <input
          type="text"
          placeholder="Nhập tiêu đề ảnh..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />

        <div className="flex mb-3">
          <button
            className={`px-4 py-2 w-1/2 ${
              uploadType === "file" ? "bg-blue-600 text-white" : "bg-gray-200"
            } rounded-l-md`}
            onClick={() => setUploadType("file")}
          >
            Chọn tệp
          </button>
          <button
            className={`px-4 py-2 w-1/2 ${
              uploadType === "url" ? "bg-blue-600 text-white" : "bg-gray-200"
            } rounded-r-md`}
            onClick={() => setUploadType("url")}
          >
            Nhập URL
          </button>
        </div>

        {uploadType === "file" ? (
          <input type="file" accept="image/*" onChange={handleImageChange} className="mb-3 w-full" />
        ) : (
          <input
            type="text"
            placeholder="Dán URL ảnh..."
            value={imageUrl}
            onChange={handleUrlChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
          />
        )}

        {preview && (
          <img src={preview} alt="Xem trước" className="w-full h-40 object-cover rounded-md mb-3" />
        )}

        <div className="flex justify-end space-x-2">
          <button onClick={resetForm} className="px-4 py-2 bg-gray-400 text-white rounded-lg">
            Hủy
          </button>
          <button onClick={handleUpload} className="px-4 py-2 bg-green-600 text-white rounded-lg">
            Tải lên
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
