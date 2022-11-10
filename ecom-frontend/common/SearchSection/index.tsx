import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import styles from "./search.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchSection = () => {
	const search = () => {};
	const handleChange = () => {};

	return (
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
	);
};

export default SearchSection;
