import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { postRequest } from "../../utils/requests";
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
	const createLogin = async() => {
		const mobile = document.querySelector('#mobile')?.value;
		const {data: res} = await postRequest('/login', {
			mobile
		});
		if (res && res.isSuccess) {
			setOtp(true);
		}
	}
	const verifyOtp = async() => {
		const otp = document.querySelector('#otp')?.value;
		const {data: res} = await postRequest('/verifyOtp', {
			otp
		});
		if (res && res.isSuccess) {
			setOtp(false);
			setOpen(false);
		}
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
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Login</DialogTitle>
				<DialogContent>
					{otp ? (
						<div>
							<DialogContentText>Enter OTP to verify.</DialogContentText>
							<TextField
								autoFocus
								margin="dense"
								id="otp"
								label="Otp"
								type="text"
								fullWidth
								variant="standard"
							/>
						</div>
					) : (
						<div>
							<DialogContentText>Please login to continue.</DialogContentText>
							<TextField
								autoFocus
								margin="dense"
								id="mobile"
								label="Mobile number"
								type="text"
								fullWidth
								variant="standard"
							/>
						</div>
					)}
				</DialogContent>
				<DialogActions>
					{otp ? (
						<Button onClick={verifyOtp}>Verify</Button>
					) : (
						<Button onClick={createLogin}>Login</Button>
					)}
				</DialogActions>
			</Dialog>
		</>
	);
};

export default WebHeader;
