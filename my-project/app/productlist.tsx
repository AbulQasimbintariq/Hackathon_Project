import styles from '../styles/ProductList.module.css';
import ProductItem from './productitem';

const products = [
  { id: 1, name: 'Gradient Graphic T-Shirt', price: 145, image: '/images/product1.jpg', oldPrice: null },
  { id: 2, name: 'Polo with Tipping Details', price: 180, image: '/images/product2.jpg', oldPrice: 242 },
  { id: 3, name: 'Black Striped T-Shirt', price: 120, image: '/images/product3.jpg', oldPrice: 150 },
  // Add more products
];

const ProductList = () => {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
