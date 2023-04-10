import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src="/mFilterIt.svg" alt="" />
            </div>
            <div className={styles.pages}>
                <ul>
                    <li>Our Solution</li>
                    <li>Resources</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;