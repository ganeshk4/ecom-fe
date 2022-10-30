import { useEffect } from "react";
import { getRequest } from "../../utils/requests";
import styles from "./cart.module.scss";

const CartPage = ({ type, list, changed }: any) => {
	const checkout = () => {
		console.log("checkout");
	}

	const getCartDetails = async () => {
		const {data: res} = await getRequest('/cart/details');
		if (res && res.isSuccess) {
			// dispatch(setUser(res.user));
			// setOtp(false);
			// setOpen(false);
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
								<div className={styles.checkoutTotal}>Total: &#8377;2,248.00</div>
								<button onClick={checkout}>Checkout</button>
							</div>
						</div>
						<div className={styles.cartItems}>
							<div className={styles.priceText}>Price</div>
							<div className={styles.cartItem}>
								<div className={styles.cartItemImg}>
									<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/51lndCdP7uL._SX679_.jpg?authuser=1" />
								</div>
								<div className={styles.cartItemData}>
									<div className={styles.itemName}>Homwell Heavy Duty Stainless Steel 6 Pipe X 6 Feet (Blue) Economy Model with UV Pr…</div>	
									<div className={`${styles.inStock} ${styles.active}`}>In stock</div>	
									<div className={styles.actions}>
										Qty
										<select>
											<option>1</option>
										</select>
									</div>	
								</div>
								<div className={styles.cartItemPrice}>
									&#8377;2,248.00
								</div>
							</div>

							<div className={styles.cartItem}>
								<div className={styles.cartItemImg}>
									<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/Screenshot%202021-11-11%20at%205.49.31%20PM.png?authuser=1" />
								</div>
								<div className={styles.cartItemData}>
									<div className={styles.itemName}>Motul 300V 4T 15W50 Factory Line Synthetic Oils for Bikes</div>	
									<div className={`${styles.inStock} ${styles.inactive}`}>out of stock</div>	
									<div className={styles.actions}>
										Qty
										<select>
											<option>1</option>
										</select>
									</div>	
								</div>
								<div className={styles.cartItemPrice}>
									&#8377;2,248.00
								</div>
							</div>
						</div>

						<div className={`${styles.checkoutSection} ${styles.bottom}`}>
								<div className={styles.checkoutTotal}>Total: &#8377;2,248.00</div>
								<button onClick={checkout}>Checkout</button>
							</div>
					</div>
        </div>
      </div>
		</>
	);
};

export default CartPage;
