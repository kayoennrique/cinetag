import Favorites from "pages/Favorites";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "components/Head";
import Footer from "components/Footer";
import Container from "components/Container";
import FavoritesProvider from "context/Favorites";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Head />
            <Container>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/favorites" element={<Favorites />}>
                        </Route>
                    </Routes>
                </FavoritesProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;