import styles from './Footer.module.css';
import stylesHeader from '../Header/Header.module.css';

import iconFacebook from '../../assets/images/icon-facebook.svg';
import iconTwitter from '../../assets/images/icon-twitter.svg';
import iconPinterest from '../../assets/images/icon-pinterest.svg';
import iconInstagram from '../../assets/images/icon-instagram.svg';

import Image from '../Image/Image.js';

function Footer() {
	return(
		<div className={styles.footerContainer}>
			<div className={styles.footerContent}>
				<div className={styles.footerMenuGrid}>
					<a href="#" className={stylesHeader.logo}>loopstudios</a>
					<ul className={styles.menuNav}>
						<li className={stylesHeader.menuItem}><a href="#" className={stylesHeader.menuLink}>About</a></li>
						<li className={stylesHeader.menuItem}><a href="#" className={stylesHeader.menuLink}>Careers</a></li>
						<li className={stylesHeader.menuItem}><a href="#" className={stylesHeader.menuLink}>Events</a></li>
						<li className={stylesHeader.menuItem}><a href="#" className={stylesHeader.menuLink}>Products</a></li>
						<li className={stylesHeader.menuItem}><a href="#" className={stylesHeader.menuLink}>Support</a></li>
					</ul>
				</div>
				<div className={styles.footerSocialGrid}>
					<ul className={styles.menuSocial}>
						<li className={stylesHeader.menuItem}><a href="#" className={stylesHeader.menuLink}> <Image src={iconFacebook} alt="icon facebook" width={100} height={68} /> </a></li>
						<li className={stylesHeader.menuItem}><a href="#" className={stylesHeader.menuLink}> <Image src={iconTwitter} alt="icon twitter" width={100} height={68} /> </a></li>
						<li className={stylesHeader.menuItem}><a href="#" className={stylesHeader.menuLink}> <Image src={iconPinterest} alt="icon pinterest" width={100} height={68} /> </a></li>
						<li className={stylesHeader.menuItem}><a href="#" className={stylesHeader.menuLink}> <Image src={iconInstagram} alt="icon instagram" width={100} height={68} /> </a></li>
					</ul>
					<p>&#169; 2023 loopstudios. All rights reserved.</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;