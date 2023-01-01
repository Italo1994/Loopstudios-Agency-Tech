import styles from './Banner.module.css';

function Banner() {
	return(
		<div className={styles.capa}>
			<div className={styles.bannerContainer}>
				<h1>Immersive Experiences That Deliver</h1>
			</div>
		</div>
	);
}

export default Banner;