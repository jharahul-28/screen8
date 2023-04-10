import styles from './Services.module.css';

const Services = () => {
    return (
        <div className={styles.serviceSec}>
            <p className={styles.serviceHeading}>Our Services</p>
            <div className={styles.serviceContent}>
                <div className={styles.individualServices}>
                    <img src="/services1.svg" alt="" />
                    <div className={styles.content}>
                        <div className={styles.serContentHeading}>eCommerce Competitive Analtics</div>
                        <div className={styles.serContentPara}>Map your brand to the eCommerce landscape to enhance market share with real-time market intelligence.</div>
                        <div className={styles.serReadButton}>Read More..</div>
                    </div>
                </div>

                <div className={styles.individualServices}>
                    <img src="/services2.svg" alt="" />
                    <div className={styles.content}>
                        <div className={styles.serContentHeading}>Brand Hygiene Protection</div>
                        <div className={styles.serContentPara}>Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues.</div>
                        <div className={styles.serReadButton}>Read More..</div>
                    </div>
                </div>

                
                <div className={styles.individualServices}>
                    <img src="/services3.svg" alt="" />
                    <div className={styles.content}>
                        <div className={styles.serContentHeading}>Mobile Identity Solution</div>
                        <div className={styles.serContentPara}>Seamless identity verification to eliminate risk and fraud at a single go with minimal user inpuat and reducing friction in identity validation</div>
                        <div className={styles.serReadButton}>Read More..</div>
                    </div>
                </div>

                <div className={styles.individualServices}>
                    <img src="/services4.svg" alt="" />
                    <div className={styles.content}>
                        <div className={styles.serContentHeading}>Ad Traffic Validation</div>
                        <div className={styles.serContentPara}>mFilterIt’s ad fraud detection solution provides deterministic ad-fraud detection & prevention for both App & Web campaigns and help advertisers save money with better ROI.</div>
                        <div className={styles.serReadButton}>Read More..</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;