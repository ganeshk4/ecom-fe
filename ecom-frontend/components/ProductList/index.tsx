import { useEffect, useState } from "react";
import { getRequest } from "../../utils/requests";
import Filters from "../Filters";
import ProductCard from "../ProductCard";
import styles from "./styles.module.scss";

const ProductList = () => {
  // add loader
  const [products, setProducts] = useState([]);
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [filters, setFilters] = useState({});

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

  const changedFilters = (filters: any) => {
    setFilters(JSON.parse(JSON.stringify(filters)));
  }
  
  const getProducts = async (params: any) => {
		let url = '/product/list';
    if (params) {
      url += `?search=${encodeURIComponent(JSON.stringify(params))}`;
    }
		const {data: res} = await getRequest(url);
		if (res && res.isSuccess) {
			setProducts(res.products);
		}
	}

  const getCategories = async () => {
		let url = '/category/all';
		const {data: res} = await getRequest(url);
		if (res && res.isSuccess) {
			setCategoryTypes(res.categoryTypes);
		}
	}

  useEffect(()=> {
    getCategories();
	}, []);

  useEffect(()=> {
		getProducts(filters);
	}, [filters]);
  
  
  return (
		<>
      <div className={`${styles.productListPage}`}>
        <div className={styles.smallWrapper}>
          <div className={styles.filters}>
            { filters && <Filters filters={filters} setFilters={changedFilters} categoryTypes={categoryTypes}></Filters>}
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