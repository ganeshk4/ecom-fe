import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	Button,
	Menu,
	Typography,
	MenuItem,
	Link,
	Grid,
	Box,
	Paper,
	OutlinedInput,
	styled,
	TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { selectState } from "../../store/store.slice";
import styles from "./landing.module.scss";
import { Carousel } from "react-responsive-carousel";

const LandingPage = () => {
	const state = useSelector(selectState);
	const [visible, setVisible] = useState(0);

	const handleChange = () => {};

	const search = () => {};

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<div className="bdy">
				<div className={styles.header}>
					<div className={styles.logo}>
						<img src="/logo.svg"></img>
					</div>
				</div>
				<div className={styles.searchSection}>
					<div className={styles.search}>
						<FormControl className={styles.textBg} fullWidth variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								search product
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type="text"
								//value=''
								inputProps={{
									className: styles.textColor,
								}}
								onChange={handleChange}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={search}
											edge="end"
										>
											<SearchIcon />
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
					</div>
				</div>
				<div className={styles.nav}>
					<div className={styles.navBar}>
						<Link href="#" onClick={handleClick} className={styles.navLink}>
							<Typography variant="h6" component="span">
								categorytype
							</Typography>
							<ExpandMoreIcon />
						</Link>
						<Link onClick={handleClick} className={styles.navLink}>
							<Typography variant="h6" component="span">
								Painting
							</Typography>
							<ExpandMoreIcon />
						</Link>
						<Link onClick={handleClick} className={styles.navLink}>
							<Typography variant="h6" component="span">
								Drawing
							</Typography>
							<ExpandMoreIcon />
						</Link>
						<Link onClick={handleClick} className={styles.navLink}>
							<Typography variant="h6" component="span">
								surface
							</Typography>
							<ExpandMoreIcon />
						</Link>
						<Link className={styles.navLink}>
							<Typography variant="h6" component="span">
								brands
							</Typography>
							<ExpandMoreIcon />
						</Link>
						<Link className={styles.navLink}>
							<Typography variant="h6" component="span">
								contact us
							</Typography>
						</Link>
					</div>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu>
				</div>
				<Carousel
					showStatus={false}
					showThumbs={false}
					showArrows={true}
					onChange={() => {}}
					onClickItem={() => {}}
					onClickThumb={() => {}}
				>
					<div className={styles.carouselImg}>
						<div className={styles.carousel1}>
							<div className={styles.carouselContent}>
								<div className={styles.carouselContentText}>
									<Grid container spacing={2}>
										<Grid item xs={4} md={12}>
											<Typography variant="h4" component="span">
												Paint your world with color
											</Typography>
										</Grid>
									</Grid>

									<Grid container spacing={2}>
										<Grid item xs={4} md={12}>
											<Button>Shop Now</Button>
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
				<section className={styles.webSection}>
					<div className={styles.sectionHeader}>
						<Typography variant="h5" component="h5">
							Shop Top Categories
						</Typography>
					</div>
					<div className={styles.sectionContent}>
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
					</div>
				</section>

				<section className={styles.webSection}>
					<div className={styles.sectionHeader}>
						<Typography variant="h5" component="h5">
							New Arrivals
						</Typography>
					</div>
					<div className={styles.sectionContent}>
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
																		<Typography
																			variant="body1"
																			component="span"
																		>
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
					</div>
				</section>

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
