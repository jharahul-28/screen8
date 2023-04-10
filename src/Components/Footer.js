import styles from './Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerLeft}>
                <div className={styles.leftTop}>
                    <div className={styles.lTopCol}>
                        <ul>
                            <p>Our Solutions</p>
                            <li>Ad Traffic Validation</li>
                            <li>Brand Hygiene Protection</li>
                            <li>eCommerce Competitive Analytics </li>
                            <li>Mobile Identity Solution</li>
                        </ul>
                    </div>
                    <div className={styles.lTopCol}>
                        <p>Quick Links</p>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Careers</li>
                            <li>CSR</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className={styles.lTopCol}>
                        <p>Resources</p>
                        <ul>
                            <li>Blogs</li>
                            <li>Case Studies</li>
                            <li>Reports</li>
                            <li>Newsroom & Media</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.leftBottom}>
                    <img src="/footerImg.svg" alt="" />
                    <div>©2023 mFilterIt. All rights reserved</div>
                </div>
            </div>
            <div className={styles.footerRight}>
                <div className={styles.fRightTop}>
                    <img src="/footerSS1.svg" alt="" />
                    <img src="/footerSS2.svg" alt="" />
                    <img src="/footerSS3.svg" alt="" />
                    <img src="/footerSS4.svg" alt="" />
                    <img src="/footerSS5.svg" alt="" />
                </div>
                <div className={styles.fRightBottom}>
                    <p>Sign Up For Our Newsletter *</p>
                    <input type="text" placeholder='email Address'/>
                    <div className={styles.footerButton}>
                        <p>Subscribe</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;