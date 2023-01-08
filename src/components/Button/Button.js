import styles from './Button.module.css';

function Button({label, onClick}) {
	return(
		<div className={styles.buttonContainer}>
			<button>{label}</button>
		</div>
	);
}

export default Button;