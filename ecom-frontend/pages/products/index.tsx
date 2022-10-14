import ProductList from "../../components/ProductList";
import WebHeader from "../../components/WebHeader";

const ProductListPage = () => {
	return (
		<>
			<div className="bdy">
				<WebHeader></WebHeader>
				<ProductList />
			</div>
		</>
	);
};

export default ProductListPage;
