// import Navbar from "./navbar"
import Footer from "./footer"
import ProductList from "./productlist"
import "./globals.css";
import fontIcon from "./font/font_awesome";
import Filter from "./filter"
// export default function Home() {
//   return (
//           <div className="Home">
//           <fontIcon />
//           {/* <Navbar /> */}
//           <HeroSec />
//           <Main />
//             <h1>Hello World</h1>
//           <Footer />
//             </div>

//   );
// }

export default function Home() {
  return (
    <div className="container">
         <fontIcon />

      <Head>
        <title>SHOP.CO - Casual</title>
        <meta name="description" content="Shop the best casual wear" />
      </Head>
      
      <header className="header">
        <div className="logo">SHOP.CO</div>
        <nav className="nav">
          <a href="#">Shop</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </nav>
      </header>
      
      <main className="main">
        <aside className="sidebar">
          <Filter />
        </aside>
        <section className="content">
          <ProductList />
        </section>
      </main>

      <Footer />
    </div>
  );
}

