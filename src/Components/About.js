import styles from './About.module.css';

const About= () => {
    return (
        <>
        <p className={styles.aboutHeading}>Who we are</p>
        <div className={styles.about}>
            <div className={styles.content}>
                <p>We are the essential tool in a digital marketer’s handbag. We are on a mission to create trust, uphold integrity, drive growth & value across the digital ecosystem. We empower our customers with a holistic view of their respective journeys’ in the digital ecosystem by providing them with accurate real-time data that helps them understand their returns on their digital investments.</p>
                <div className={styles.aboutButton}><p>About Us</p></div>
            </div>
            <div className={styles.aboutPic}>
                <div className={styles.picBox}>
                    <img src="/About1.svg" alt="" />
                    <div className={styles.picSubscript}>Power of AI/ML</div>
                </div>

                <div className={styles.picBox}>
                    <img src="/About2.svg" alt="" />
                    <div className={styles.picSubscript}>Future Ready Tech</div>
                </div>

                <div className={styles.picBox}>
                    <img src="/About3.svg" alt="" />
                    <div className={styles.picSubscript}>Real-Time Tracking</div>
                </div>

                <div className={styles.picBox}>
                    <img src="/About4.svg" alt="" />
                    <div className={styles.picSubscript}>Seamless Integration</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;