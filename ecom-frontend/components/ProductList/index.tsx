import { useEffect, useState } from "react";
import { getRequest } from "../../utils/requests";
import Filters from "../Filters";
import ProductCard from "../ProductCard";
import styles from "./styles.module.scss";

const ProductList = () => {
  // add loader
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
		let url = '/product/list';
		const {data: res} = await getRequest(url);
		if (res && res.isSuccess) {
			setProducts(res.products);
		}
	}

  useEffect(()=> {
		getProducts();
	}, []);
  
  const data = [
    {
      id: 'dsfcvg',
      displayId: 'dsfcvg',
      name: 'Product name 1',
      category: "category",
      ratings: '',
      discount: 10,
      description: ['lorem ipsum', 'dolor sit amet','lorem ipsum dolor sit amet'],
      image: '',
      displayPrice: '350',
      price: "300",
      availableQty: 10
    },
    {
      id: 'ohuht',
      displayId: 'ohuht',
      name: 'Product name two Product name two Product name two',
      image: '',
      category: "category 34",
      ratings: '',
      discount: 12,
      description: ['lorem ipsum', 'dolor sit amet','lorem ipsum dolor sit amet', 'dolor sit amet','lorem ipsum dolor sit amet'],
      displayPrice: '3250',
      price: "3000",
      availableQty: 0
    },
  ];
  return (
		<>
      <div className={`${styles.productListPage}`}>
        <div className={styles.smallWrapper}>
          <div className={styles.filters}>
            <Filters></Filters>
          </div>
          <div className={styles.productsSection}>
            {products && products.length && products.map((product: any) => (
              <ProductCard product={product} key={product.id}></ProductCard>
            ))}
          </div>
        </div>
      </div>
		</>
	);
}

export default ProductList;