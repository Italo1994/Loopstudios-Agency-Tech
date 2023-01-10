import styles from './Image.module.css';

function Image( {src, alt, width, height, position} ) {
	return(
		<div className={styles.containerImage}>
			<img src={src} alt={alt}  />
		</div>
	);
}

export default Image;