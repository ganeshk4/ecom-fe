import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/requests";
import Filter from "../Filter";
import styles from "./filters.module.scss";

const Filters = () => {
	const [categoryTypes, setCategoryTypes] = useState([]);
	const categoryFilters = [
    "category1",
    "category2",
    "category3",
    "category4"
  ];

	const getCategories = async () => {
		const {data: res} = await getRequest('/category/all');
		if (res && res.isSuccess) {
			console.log(res.categoryTypes);
			setCategoryTypes(res.categoryTypes);
		}
	}

	useEffect(()=> {
		getCategories();
	}, []);

	return (
		<div className={styles.filterSection}>
			<div className={styles.filterHeader}>
				<Typography variant="h6" component="div">
					Filter
				</Typography>
			</div>
			{categoryTypes.map((categoryType: any) => (
				<div className={styles.oneFilter} key={categoryType.id}>
					<Filter type={categoryType.type} list={categoryType.categories}></Filter>
				</div>
			))}
		</div>
	);
};

export default Filters;
