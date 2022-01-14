import styles from "./presentCard.module.css";

export function PresentCard() {
    return (
        <div className={styles.card}>
            <p className={styles.cardTitle}>Плед</p>
            <p className={styles.txt}>1700 руб.</p>
            <a href="https://www.ikea.com/ru/ru/p/ingabritta-igabritta-pled-bledno-rozovyy-50374068/" target="_blanc" className={styles.txtLink}>Посмотрите на сайте</a>
        </div>
    )
}

export default PresentCard;