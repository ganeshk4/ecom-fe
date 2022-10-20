import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { postRequest } from "../../utils/requests";
import styles from "./login.module.scss";

const LoginModal = (props: any) => {
	const { open, setOpen} = props;
	const [otp, setOtp] = useState(false);
	const [otpField, setOtpField] = useState('');
	const [mobile, setMobile] = useState('');

	const handleClose = () => {
		setOpen(false);
	}

	const createLogin = async() => {
		const mobile = (document.querySelector('#mobile') as HTMLInputElement)?.value;
		const {data: res} = await postRequest('/login', {
			mobile
		});
		if (res && res.isSuccess) {
			setOtp(true);
		}
	}

	const verifyOtp = async() => {
		const otp = (document.querySelector('#otp') as HTMLInputElement)?.value;
		const {data: res} = await postRequest('/verifyOtp', {
			otp
		});
		if (res && res.isSuccess) {
			setOtp(false);
			setOpen(false);
		}
	}

	const mobileChange = (event: SyntheticEvent) => {
		const val = (event.target as HTMLInputElement).value;
		setMobile(val);
	}
	const otpChange = (event: SyntheticEvent) => {
		const val = (event.target as HTMLInputElement).value;
		setOtpField(val);
	}

	return (
		<>
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
								onChange={otpChange}
								value={otpField}
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
								onChange={mobileChange}
								value={mobile}
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

export default LoginModal;
