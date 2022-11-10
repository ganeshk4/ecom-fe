import {
	Button,
	Typography,
	Grid,
	Box,
	Paper,
} from "@mui/material";




import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./landing.module.scss";
import Header from "../../common/Header";
import SearchSection from "../../common/SearchSection";
import { useState } from "react";
import Nav from "../../common/Nav";
import CatCarousel from "./CatCarousel";
import WebSection from "./WebSection";

const LandingPage = () => {
	const [visible, setVisible] = useState(0);

	

	

	return (
		<>
			<div className="bdy">
				<Header></Header>
				<SearchSection></SearchSection>
				<Nav></Nav>
				<CatCarousel></CatCarousel>
				<WebSection header="Shop Top Categories">
					<Grid container spacing={2}>
						<Grid item xs={4} md={2}>
							<div className={styles.sectionCategory}>
								<img src="/temp1.avif" />
								<div className={styles.catname}>Brushes</div>
							</div>
						</Grid>
						<Grid item xs={4} md={2}>
							<div className={styles.sectionCategory}>
								<img src="/temp2.avif" />
								<div className={styles.catname}>Brushes</div>
							</div>
						</Grid>
						<Grid item xs={4} md={2}>
							<div className={styles.sectionCategory}>
								<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/51lndCdP7uL._SX679_.jpg?authuser=1" />
								<div className={styles.catname}>Brushes</div>
							</div>
						</Grid>
						<Grid item xs={4} md={2}>
							<div className={styles.sectionCategory}>
								<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/51lndCdP7uL._SX679_.jpg?authuser=1" />
								<div className={styles.catname}>Brushes</div>
							</div>
						</Grid>
						<Grid item xs={4} md={2}>
							<div className={styles.sectionCategory}>
								<img src="/temp1.avif" />
								<div className={styles.catname}>Brushes</div>
							</div>
						</Grid>
						<Grid item xs={4} md={2}>
							<div className={styles.sectionCategory}>
								<img src="/temp2.avif" />
								<div className={styles.catname}>Brushes</div>
							</div>
						</Grid>
					</Grid>
				</WebSection>

				<WebSection header="New Arrivals">
					<Grid container spacing={2}>
						<Grid item xs={0} md={3}>
							<div className={styles.newArrImg}>
								<img src="/temp1.avif" />
							</div>
						</Grid>
						<Grid item xs={0} md={9}>
							<Grid container spacing={2}>
								{[1, 2, 3, 4, 5, 6].map((num) => {
									return (
										<Grid item xs={0} md={4}>
											<Box>
												<Paper
													className={styles.productPaper}
													onMouseEnter={() => {
														setVisible(num);
													}}
													onMouseLeave={() => {
														setVisible(0);
													}}
												>
													<div className={styles.paperBody}>
														<div>
															<div className={styles.paperBodyImg}>
																<img src="/temp1.avif" />
															</div>
															<div>
																<div className={styles.paperBodyPrice}>
																	<Typography variant="h4" component="h4">
																		&#8377;200
																	</Typography>
																</div>
																<div className={styles.paperBodyDesc}>
																	<Typography variant="body1" component="span">
																		Fabriano Artistico Watercolour Paper 3+1
																		Bonus Packs (Traditional White)
																	</Typography>
																</div>
																{visible === num && (
																	<Button
																		fullWidth
																		className={styles.paperBodyBtn}
																	>
																		Add To Cart
																	</Button>
																)}
															</div>
														</div>
													</div>
												</Paper>
											</Box>
										</Grid>
									);
								})}
							</Grid>
						</Grid>
					</Grid>
				</WebSection>

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
			</div>
		</>
	);
};

export default LandingPage;
