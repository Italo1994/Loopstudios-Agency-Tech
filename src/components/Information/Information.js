import styles from './Information.module.css';

function Information({title, text}) {
	return(
		<div className={styles.containerInformation}>
			<h2 className={styles.title}>{title}s</h2>
			<p className={styles.paragraph}>
				Founded in 2011, Loopstudios has been producing world-class 
				virtual reality projects for some of the best companies around the 
				globe. Our award-winning creations have transformed
				businesses through digital experiences that bind to their brand.
			</p>
		</div>
	);
}

export default Information;