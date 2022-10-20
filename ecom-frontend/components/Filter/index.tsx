import styles from "./filter.module.scss";

const Filter = ({ type, list, changed }: any) => {
	return (
		<>
			<div className={styles.catHeading}>{type}</div>
				{list.map((item: any) => (
					<div key={item}>
						{
							<div className={styles.catCheckbox}>
								<input id={`id${item}`} type="checkbox" />
								<label htmlFor={`id${item}`}>{item}</label>
							</div>
						}
					</div>
				))}
		</>
	);
};

export default Filter;
