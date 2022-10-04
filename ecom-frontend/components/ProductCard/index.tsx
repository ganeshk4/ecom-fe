import styles from "./productcard.module.scss";

const ProductCard = ({ product }: any) => {
	return (
		<div className={styles.productcard }>
      <div className={styles.productImagePart}>
        {/* <div>{ product.image }</div> */}
      </div>
      <div className={styles.productDetailsPart}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.category}>{product.name}</div>
        <div className={styles.ratings}>Ratings</div>
        <div className={styles.priceSection}>
          <div className={styles.price}>&#8377;{product.price}</div>
          <div className={styles.fakePrice}>&#8377;{product.fakePrice}</div>
          <div className={styles.discount}>10%</div>
        </div>
        <div className={styles.details}>
          <ul>
            <li>lorem ipsum</li>
            <li>dolor sit amet</li>
            <li>lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
		</div>
	);
};

export default ProductCard;
