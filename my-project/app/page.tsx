import Navbar from "./navbar"
import Footer from "./footer"
import HeroSec from "./heroSection"
import Main from "./main"
import "./globals.css";
import fontIcon from "./font/font_awesome";
export default function Home() {
  return (
          <div className="Home">
          <fontIcon />
          <Navbar />
          <HeroSec />
          <Main />
            <h1>Hello World</h1>
          <Footer />
            </div>

  );
}
