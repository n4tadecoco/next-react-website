import styles from 'styles/hero.module.css'

export default function Hero({ title, subtitle, image0n = false}) {
    return (
        <div>
            <div className={styles.text}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            </div>
            {image0n && <figure> [画像] </figure>}
        </div>
    )
}