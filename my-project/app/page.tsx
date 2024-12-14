import Navbar from "./navbar"
import Footer from "./footer"
import HeroSec from "./heroSection"
import Main from "./main"
import "./globals.css";
import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css";
export default function Home() {
  return (
          <div className="Home">
          <Navbar />
          <HeroSec />
          <Main />
            <h1>Hello World</h1>
          <Footer />
            </div>

  );
}
