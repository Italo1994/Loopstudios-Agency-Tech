import styles from './Header.module.css';

function Header() {
	return(
		<header className={styles.headerContainer}>
			<a href="#" className={styles.logo}>loopstudios</a>
			<ul className={styles.menuNav}>
				<li className={styles.menuItem}><a href="#" className={styles.menuLink}>About</a></li>
				<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Careers</a></li>
				<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Events</a></li>
				<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Products</a></li>
				<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Support</a></li>
			</ul>
		</header>
	);
}

export default Header;