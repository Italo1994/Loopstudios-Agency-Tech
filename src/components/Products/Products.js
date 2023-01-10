import styles from './Products.module.css';

import Image from '../Image/Image.js';
import Button from '../Button/Button.js';
import Title from '../Title/Title.js';

import imgDeep from '../../assets/images/desktop/image-deep-earth.jpg';
import imgNight from '../../assets/images/desktop/image-night-arcade.jpg';
import imgSoccer from '../../assets/images/desktop/image-soccer-team.jpg';
import imgGrid from '../../assets/images/desktop/image-grid.jpg';
import imgFromUp from '../../assets/images/desktop/image-from-above.jpg';
import imgPocket from '../../assets/images/desktop/image-pocket-borealis.jpg';
import imgCuriosity from '../../assets/images/desktop/image-curiosity.jpg';
import imgFisheye from '../../assets/images/desktop/image-fisheye.jpg';

function Products() {
	return(
		<div className={styles.containerProducts}>
			<div>
				<a href="#" className={styles.link}>
					<Image src={imgDeep} alt="image deep earth" width={100} height={100} />
					<Title text="Deep Earth" />
				</a>
			</div>
			<div>
				<a href="#" className={styles.link}>
					<Image src={imgNight} alt="image night arcade" width={100} height={100} />
					<Title text="Night Arcade" />
				</a>
			</div>
			<div>
				<a href="https://www.youtube.com/watch?v=gg_o_SBAitw&t=449s&ab_channel=JavierNathaniel" target="_blank" className={styles.link}>
					<Image src={imgSoccer} alt="image soccer team" width={100} height={100} />
					<Title text="Soccer Team VR" />
				</a>
			</div>
			<div>
				<a href="#" className={styles.link}>
					<Image src={imgGrid} alt="image grid" width={100} height={100} />
					<Title text="The GRID" />
				</a>
			</div>
			<div>
				<a href="#" className={styles.link}>
					<Image src={imgFromUp} alt="image from up" width={100} height={100} />
					<Title text="From up above VR" />
				</a>
			</div>
			<div>
				<a href="#" className={styles.link}>
					<Image src={imgPocket} alt="image pocket borealis" width={100} height={100} />
					<Title text="Pocket Boreals" />
				</a>
			</div>
			<div>
				<a href="#" className={styles.link}>
					<Image src={imgCuriosity} alt="image curiosity" width={100} height={100} />
					<Title text="The Curiosity" />
				</a>
			</div>
			<div>
				<a href="#" className={styles.link}>
					<Image src={imgFisheye} alt="imagem section 1" width={100} height={100} />
					<Title text="Make it Fisheye" />
				</a>
			</div>
		</div>
	);
}

export default Products;