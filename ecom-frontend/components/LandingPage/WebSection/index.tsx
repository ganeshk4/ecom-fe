import { Typography } from "@mui/material";
import styles from "./section.module.scss";

const WebSection = (props: any) => {
	return (
		<section className={styles.webSection}>
			<div className={styles.sectionHeader}>
				<Typography variant="h5" component="h5">
					{props.header}
				</Typography>
			</div>
			<div className={styles.sectionContent}>
        {props.children}
      </div>
		</section>
	);
};

export default WebSection;
