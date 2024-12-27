export default function Navbar(){
    return(
        <div className="flex justify-between">
          <div>
            <h1>SHOP.CO</h1>
          </div>
          <select name="Shop" id="shop">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="home">Home & Garden</option>
            <option value="sports">Sports & Outdoors</option>
            <option value="beauty">Beauty & Health</option>
            <option value="kids">Kids & Baby</option>
            <option value="travel">Travel & Adventure</option>
            <option value="crafts">Crafts & Hobbies</option>
            <option value="toys">Toys & Games</option>
            <option value="books">Books & Magazines</option>
            <option value="music">Music & Audio</option>
          </select>
           <ul className="flex justify-center items-center">
             <li>On Sale</li>
             <li>New Arrival</li>
             <li>Brands</li>
           </ul>
           <div className="md:hidden">
             <input className="h-5 font-bold text-gray-100 text-2xl" type="text" placeholder="Search..."/>
           </div>
           <div>
               <i className="fa-solid fa-cart-shopping"></i>
               <i className="fa-regular fa-address-book"></i>

           </div>
   
        </div>
    )
}