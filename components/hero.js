import styles from 'styles/hero.module.css'

export default function Hero({ title, subtitle, image0n = false}) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            </div>
            {image0n && (
            <figure className={styles.image}>
                <Image src={cube} alt="" layout="responsive"
                sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
                priority
                placeholder="blur"
                />
            </figure>
            )}
        </div>
    )
}