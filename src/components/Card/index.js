import { useFavoriteContext } from 'context/Favorites';
import styles from './Card.module.css';
import favoriteIcon from './favorite.png';
import unfavoriteIcon from './unfavorite.png';

function Card({ id, title, cover }) {
    console.log(id, title, cover)
    const { favorite, addFavoriter } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? favoriteIcon : unfavoriteIcon;
    return (
        <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover} />
            <h2>{title}</h2>
            <img src={icon}
                alt="Favoritar filme"
                className={styles.favorite}
                onClick={() => {
                    addFavoriter({ id, title, cover })
                }} />
        </div>

    )
}

export default Card;