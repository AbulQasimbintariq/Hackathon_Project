export default function Footer(){
    return(
      <div className="flex justify-center items-center w-100%">
          <div className="flex justify-center items-center h-10 w-90%">
           <div>
            <h1 className="flex flex-wrap">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
           </div>
            <div>
                <input type="text" placeholder="Enter your email address"/>
                <button>Subscribe</button>
            </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <h1>SHOP.CO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti repellendus at omnis nisi.
            </p>
            <div>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="flex justify-center items-center h-20 w-100%">
            <div className="flex flex-col justify-center items-center">
              <h3>company</h3>
              <p>words 1</p>              
              <p>words 1</p>              
              <p>words 1</p>              
              <p>words 1</p>
              </div>
            <div className="flex flex-col justify-center items-center">
              <h3>company</h3>
              <p>words 1</p>              
              <p>words 1</p>              
              <p>words 1</p>              
              <p>words 1</p>
              </div>
            <div className="flex flex-col justify-center items-center">
              <h3>company</h3>
              <p>words 1</p>              
              <p>words 1</p>              
              <p>words 1</p>              
              <p>words 1</p>
              </div>
            <div className="flex flex-col justify-center items-center">
              <h3>company</h3>
              <p>words 1</p>              
              <p>words 1</p>              
              <p>words 1</p>              
              <p>words 1</p>
              </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
            <p className="flex justify-center items-center text-center">
            &copy; 2022 Shop.co. All rights reserved.
            </p>
            <div>
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-discover"></i>
            </div>
        </div>
      </div>

    )
}