import styles from './NumberSpeak.module.css'

const NumberSpeak = () => {
    return (
        <>
            <div className={styles.numberHeading}>
                <p className={styles.nHHeading}>Numbers speak</p>
                <p className={styles.nHHeading}>about us!</p>
            </div>
            <div className={styles.content}>
                <div className={styles.contentGrid}>
                    <div className={styles.individualNumber}>
                        <div className={styles.number}>1500+</div>
                        <div className={styles.numberDescription}>eCommerce Websites Tracked</div>
                    </div>

                    <div className={styles.individualNumber}>
                        <div className={styles.number}>100 K+</div>
                        <div className={styles.numberDescription}>Infringement Instances Identified</div>
                    </div>

                    <div className={styles.individualNumber}>
                        <div className={styles.number}>100 K+</div>
                        <div className={styles.numberDescription}>Brands Analyzed</div>
                    </div>

                    <div className={styles.individualNumber}>
                        <div className={styles.number}>1 B+</div>
                        <div className={styles.numberDescription}>Video Frames Analyzed</div>
                    </div>

                    <div className={styles.individualNumber}>
                        <div className={styles.number}>3.5 B+</div>
                        <div className={styles.numberDescription}>Unique Device Coverage</div>
                    </div>

                    <div className={styles.individualNumber}>
                        <div className={styles.number}>$400 M+</div>
                        <div className={styles.numberDescription}>Saved for clients</div>
                    </div>
                </div>
                <img src="/numberSVG.svg" alt="" srcset="" />
            </div>
        </>

    );
}

export default NumberSpeak;