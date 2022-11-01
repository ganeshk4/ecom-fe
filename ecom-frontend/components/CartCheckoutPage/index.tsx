import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectState } from "../../store/store.slice";
import { getRequest, postRequest } from "../../utils/requests";
import styles from "./checkout.module.scss";

const CartCheckoutPage = () => {
	const [cartDetails, setCartDetails] = useState<any>(null);
	const [cartItems, setCartItems] = useState([]);
	const [scriptLoaded, setScriptLoaded] = useState(false);
	const state = useSelector(selectState);
	const { user } = state;

	const router = useRouter();
	
	const checkout = () => {
		router.push(`/cart/checkout`);
	}

	const pay = async () => {
		console.log("pay")
		const {data: res} = await getRequest('/cart/startcheckout');
		if (res && res.isSuccess) {
			console.log(res);
			const options = 
			{
				"key": process.env.RAZORPAY_KEY,
				"name": "Ganesh test payment",
				"description": "Test Transaction",
				"order_id": res.razorpay_order_id ,
				"handler": function (response: any){
					postRequest('/cart/verifyPayment', response);
				},
				"prefill": {
						"name": `${user.firstName} ${user.lastName}`,
						"email": `${user.email ? user.email : 'ganeshk4@gmail.com'}`,
						"contact": `${user.mobile}`
				},
				"notes": {
						"address": "user addres"
				},
				"theme": {
						"color": "#3399cc"
				}
			};

			const rzp1 = new (window as any).Razorpay(options);
			rzp1.open();
			// setCartDetails(res.data);
			// setCartItems(res.data?.cartItems);
		}
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
			<Script
				src="https://checkout.razorpay.com/v1/checkout.js"
				onLoad={() => {
					setScriptLoaded(true);
				}}
			/>
			<div className={`${styles.cartPage}`}>
				{scriptLoaded && cartDetails && (
					<div className={styles.smallWrapper}>
						<>Update Address</>
						<div>
							&#8377;{cartDetails?.payableAmount}
							<button onClick={pay}>Pay</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default CartCheckoutPage;
