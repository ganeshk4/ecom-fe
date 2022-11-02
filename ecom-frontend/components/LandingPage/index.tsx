import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	Button,
	Menu,
	MenuItem,
	Link,
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
							<Link href="#" onClick={handleClick} className={styles.navLink}>categorytype<ExpandMoreIcon /></Link>
							<Link onClick={handleClick} className={styles.navLink}>Painting<ExpandMoreIcon /></Link>
							<Link onClick={handleClick} className={styles.navLink}>Drawing<ExpandMoreIcon /></Link>
							<Link onClick={handleClick} className={styles.navLink}>surface<ExpandMoreIcon /></Link>
							<Link className={styles.navLink}>brands<ExpandMoreIcon /></Link>
							<Link className={styles.navLink}>contact us</Link>
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
            	<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/51lndCdP7uL._SX679_.jpg?authuser=1" />
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
						<div className={styles.sectionHeader}><h2>Shop Top Categories</h2></div>
						<div className={styles.sectionContent}>
							<div className={styles.sectionCategory}>
								<img src="https://storage.cloud.google.com/myfirstprojecttestecom/productimages/51lndCdP7uL._SX679_.jpg?authuser=1"/>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
