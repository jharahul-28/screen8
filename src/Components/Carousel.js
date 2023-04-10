import React from 'react';
import styles from './Carousel.module.css';

const Carousel = () => {
    return (
        <>
        <div className={styles.trustedByHeading}>Trusted by</div>
                    <div className={styles.carouselImage}>
                        <img src="/carousel1.svg" alt="" />
                        <img src="/carousel2.svg" alt="" />
                        <img src="/carousel3.svg" alt="" />
                    </div>

                    <div className={styles.carouselImage}>
                        <img src="/carousel4.svg" alt="" />
                        <img src="/carousel5.svg" alt="" />
                        <img src="/carousel6.svg" alt="" />
                        <img src="/carousel7.svg" alt="" />
                    </div>
        </>
    );
};

export default Carousel;