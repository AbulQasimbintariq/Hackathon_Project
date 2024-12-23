// // import Navbar from "./navbar"
// import Footer from "./footer"
// import ProductList from "./productlist"
// import "./globals.css";
// import fontIcon from "./font/font_awesome";
// import Filter from "./filter"
// // export default function Home() {
// //   return (
// //           <div className="Home">
// //           <fontIcon />
// //           {/* <Navbar /> */}
// //           <HeroSec />
// //           <Main />
// //             <h1>Hello World</h1>
// //           <Footer />
// //             </div>

// //   );
// // }

// export default function Home() {
//   return (
//     <div className="container">
//          <fontIcon />

//       <Head>
//         <title>SHOP.CO - Casual</title>
//         <meta name="description" content="Shop the best casual wear" />
//       </Head>
      
//       <header className="header">
//         <div className="logo">SHOP.CO</div>
//         <nav className="nav">
//           <a href="#">Shop</a>
//           <a href="#">On Sale</a>
//           <a href="#">New Arrivals</a>
//           <a href="#">Brands</a>
//         </nav>
//       </header>
      
//       <main className="main">
//         <aside className="sidebar">
//           <Filter />
//         </aside>
//         <section className="content">
//           <ProductList />
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }


import { useState } from 'react';
import Head from 'next/head';
import Images from 'next/images';

const Home = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string>('Casual');

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div>
      <Head>
        <title>Shop.CO - Casual Wear</title>
        <meta name="description" content="Shop the latest casual wear" />
      </Head>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SHOP.CO</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">On Sale</a></li>
              <li><a href="#" className="hover:underline">New Arrivals</a></li>
              <li><a href="#" className="hover:underline">Brands</a></li>
            </ul>
          </nav>
          <div className="space-x-4">
            <button className="bg-gray-700 px-4 py-2 rounded">Sign In</button>
            <button className="bg-gray-700 px-4 py-2 rounded">Cart</button>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Casual</h2>
        <div className="flex">
          <aside className="w-1/4 p-4 border-r">
            <h3 className="font-bold mb-2">Filters</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Price</h4>
              <input
                type="range"
                min={0}
                max={300}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Colors</h4>
              <div className="flex space-x-2">
                {['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'black', 'white'].map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full bg-${color}-500 ${selectedColors.includes(color) ? 'ring-2 ring-black' : ''}`}
                    onClick={() => toggleColor(color)}
                  />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Size</h4>
              <div className="space-y-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`block w-full border p-2 rounded ${selectedSizes.includes(size) ? 'bg-gray-800 text-white' : ''}`}
                    onClick={() => toggleSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Dress Style</h4>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full border p-2 rounded"
              >
                {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
                  <option key={style} value={style}>{style}</option>
                ))}
              </select>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded w-full">Apply Filter</button>
          </aside>
          <section className="w-3/4 p-4">
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Gradient Graphic T-shirt', price: 145, img: '/images/gradient-graphic-tshirt.jpg' },
                { name: 'Polo with Tipping Details', price: 180, img: '/images/polo-tipping.jpg' },
                { name: 'Black Striped T-shirt', price: 120, oldPrice: 150, img: '/images/black-striped-tshirt.jpg' },
                { name: 'Skinny Fit Jeans', price: 240, oldPrice: 260, img: '/images/skinny-fit-jeans.jpg' },
                { name: 'Checkered Shirt', price: 180, img: '/images/checkered-shirt.jpg' },
                { name: 'Sleeve Striped T-shirt', price: 130, oldPrice: 160, img: '/images/sleeve-striped-tshirt.jpg' },
                { name: 'Vertical Striped Shirt', price: 212, oldPrice: 232, img: '/images/vertical-striped-shirt.jpg' },
                { name: 'Courage Graphic T-shirt', price: 145, img: '/images/courage-graphic-tshirt.jpg' },
                { name: 'Loose Fit Bermuda Shorts', price: 80, img: '/images/bermuda-shorts.jpg' },
              ].map((product) => (
                <div key={product.name} className="border p-4 rounded">
                  <img src={product.img} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-bold">${product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm line-through">${product.oldPrice}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>Stay up to date about our latest offers</p>
          <div className="flex justify-center space-x-2 mt-2">
            <input type="email" placeholder="Enter your email" className="p-2 rounded" />
            <button className="bg-black text-white px-4 py-2 rounded">Subscribe to Newsletter</button>
          </div>
          <div className="mt-4">
            <p>© 2023 Shop.CO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

