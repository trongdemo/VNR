
import { Link } from "react-router-dom";
const Header = () => {
    return (
      <header className="bg-[#FEEED2] text-black text-center p-6">
        <div className="flex item-center justify-center">
          <Link to="/">
        <img src="/logo1.jpg" alt="Logo" className="h-13 w-auto mr-4" />
        </Link>

        <h1 className="text-4xl md:text-5xl lodestone">Chào mừng tới thời kỳ bao cấp</h1>
        </div>
      </header>
    );
  };
  
  export default Header;
  