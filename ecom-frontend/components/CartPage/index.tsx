import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Nav from "../../common/Nav";
import SearchSection from "../../common/SearchSection";
import { getRequest } from "../../utils/requests";
import styles from "./cart.module.scss";

const CartPage = () => {
	const [cartDetails, setCartDetails] = useState<any>(null);
	const [cartItems, setCartItems] = useState([]);
	const router = useRouter();

	const checkout = () => {
		router.push(`/cart/checkout`);
	};

	const getCartDetails = async () => {
		const { data: res } = await getRequest("/cart/details");
		if (res && res.isSuccess) {
			setCartDetails(res.data);
			setCartItems(res.data?.cartItems);
		}
	};

	useEffect(() => {
		getCartDetails();
	}, []);

	return (
		<>
			<Header></Header>
			<Nav></Nav>
			<div className={`${styles.cartPage}`}>
				<div className={styles.smallWrapper}>
					<div className={styles.cartWrapper}>
						<div className={styles.shoppingCart}>
							<Typography variant="h4" component="span">
								Shopping Cart
							</Typography>
							<div className={styles.checkoutSection}>
								<div className={styles.checkoutTotal}>
									<Typography variant="h5" component="span">
										Total: &#8377;{cartDetails?.payableAmount}
									</Typography>
								</div>
								<Button onClick={checkout}>Checkout</Button>
							</div>
						</div>
						<div className={styles.cartItems}>
							<div className={styles.priceText}>
								<Typography variant="h5" component="span">
									Price
								</Typography>
							</div>
							{cartItems &&
								cartItems.map((cartItem: any) => (
									<div className={styles.cartItem} key={cartItem.id}>
										<div className={styles.cartItemImg}>
											<img src={cartItem.imageUrl} />
										</div>
										<div className={styles.cartItemData}>
											<div className={styles.itemName}>
												<Typography variant="h5" component="span">
													{cartItem.name}
												</Typography>
											</div>
											<div className={`${styles.inStock} ${styles.active}`}>
												<Typography variant="subtitle1" component="span">
													In stock
												</Typography>
											</div>
											<div className={styles.actions}>
												<Typography variant="subtitle1" component="span">
													Qty
												</Typography>
												<Button>+</Button>
												<FormControl>
													<InputLabel id="demo-simple-select-label">
														Age
													</InputLabel>
													<Select
														labelId="demo-simple-select-label"
														id="demo-simple-select"
														value={cartItem.qty}
														label="Age"
														onChange={() => {}}
													>
														<MenuItem value={10}>Ten</MenuItem>
														<MenuItem value={20}>Twenty</MenuItem>
														<MenuItem value={30}>Thirty</MenuItem>
													</Select>
												</FormControl>
												{/* <select>
													<option>{cartItem.qty}</option>
												</select> */}
												<Button>-</Button>
											</div>
										</div>
										<div className={styles.cartItemPrice}>
											<Typography variant="h5" component="span">
												&#8377;{cartItem.sellingPriceAT}
											</Typography>
										</div>
									</div>
								))}
						</div>

						<div className={`${styles.checkoutSection} ${styles.bottom}`}>
							<div className={styles.checkoutTotal}>
								<Typography variant="h5" component="span">
									Total: &#8377;{cartDetails?.payableAmount}
								</Typography>
							</div>
							<Button onClick={checkout}>Checkout</Button>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default CartPage;
