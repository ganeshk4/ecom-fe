import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/requests";
import Filter from "../Filter";
import styles from "./filters.module.scss";

const Filters = () => {
	const [categoryTypes, setCategoryTypes] = useState([]);
	const [filters, setFilters] = useState({});

	const getCategories = async () => {
		let url = '/category/all';
		const {data: res} = await getRequest(url);
		if (res && res.isSuccess) {
			setCategoryTypes(res.categoryTypes);
		}
	}

	const filterChanged = (checked: any, item: any) => {
		let newFilters: any = filters;
		if (checked) {
			if (!newFilters[item.categoryTypeId]) {
				newFilters[item.categoryTypeId] = {};
			}
			newFilters[item.categoryTypeId][item.id] = true;
		} else {
			delete newFilters[item.categoryTypeId][item.id];
		}
		setFilters(newFilters);
		console.log(filters);
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
					<Filter type={categoryType.type} list={categoryType.categories} changed={filterChanged}></Filter>
				</div>
			))}
		</div>
	);
};

export default Filters;
