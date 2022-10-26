import { useRouter } from 'next/router'
import styles from "./productcard.module.scss";
import Button from '@mui/material/Button';

const ProductCard = ({ product }: any) => {
  const router = useRouter();

  const showDetails = () => {
    router.push(`/products/${product.displayId}`)
  }
	return (
		<div className={styles.productcard}>
			<div className={styles.productImagePart}>
				{/* <div>{ product.image }</div> */}
			</div>
			<div className={styles.productDetailsPart}>
				<div onClick={showDetails} className={styles.name}>{product.name}</div>
				<div className={styles.category}>{product.category}</div>
				<div className={styles.ratings}>Ratings</div>
				<div className={styles.priceSection}>
					<div className={styles.price}>&#8377;{product.price}</div>
					<div className={styles.fakePrice}>&#8377;{product.displayPrice}</div>
					<div className={styles.discount}>{product.discount}%</div>
				</div>
				{product.description && product.description.length && (
					<div className={styles.details}>
						<ul>
							{product.description.map((detail: any, $index: number) => {
								return <li key={$index}>{detail}</li>;
							})}
						</ul>
					</div>
				)}
				<div className={styles.actions}>
					{product?.availableQty > 0 && (
						<>
							<Button variant="contained" className={styles.actionCta}> Add to cart</Button>
							<button className={styles.actionCta}> Buy now</button>
						</>
					)}
					{product?.availableQty == 0 && <div className={styles.outOfStock}>Out of Stock</div>}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
