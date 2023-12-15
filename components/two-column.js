import styles from 'styles/two-column.module.css'

export function TwoColumn({ children }) {
    return (
        <div clssName={styles.flexContainer}>
            {children}
        </div>
    )
}

export function twoColumnSidebar({ children }) {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}