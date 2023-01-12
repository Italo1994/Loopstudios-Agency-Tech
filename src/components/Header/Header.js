import styles from './Header.module.css';

import $ from 'jquery';

import Image from '../Image/Image.js';

import iconHamburger from '../../assets/images/icon-hamburger.svg';

function Header() {
	$(document).ready(() => {
		$("#buttonMob").click(() => {
			$("#menu").slideUp("slow", () => {});
		});
	});

	return(
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<a href="#" className={styles.logo}>loopstudios</a>
				<ul className={styles.menuNav}>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>About</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Careers</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Events</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Products</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Support</a></li>
				</ul>

				<button type="button" className={styles.buttonMobile} id="buttonMob">
					<Image src={iconHamburger} alt="button mobile" width={100} height={68} />
				</button>

				<ul className={styles.menuNavMobile} id="menu">
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>About</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Careers</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Events</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Products</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Support</a></li>
				</ul>
			</div>
		</header>
	);
}

export default Header;