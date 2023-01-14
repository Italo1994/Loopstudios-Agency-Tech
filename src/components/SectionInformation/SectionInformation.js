import styles from './SectionInformation.module.css';

import Title from '../Title/Title.js';
import Button from '../Button/Button.js';

function SectionInformation({title, label}) {
	return(
		<div className={styles.sectionInformationContainer}>
			<h1>{title}</h1>
			<Button label={label} /> 
		</div>
	);
}

export default SectionInformation;