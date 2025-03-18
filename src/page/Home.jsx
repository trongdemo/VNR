import React from "react";
import Banner from "../components/Banner";
import FadeInSection from "../components/FadeInSection";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import Content3 from "../components/Content3";
import Content4 from "../components/Content4";
import Content5 from "../components/Content5";
import Content6 from "../components/Content6";
import MovingText from "../components/Movingtext";
import Chatbot from "../components/Chatbox";
const Home = () => {
  return (
    <div> {/* Xóa khoảng cách giữa các content */}
    <Banner />
    <div className="h-10">
    <MovingText/>
    </div>
    <Content1 />
    <Content2 />
    <Content3 />
    <Content6/>
    <Content4 />
    <Content5 />
    
    <Chatbot/>
  </div>
  );
};

export default Home;
