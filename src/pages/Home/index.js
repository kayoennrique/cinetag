import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import styles from './Home.module.css';
import { useState } from "react";
import { useEffect } from "react";

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/kayoennrique/cinetag-api/videos')
            .then(answers => answers.json())
            .then(data => {
                setVideos(data)
            })
    }, [])
    return (
        <>
            <Banner image="home" />
            <Title>
                <h1>Um lugar para guadar seus vídeos e filmes!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Home;