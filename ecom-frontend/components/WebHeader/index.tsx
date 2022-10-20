import { useState } from "react";
import LoginModal from "../login";
import styles from "./header.module.scss";

const WebHeader = () => {

	const [open, setOpen] = useState(false);
	const [otp, setOtp] = useState(false);

	const login = () => {
		setOtp(false);
		setOpen(true);
	}
	const handleClose = () => {
		setOpen(false);
	}

	return (
		<>
			<div className={styles.header}>
				<div className={styles.cartPic}>Shopping Cart</div>
				<div className={styles.profilePic}>G</div>
				<div onClick={login} className={styles.loginCta}>
					Login
				</div>
			</div>
			<LoginModal open={open} setOpen={setOpen} />
		</>
	);
};

export default WebHeader;
