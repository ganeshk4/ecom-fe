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
	OutlinedInput,
	styled,
	TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { selectState } from "../../store/store.slice";
import styles from "./landing.module.scss";
import { Carousel } from 'react-responsive-carousel';

const LandingPage = () => {
	const state = useSelector(selectState);

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
				<div className={styles.container}>
					<div className={styles.header}>
						<div className={styles.logo}>
							<img src="/logo.svg"></img>
						</div>
					</div>
					<div className={styles.searchSection}>
						<div className={styles.search}>
							<FormControl
								className={styles.textBg}
								fullWidth
								variant="outlined"
							>
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
								<Typography variant="h6" component="span">categorytype</Typography><ExpandMoreIcon />
							</Link>
							<Link onClick={handleClick} className={styles.navLink}>
								<Typography variant="h6" component="span">Painting</Typography><ExpandMoreIcon />
							</Link>
							<Link onClick={handleClick} className={styles.navLink}>
								<Typography variant="h6" component="span">Drawing</Typography><ExpandMoreIcon />
							</Link>
							<Link onClick={handleClick} className={styles.navLink}>
								<Typography variant="h6" component="span">surface</Typography><ExpandMoreIcon />
							</Link>
							<Link className={styles.navLink}>
								<Typography variant="h6" component="span">brands</Typography><ExpandMoreIcon />
							</Link>
							<Link className={styles.navLink}>
								<Typography variant="h6" component="span">contact us</Typography>
							</Link>
						</div>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>My account</MenuItem>
							<MenuItem onClick={handleClose}>Logout</MenuItem>
						</Menu>
					</div>
					<Carousel showStatus={false} showThumbs={false} showArrows={true} onChange={()=>{}} onClickItem={()=>{}} onClickThumb={()=>{}}>
            <div className={styles.carouselImg}>
            	<img src="/temp3.webp" />
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
							<Typography variant="h5" component="h5">Shop Top Categories</Typography>
						</div>
						<div className={styles.sectionContent}>
							<Grid container spacing={2}>
								<Grid item xs={4} md={2}>
									<div className={styles.sectionCategory}>
										<img src="/temp1.avif"/>
										<div className={styles.catname}>Brushes</div>
									</div>
								</Grid>
								<Grid item xs={4} md={2}>
									<div className={styles.sectionCategory}>
										<img src="/temp2.avif"/>
										<div className={styles.catname}>Brushes</div>
									</div>
								</Grid>
								<Grid item xs={4} md={2}>
									<div className={styles.sectionCategory}>
										<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/51lndCdP7uL._SX679_.jpg?authuser=1"/>
										<div className={styles.catname}>Brushes</div>
									</div>
								</Grid>
								<Grid item xs={4} md={2}>
								<div className={styles.sectionCategory}>
									<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/51lndCdP7uL._SX679_.jpg?authuser=1"/>
									<div className={styles.catname}>Brushes</div>
								</div>
								</Grid>
								<Grid item xs={4} md={2}>
									<div className={styles.sectionCategory}>
										<img src="/temp1.avif"/>
										<div className={styles.catname}>Brushes</div>
									</div>
								</Grid>
								<Grid item xs={4} md={2}>
									<div className={styles.sectionCategory}>
										<img src="/temp2.avif"/>
										<div className={styles.catname}>Brushes</div>
									</div>
								</Grid>
							</Grid>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
