import styles from './NotFound.module.css';
import erro404 from 'assets/erro_404.png'

function NotFound() {
    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>

                <h1 className={styles.title}>
                    Oops! Page not found.
                </h1>

                <p className={styles.paragraph}>
                    Are you sure this is what you were looking for?
                </p>

                <p className={styles.paragraph}>
                    Wait a few moments and reload the page, or return to the home page.
                </p>

                <img
                    className={styles.dogPicture}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className={styles.blankSpace}></div>
        </>

    )
}

export default NotFound;