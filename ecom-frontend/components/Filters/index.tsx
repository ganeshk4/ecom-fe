import Typography from "@mui/material/Typography";
import { useState } from "react";
import Filter from "../Filter";
import styles from "./filters.module.scss";

const Filters = ({categoryTypes, filters, setFilters}: any) => {
	
	const filterChanged = (checked: any, item: any) => {
		let newFilters: any = filters;
		if (checked) {
			if (!newFilters[item.categoryTypeId]) {
				newFilters[item.categoryTypeId] = {};
			}
			newFilters[item.categoryTypeId][item.id] = true;
		} else {
			delete newFilters[item.categoryTypeId][item.id];
			if (!Object.keys(newFilters[item.categoryTypeId]).length) {
				delete newFilters[item.categoryTypeId];
			}
		}
		setFilters(newFilters);
	}

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
