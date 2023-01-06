import styles from './Section.module.css';

import Information from '../Information/Information.js';
import Image from '../Image/Image.js';

import imgInteractive from '../../assets/images/desktop/image-interactive.jpg';

function Section({titleInformation, textInformation}) {
	return(
		<section className={styles.sectionContainer}>
			<div className={styles.areaContent}>
				<Image src={imgInteractive} alt="imagem interactive" width={100} height={100} />
				<Information title={titleInformation} text={textInformation} />
			</div>
		</section>
	);
}

export default Section;