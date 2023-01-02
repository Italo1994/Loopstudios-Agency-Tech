import styles from './Section.module.css';

import Information from '../Information/Information.js';
import Image from '../Image/Image.js';

function Section({titleInformation, textInformation}) {
	return(
		<section className={styles.sectionContainer}>
			<div className={styles.areaContent}>
				<Image src="../../assets/images/desktop/image-curiosity.jpg" alt="imagem section 1" width="100%" height="80%" />
				<Information title={titleInformation} text={textInformation} />
			</div>
		</section>
	);
}

export default Section;