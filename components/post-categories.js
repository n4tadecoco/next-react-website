import styles from 'styles/post-categories.module.css'
import Link from 'next/link'

export default function PostCategories({ categories }) {
    return (
        <div className={styles.flexContainer}>
        <h3 className={styles.hesding}>
            <FontAwesomeIcon icon={faFolderOpen} />
            <span className="sr-only">Categories</span>
        </h3>
        <ul className={styles.list}>
            {categories.map(({ name, slug }) => (
                <li key={slug}>
                    <Link href={'/blog/category/${slug}'}>
                        <a>{name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    )
}