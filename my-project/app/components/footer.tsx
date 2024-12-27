import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <input type="email" placeholder="Enter your email address" className={styles.emailInput} />
        <button className={styles.subscribeButton}>Subscribe to Newsletter</button>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerColumn}>
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Careers</a>
        </div>
        <div className={styles.footerColumn}>
          <h3>Help</h3>
          <a href="#">Customer Support</a>
          <a href="#">Delivery</a>
        </div>
        <div className={styles.footerColumn}>
          <h3>FAQ</h3>
          <a href="#">Order Inquiries</a>
          <a href="#">Returns</a>
        </div>
        <div className={styles.footerColumn}>
          <h3>Resources</h3>
          <a href="#">Blog</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// export default function Footer(){
//     return(
//       <div className="flex flex-col justify-center items-center h-auto w-100% bg-slate-300">
//           <div className="flex justify-center items-center h-10 w-90% bg-gray-500">
//            <div>
//             <h1 className="flex flex-wrap">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
//            </div>
//             <div>
//                 <input type="text" placeholder="Enter your email address"/>
//                 <button>Subscribe</button>
//             </div>
//         </div>
//         <div className="flex justify-around w-full items-center">
//           <div className="flex justify-center items-center flex-col w-20">
//             <h1>SHOP.CO</h1>
//             <p className="flex flex-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti repellendus at omnis nisi.
//             </p>
//             <div>
//             <i className="fa-brands fa-twitter"></i>
//             <i className="fa-brands fa-instagram"></i>
//             <i className="fa-brands fa-facebook"></i>
//             <i className="fa-brands fa-github"></i>
//             </div>
//           </div>
//           <div className="flex justify-center items-center h-20 w-100%">
//             <div className="flex flex-col justify-center items-center">
//               <h3>company</h3>
//               <p>words 1</p>              
//               <p>words 1</p>              
//               <p>words 1</p>              
//               <p>words 1</p>
//               </div>
//             <div className="flex flex-col justify-center items-center">
//               <h3>company</h3>
//               <p>words 1</p>              
//               <p>words 1</p>              
//               <p>words 1</p>              
//               <p>words 1</p>
//               </div>
//             <div className="flex flex-col justify-center items-center">
//               <h3>company</h3>
//               <p>words 1</p>              
//               <p>words 1</p>              
//               <p>words 1</p>              
//               <p>words 1</p>
//               </div>
//             <div className="flex flex-col justify-center items-center">
//               <h3>company</h3>
//               <p>words 1</p>              
//               <p>words 1</p>              
//               <p>words 1</p>              
//               <p>words 1</p>
//               </div>
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//             <p className="flex justify-center items-center text-center">
//             &copy; 2022 Shop.co. All rights reserved.
//             </p>
//             <div>
//             <i className="fa-brands fa-cc-visa"></i>
//             <i className="fa-brands fa-cc-paypal"></i>
//             <i className="fa-brands fa-cc-mastercard"></i>
//             <i className="fa-brands fa-cc-discover"></i>
//             </div>
//         </div>
//       </div>

//     )
// }
