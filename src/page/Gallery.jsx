import React, { useState, useRef, useEffect } from "react";
import * as PANOLENS from "panolens";
import UploadModal from "./UploadModal"; // Import modal tải ảnh
import MovingText2 from "../components/Movingtext2";

const MOCKAPI_URL = "https://67d2a7cb90e0670699be8db9.mockapi.io/gallery"; // Thay bằng URL MockAPI của bạn

const fixedImages = [
  { id: "fixed-1", src: "/baocap1.png", title: "Phòng khách thời bao cấp" },
  { id: "fixed-2", src: "/baocap2.jpg", title: "Đường phố thời bao cấp" },
  { id: "fixed-3", src: "/baocap3.jpg", title: "Người dân xếp hàng mua chất khí đốt" },
  { id: "fixed-4", src: "/image4.jpg", title: "Không gian 4" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]); // Ảnh từ MockAPI
  const [isModalOpen, setIsModalOpen] = useState(false);
  const panoRef = useRef(null);
  const viewerRef = useRef(null);

  // Fetch ảnh từ MockAPI khi mở trang
  useEffect(() => {
    fetch(MOCKAPI_URL)
      .then((res) => res.json())
      .then((data) => setUploadedImages(data))
      .catch((err) => console.error("Lỗi tải ảnh từ MockAPI:", err));
  }, []);

  // Xử lý hiển thị ảnh 360°
  useEffect(() => {
    if (!selectedImage || !panoRef.current) return;

    if (viewerRef.current) {
      viewerRef.current.dispose();
      viewerRef.current = null;
    }

    const panorama = new PANOLENS.ImagePanorama(selectedImage.src);
    const viewer = new PANOLENS.Viewer({
      container: panoRef.current,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      controlBar: false,
    });

    viewer.add(panorama);
    viewerRef.current = viewer;

    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose();
        viewerRef.current = null;
      }
    };
  }, [selectedImage]);

  // Upload ảnh lên MockAPI
  const handleUpload = (title, imageUrl) => {
    const newImage = { title, src: imageUrl };

    fetch(MOCKAPI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newImage),
    })
      .then((res) => res.json())
      .then((data) => setUploadedImages([...uploadedImages, data]))
      .catch((err) => console.error("Lỗi upload ảnh:", err));
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-[#FEEED2] rounded-lg">
      <h2 className="text-4xl font-bold text-black text-center mb-6" style={{ fontFamily: "iCielBC Lodestone, sans-serif" }}>
        Bộ Sưu Tập Ảnh 360° - Thời Kỳ Bao Cấp
      </h2>
      <MovingText2/>
      {/* Nút mở modal */}
      

      {/* Modal tải ảnh lên */}
      <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onUpload={handleUpload} />

      {!selectedImage ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Hiển thị ảnh mặc định trước */}
          {fixedImages.map((image) => (
            <div key={image.id} className="cursor-pointer" onClick={() => setSelectedImage(image)}>
              <img src={image.src} alt={image.title} className="w-72 h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition" />
              <p className="text-center text-black mt-2 text-lg">{image.title}</p>
            </div>
          ))}

          {/* Hiển thị ảnh từ MockAPI */}
          {uploadedImages.map((image) => (
            <div key={image.id} className="cursor-pointer" onClick={() => setSelectedImage(image)}>
              <img src={image.src} alt={image.title} className="w-72 h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition" />
              <p className="text-center text-black mt-2 text-lg">{image.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full max-w-4xl h-[500px] mx-auto rounded-lg shadow-lg overflow-hidden relative">
          <div ref={panoRef} className="w-full h-full" />
          <button className="absolute top-4 left-4 px-4 py-2 bg-black text-white rounded-lg" onClick={() => setSelectedImage(null)}>
            Quay lại
          </button>
        </div>
        
      )}
      <button className="mb-6 px-4 py-2 bg-green-600 text-white rounded-lg" onClick={() => setIsModalOpen(true)}>
        Đóng góp ảnh
      </button>
    </div>
    
  );
};

export default Gallery;
