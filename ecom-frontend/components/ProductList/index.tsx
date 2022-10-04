import ProductCard from "../ProductCard";
import styles from "./styles.module.scss";

const ProductList = () => {

  // add loader
  const data = [
    {
      id: 'dsfcvg',
      name: 'Product name 1',
      image: '',
      fakePrice: '350',
      price: "300"
    },
    {
      id: 'ohuht',
      name: 'Product name two',
      image: '',
      fakePrice: '3250',
      price: "3000"
    },
  ];
  return (
		<>
      <div className={`${styles.bdy} ${styles.productListPage}`}>
        <div className={styles.smallWrapper}>
          <div className={styles.filters}></div>
          <div className={styles.productsSection}>
            {data.map((product) => (
              <ProductCard product={product} key={product.id}></ProductCard>
            ))}
          </div>
        </div>
      </div>
		</>
	);
}

export default ProductList;