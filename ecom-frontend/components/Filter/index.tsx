import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./filter.module.scss";

const Filter = ({ type, list, changed }: any) => {
	const checkBoxChanged = (checked: any, item: any) => {
		changed(checked, item);
	};
	return (
		<>
			<Accordion expanded={true}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>{type}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormGroup>
						{list.map((item: any) => (
							<FormControlLabel
								key={item.id}
								control={
									<Checkbox
										onChange={(event) =>
											checkBoxChanged(event.target.checked, item)
										}
									/>
								}
								label={item.category}
							/>
						))}
					</FormGroup>
				</AccordionDetails>
			</Accordion>
			{/* <div className={styles.catHeading}>{type}</div> */}
			{/* {list.map((item: any) => (
					<div key={item.id}>
						
						{
							<div className={styles.catCheckbox}>
								<input id={`id${item.category}${item.id}`} type="checkbox" onChange={(event)=> checkBoxChanged(event.target.checked, item)}/>
								<label htmlFor={`id${item.category}${item.id}`}>{item.category}</label>
							</div>
						}
					</div>
				))} */}
		</>
	);
};

export default Filter;
