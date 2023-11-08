import Banner from 'components/Banner';
import Title from 'components/Title';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import videos from 'json/db.json';
import NotFound from 'pages/NotFound';

function Player() {
    const params = useParams();
    const video = videos.find((video) => {
        return video.id === Number(params.id)
    })
    
    if (!video) {
        return <NotFound />
    }
    
    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;