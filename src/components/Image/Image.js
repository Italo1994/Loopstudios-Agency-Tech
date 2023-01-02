import styles from './Image.module.css';

function Image( {src, alt, width, height} ) {
	return(
		<div className={styles.containerImage}>
			<img src={src} alt={alt} width={width} height={height} />
		</div>
	);
}

export default Image;