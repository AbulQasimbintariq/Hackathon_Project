import styles from '../styles/ProductItem.module.css';

const ProductItem = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>${product.price}</p>
      {product.oldPrice && <p className={styles.oldPrice}>${product.oldPrice}</p>}
    </div>
  );
};

export default ProductItem;
