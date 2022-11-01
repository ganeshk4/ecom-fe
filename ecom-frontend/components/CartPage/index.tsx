import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/requests";
import styles from "./cart.module.scss";

const CartPage = () => {
	const [cartDetails, setCartDetails] = useState<any>(null);
	const [cartItems, setCartItems] = useState([]);
	const router = useRouter();
	
	const checkout = () => {
		router.push(`/cart/checkout`);
	}

	const getCartDetails = async () => {
		const {data: res} = await getRequest('/cart/details');
		if (res && res.isSuccess) {
			setCartDetails(res.data);
			setCartItems(res.data?.cartItems);
		}
  }

	useEffect(() => {
		getCartDetails();
	}, []);

	return (
		<>
			<div className={`${styles.cartPage}`}>
				<div className={styles.smallWrapper}>
					<div className={styles.cartWrapper}>
						<div className={styles.shoppingCart}>
							<span>Shopping Cart</span>
							<div className={styles.checkoutSection}>
								<div className={styles.checkoutTotal}>
									Total: &#8377;{cartDetails?.payableAmount}
								</div>
								<button onClick={checkout}>Checkout</button>
							</div>
						</div>

						<div className={styles.cartItems}>
							<div className={styles.priceText}>Price</div>
							{cartItems && cartItems.map((cartItem: any) => (
								<div className={styles.cartItem} key={cartItem.id}>
									<div className={styles.cartItemImg}>
										<img src={cartItem.imageUrl} />
									</div>
									<div className={styles.cartItemData}>
										<div className={styles.itemName}>
											{cartItem.name}
										</div>
										<div className={`${styles.inStock} ${styles.active}`}>
											In stock
										</div>
										<div className={styles.actions}>
											Qty
											<select>
												<option>{cartItem.qty}</option>
											</select>
										</div>
									</div>
									<div className={styles.cartItemPrice}>&#8377;{cartItem.sellingPriceAT}</div>
								</div>
							))}
						</div>

						<div className={`${styles.checkoutSection} ${styles.bottom}`}>
							<div className={styles.checkoutTotal}>Total: &#8377;{cartDetails?.payableAmount}</div>
							<button onClick={checkout}>Checkout</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartPage;
