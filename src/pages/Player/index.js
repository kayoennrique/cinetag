import Banner from 'components/Banner';
import Title from 'components/Title';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useState, useEffect } from 'react';

function Player() {
    const [video, setVideo] = useState();
    const params = useParams();
  
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/kayoennrique/cinetag-api/videos?id=${params.id}`)
        .then(answers => answers.json())
        .then(data => {
            setVideo(...data)
        })
    }, [])
    
    if (!video) {
        return <NotFound />
    }
    
    return (
        <>
            <Banner image="player" />
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