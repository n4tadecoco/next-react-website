import styles from 'styles/two-column.module.css'

export default function TwoColumn({ children }) {
    return (
        <div clssName={styles.flexContainer}>
            {children}
        </div>
    )
}

TwoColumn.Main = function twoColumnSidebar({ children }) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

TwoColumn.Sidebar = function twoColumnSidebar({ children }) {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}