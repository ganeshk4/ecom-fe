import CartCheckoutPage from "../../components/CartCheckoutPage";
import WebHeader from "../../components/WebHeader";

const CartCheckout = () => {
	return (
		<>
			<div className="bdy">
				<WebHeader></WebHeader>
				<CartCheckoutPage />
			</div>
		</>
	);
};

export default CartCheckout;
