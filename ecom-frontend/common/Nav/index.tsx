import {
	Menu,
	MenuItem,
	Typography,
	Link,
} from "@mui/material";
import styles from "./nav.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { selectState } from "../../store/store.slice";
import { useSelector } from "react-redux";
import { useState } from "react";

const Nav = () => {
	const state = useSelector(selectState);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
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
	);
};

export default Nav;
