import styles from './Hero.module.css';

const Hero = () => {
    return(
        <div className={styles.heroSec}>
            <img src="/heroSVG.svg" alt="" />
            <div className={styles.content}>
                <p>We are the Superhero of the Digital Ad World</p>
                <p>We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!</p>
            </div>
        </div>
    )
}

export default Hero;