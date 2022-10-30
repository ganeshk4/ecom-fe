import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectState } from "../../store/store.slice";
import LoginModal from "../login";
import styles from "./header.module.scss";

const WebHeader = () => {
	const state = useSelector(selectState);
	const { user } = state;
	const [open, setOpen] = useState(false);

	const login = () => {
		setOpen(true);
	};

	return (
		<>
			<div className={styles.header}>
				<div className={styles.cartPic}>
					<Link href="/cart">Shopping Cart</Link>
				</div>
				{user && user.id ? (
					<div className={styles.profilePic}>{`${user?.firstName.substring(0,1)}${user?.lastName.substring(0,1)}`}</div>
				) : (
					<div onClick={login} className={styles.loginCta}>
						Login
					</div>
				)}
			</div>
			<LoginModal open={open} setOpen={setOpen} />
		</>
	);
};

export default WebHeader;
