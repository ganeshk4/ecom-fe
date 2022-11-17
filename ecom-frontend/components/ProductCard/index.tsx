import { useRouter } from 'next/router'
import styles from "./productcard.module.scss";
import Button from '@mui/material/Button';
import { postRequest } from '../../utils/requests';
import { Card, Typography } from '@mui/material';

const ProductCard = ({ product }: any) => {
  const router = useRouter();

  const showDetails = () => {
    router.push(`/products/${product.displayId}`)
  }

  const addToCart = async (productId: number) => {
    console.log("addToCArt");
		const {data: res} = await postRequest('/cart/add', {
			productId,
			qty: 1
		});
		if (res && res.isSuccess) {
			// dispatch(setUser(res.user));
			// setOtp(false);
			// setOpen(false);
		}
  }
	return (
		// <Card className={styles.productcard} variant="outlined">
			<div className={styles.productcardBody}>
				<div className={styles.productImagePart}>
					<img src={product.imageUrl} />
				</div>
				<div className={styles.productDetailsPart}>
					<div onClick={showDetails} className={styles.name}>
						<Typography component="span" variant="h5">{product.name}</Typography>
					</div>
					<div className={styles.category}>{product.category}</div>
					<div className={styles.ratings}>Ratings</div>
					<div className={styles.priceSection}>
						<div className={styles.price}>&#8377;{product.sellingPriceAT}</div>
						<div className={styles.fakePrice}>
							&#8377;{product.displayPrice}
						</div>
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
						{product?.availablity?.availableQty > 0 && (
							<>
								<Button
									variant="contained"
									onClick={() => addToCart(product.id)}
									className={styles.actionCta}
								>
									{" "}
									Add to cart
								</Button>
								{/* <button className={styles.actionCta}> Buy now</button> */}
							</>
						)}
						{product?.availablity?.availableQty == 0 && (
							<div className={styles.outOfStock}>Out of Stock</div>
						)}
					</div>
				</div>
			</div>
		// </Card>
	);
};

export default ProductCard;
