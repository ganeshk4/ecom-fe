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
			<div className={styles.filterHeader}>Filter</div>
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
