import Typography from "@mui/material/Typography";
import Filter from "../Filter";
import styles from "./filters.module.scss";

const Filters = () => {
	const categoryFilters = [
    "category1",
    "category2",
    "category3",
    "category4"
  ];

	return (
		<div className={styles.filterSection}>
			<div className={styles.filterHeader}>
				<Typography variant="h6" component="div">
					Filter
				</Typography>
			</div>
			<div className={styles.oneFilter}>
				<Filter type={"category"} list={categoryFilters}></Filter>
			</div>
			<div className={styles.oneFilter}>
				<Filter type={"category"} list={categoryFilters}></Filter>
			</div>
		</div>
	);
};

export default Filters;
