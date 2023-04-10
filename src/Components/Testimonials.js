import styles from './Testimonials.module.css';

const Testimonials = () => {
    return (
        <>
            <div className={styles.testimonialsHeading}>
                <div className={styles.leftHeading}>Testimonials</div>
                <div className={styles.middleBorder}></div>
                <div className={styles.testimonialsContent}>
                    <div>What recruiters have to</div>
                    <div className={styles.lowerContent}>
                        <span>say about </span>
                        <p> mFilterIt</p>
                    </div>
                </div>
            </div>

            <div className={styles.comments}>
                <div className={styles.individual}>
                    <div className={styles.credential}>
                        <div className={styles.company}>
                            <img src="./testimonial1.svg" alt="" />
                        </div>
                        <div className={styles.namePost}>
                            <div className={styles.name}>Hamad Malik</div>
                            <div className={styles.post}>CMO</div>
                        </div>
                    </div>
                    <div className={styles.comment}>We started working with mFilterlt and almost instantly saw value is subscribing to the service as it helped us challenge and optimize traffic sources, weed out under performing partners and scale with confidence leading to marketing budget optimization.</div>
                </div>

                <div className={styles.individual}>
                    <div className={styles.credential}>
                        <div className={styles.company}>
                            <img src="./testimonial2.svg" alt="" />
                        </div>
                        <div className={styles.namePost}>
                            <div className={styles.name}>Haris Khan</div>
                            <div className={styles.post}>Head Acquisition</div>
                        </div>
                    </div>
                    <div className={styles.comment}>Ad-fraud is a challenge with every ad network - Careem works closely with partners to control the fraud and improve the traffic quality using mFilterIt fraud detection tool. The tool categorically identifies the type of fraud and helps understand real value additional by ad-network.</div>
                </div>

                <div className={styles.individual}>
                    <div className={styles.credential}>
                        <div className={styles.company}>
                            <img src="./testimonial3.svg" alt="" />
                        </div>
                        <div className={styles.namePost}>
                            <div className={styles.name}>Ganesh Sonawane</div>
                            <div className={styles.post}>Sr. Digital Manager</div>
                        </div>
                    </div>
                    <div className={styles.comment}>mFilterit have been a fantastic partner in not only helping us identify fraud sources but also optimize and identify where we can scale our investments. The team at mFilterlt have consistently delivered performance and have extended the support with respect to managing our partners.</div>
                </div>

                <div className={styles.individual}>
                    <div className={styles.credential}>
                        <div className={styles.company}>
                            <img src="./testimonial4.svg" alt="" />
                        </div>
                        <div className={styles.namePost}>
                            <div className={styles.name}>Parth Desai </div>
                            <div className={styles.post}>Sr. Manager</div>
                        </div>
                    </div>
                    <div className={styles.comment}>With the support of mFilterlt, we were able to improve the efficiency of our performance marketing spends and optimize our call centre bandwidth basis the quality of the lead. The detailed transactional reporting provided by mFilterlt helped us deliver outstanding business results.</div>
                </div>
            </div>
            <div className={styles.tButton}>
                <p>View More</p>
            </div>
        </>
    );
};

export default Testimonials;