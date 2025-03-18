import React, { useEffect, useRef } from "react";
import * as PANOLENS from "panolens";
import * as THREE from "three";
import { Link } from "react-router-dom";

const Content4 = () => {
  const panoRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!panoRef.current || viewerRef.current) return; // Ngăn tạo viewer trùng lặp

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      "/jkq.png", // Đường dẫn ảnh (đảm bảo ảnh nằm trong thư mục public)
      (texture) => {
        const panorama = new PANOLENS.ImagePanorama(texture.image.src);
        const viewer = new PANOLENS.Viewer({
          container: panoRef.current,
          autoRotate: true, // Tự động xoay
          autoRotateSpeed: 0.3,
          controlBar: false, // Ẩn thanh điều khiển
        });

        viewer.add(panorama);
        viewerRef.current = viewer;
        console.log("Ảnh 360° đã load thành công!");
      },
      undefined,
      (error) => {
        console.error("Lỗi khi tải ảnh 360°:", error);
      }
    );

    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose();
        viewerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10 p-10 bg-[#FEEED2] rounded-lg">
      <h2
        className="text-4xl font-bold text-black text-center lodestone"
      >
        Trải Nghiệm Không Gian 360° - Thời Kỳ Bao Cấp
      </h2>

      {/* Ảnh 360° */}
      <div
        ref={panoRef}
        className="w-full h-[500px] max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden"
      />

      <p className="text-lg text-gray-700 text-center">
        Kéo chuột hoặc xoay điện thoại để khám phá không gian bao cấp!
      </p>

      <Link
        to="/gallery"
        className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition"
      >
        Tìm hiểu thêm
      </Link>
    </div>
  );
};

export default Content4;
