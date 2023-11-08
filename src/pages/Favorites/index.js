import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import { useFavoriteContext } from 'context/Favorites';
import styles from './Favorites.module.css';

function Favorites() {
    const { favorite } = useFavoriteContext();
    return (
        <>
            <Banner image='favorites' />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                {favorite.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favorites;