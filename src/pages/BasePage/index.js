import Container from "components/Container";
import Footer from "components/Footer";
import Head from "components/Head";
import FavoritesProvider from "context/Favorites";
import { Outlet } from "react-router-dom";

function BasePage() {
    return(
        <main>
            <Head />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    )
}

export default BasePage;