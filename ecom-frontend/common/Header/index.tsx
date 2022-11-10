import styles from "./header.module.scss";

const Header = () => {

  return (
    <div className={styles.header}>
			<div className={styles.logo}>
				<img src="/logo.svg"></img>
			</div>
		</div>
  )
}

export default Header;


