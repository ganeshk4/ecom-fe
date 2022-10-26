import styles from "./filter.module.scss";

const Filter = ({ type, list, changed }: any) => {
	const checkBoxChanged = (checked: any, item: any) => {
		changed(checked, item);
	}
	return (
		<>
			<div className={styles.catHeading}>{type}</div>
				{list.map((item: any) => (
					<div key={item.id}>
						{/* { console.log(item) } */}
						{
							<div className={styles.catCheckbox}>
								<input id={`id${item.category}${item.id}`} type="checkbox" onChange={(event)=> checkBoxChanged(event.target.checked, item)}/>
								<label htmlFor={`id${item.category}${item.id}`}>{item.category}</label>
							</div>
						}
					</div>
				))}
		</>
	);
};

export default Filter;
