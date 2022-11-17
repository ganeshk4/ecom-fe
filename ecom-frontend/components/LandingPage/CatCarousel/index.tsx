import {
	Button,
	Typography,
	Grid,
} from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./crs.module.scss";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";

const CatCarousel = () => {
	const router = useRouter();

	return (
		<Carousel
			showStatus={false}
			showThumbs={false}
			showArrows={true}
			interval={5000}
			autoPlay={true}
			infiniteLoop={true}
			onChange={() => {}}
			onClickItem={() => {}}
			onClickThumb={() => {}}
		>
			<div className={styles.carouselImg}>
				<div className={styles.carousel1}>
					<div className={styles.carouselContent}>
						<div className={styles.carouselContentText}>
							<Grid container spacing={2}>
								<Grid item xs={12} md={12}>
									<Typography variant="h4" component="span">
										Paint your world with color
									</Typography>
								</Grid>
							</Grid>

							<Grid container spacing={2}>
								<Grid item xs={12} md={12}>
									<Button
										onClick={() => {
											router.push("/products");
										}}
									>
										Shop Now
									</Button>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.carouselImg}>
				<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/51lndCdP7uL._SX679_.jpg?authuser=1" />
			</div>
			<div className={styles.carouselImg}>
				<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/51lndCdP7uL._SX679_.jpg?authuser=1" />
			</div>
			<div className={styles.carouselImg}>
				<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/51lndCdP7uL._SX679_.jpg?authuser=1" />
			</div>
		</Carousel>
	);
};

export default CatCarousel;
