import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Head.module.css';
import HeaderLink from "components/HeaderLink";

function Head() {
    return (
        <header className={styles.head}>
            <Link to="./">
                <img src={logo} alt="Cinetag Logo"></img>
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./Favorites">
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Head;