import { useState } from "react";
import { useSelector } from "react-redux";
import { selectState } from "../../store/store.slice";
import LoginModal from "../../common/login";
import styles from "./header.module.scss";
import { Grid, Typography, Link } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
	const state = useSelector(selectState);
	const { user } = state;
	const [open, setOpen] = useState(false);

	const login = () => {
		setOpen(true);
	};

	return (
		<>
			<div className={styles.header}>
				<Grid container>
					<Grid item md={2}>
						<Link href="/">
							<div className={styles.logo}>
								<img src="/logo.svg"></img>
							</div>
						</Link>
					</Grid>
					<Grid item md={8}></Grid>
					<Grid item md={2}>
						<div className={styles.loginCart}>
							<div className={styles.loginContainer}>
								{user && user.id ? (
									<div
										className={styles.profilePic}
									>{`${user?.firstName.substring(
										0,
										1
									)}${user?.lastName.substring(0, 1)}`}</div>
								) : (
									<Typography className={styles.loginCta} onClick={login}>
										Login
									</Typography>
								)}
							</div>
							<div className={styles.cartLnk}>
								<Link className={styles.cartPic} href="/cart">
									<div className={styles.cartCount}>
										<Typography variant="subtitle2" component="div">
											1
										</Typography>
									</div>
									<ShoppingCartOutlinedIcon fontSize="large" />
								</Link>
							</div>
						</div>
					</Grid>
				</Grid>
			</div>
			<LoginModal open={open} setOpen={setOpen} />
		</>
	);
};

export default Header;
