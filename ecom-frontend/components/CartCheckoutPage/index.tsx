import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/requests";
import styles from "./checkout.module.scss";

const CartCheckoutPage = () => {
	const [cartDetails, setCartDetails] = useState<any>(null);
	const [cartItems, setCartItems] = useState([]);
	const router = useRouter();
	
	const checkout = () => {
		router.push(`/cart/checkout`);
	}

	const pay = () => {
		console.log("pay")
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
					<>Update Address</>
					<div>
						&#8377;{cartDetails?.payableAmount}
						<button onClick={pay}>Pay</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartCheckoutPage;
