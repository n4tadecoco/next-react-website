import Link from 'next/Link'
import styles from 'styles/logo.module.css'

export default function Logo({ box0n = false }) {
    return (
        <Link href="/">
            <a className={box0n ? styles.box : styles.basic}>CUBE</a>
        </Link>
    )
}