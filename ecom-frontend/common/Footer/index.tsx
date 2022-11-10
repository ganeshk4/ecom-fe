import { Grid, Typography } from "@mui/material";
import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<section>
			<div className={styles.footerSection}>
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<Typography
							className={styles.footerHeader}
							variant="h5"
							component="h5"
						>
							Shop Category
						</Typography>
						<Typography
							className={styles.footerCategory}
							variant="subtitle1"
							component="div"
						>
							Painting
						</Typography>
						<Typography
							className={styles.footerCategory}
							variant="subtitle1"
							component="div"
						>
							Drawing
						</Typography>
						<Typography
							className={styles.footerCategory}
							variant="subtitle1"
							component="div"
						>
							Surfaces
						</Typography>
						<Typography
							className={styles.footerCategory}
							variant="subtitle1"
							component="div"
						>
							Brands
						</Typography>
						<Typography
							className={styles.footerCategory}
							variant="subtitle1"
							component="div"
						>
							Handmade
						</Typography>
						<Typography
							className={styles.footerCategory}
							variant="subtitle1"
							component="div"
						>
							Gold 1%
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography
							className={styles.footerHeader}
							variant="h5"
							component="h5"
						>
							Quick Links
						</Typography>
						<Typography
							className={styles.footerCategory}
							variant="subtitle1"
							component="div"
						>
							Privacy Policy
						</Typography>
						<Typography
							className={styles.footerCategory}
							variant="subtitle1"
							component="div"
						>
							Shipping
						</Typography>
						<Typography
							className={styles.footerCategory}
							variant="subtitle1"
							component="div"
						>
							Refund policy
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography
							className={styles.footerHeader}
							variant="h5"
							component="h5"
						>
							Contact Us
						</Typography>
						<Typography
							className={styles.footerCategory}
							variant="subtitle1"
							component="div"
						>
							contact@
						</Typography>
					</Grid>
				</Grid>
			</div>
		</section>
	);
};

export default Footer;
