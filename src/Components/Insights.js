import styles from './Insights.module.css';

const Insights = () => {
    return (
        <>
            <div className={styles.insightsHeading}>
                <p>Insightful Reads - </p>
                <p className={styles.headingColor}>mFilterIt</p>
            </div>
            <div className={styles.insightsPictures}>
                <div>
                    <img src="/Insights1.svg" alt="" />
                    <div className={styles.imageDesc}>Know The Unknown Cause Behind Your Abnormally High Installs</div>
                    <div className={styles.images}></div>
                </div>

                <div className={styles.images}>
                    <img src="/Insights2.svg" alt="" />
                    <div className={styles.imageDesc}>Reseller Fraud Is Costing You More Than Just Your Ad Budget - Know Why?</div>
                </div>

                <div className={styles.images}>
                    <img src="/Insights3.svg" alt="" />
                    <div className={styles.imageDesc}>Why Creative Compliance Must Be a Necessity Not A Choice For Your Brand?</div>
                </div>

                <div className={styles.images}>
                    <img src="/Insights4.svg" alt="" />
                    <div className={styles.imageDesc}>Know How Your Brand is Under Threat Due to Incent Campaigns</div>
                </div>
            </div>
        </>
    );
}

export default Insights;