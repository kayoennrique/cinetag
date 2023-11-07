import Title from 'components/Title';
import styles from './Favorites.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';

function Favorites() {
    return (
        <>
            <Banner image='favorites' />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                <Card id='1' title='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
            </section>

        </>
    )
}

export default Favorites;