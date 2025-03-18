import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import History1 from "./page/History1";
import Gallery from "./page/Gallery";
import Life from "./page/life";
import EconomyAndLife from "./page/EconomyAndLife";
import DoiMoi from "./page/doimoi";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/boi-canh-lich-su" element={<History1 />} />
        <Route path="/doi-song" element={<Life />} />
        <Route path="/khokhan" element={<EconomyAndLife />} />
        <Route path="/doimoi" element={<DoiMoi />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;