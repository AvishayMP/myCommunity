import { Container, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";
import Hero from "./Hero";
import PhotoGallery from "./PhotoGallery";
// import VideoCarousel from "./VideoCarusel";
import Carusel from "./Carusel/Carusel";

function Content() {
    return (
        <>
            <Hero />
            <h1 className="text-center">שיעורי הרב</h1>
            {/* <VideoCarousel /> */}
            <Carusel type="video" />
            <Carusel type="image" />
            <PhotoGallery />
            <Container>
                <Row className="">
                    <ContactForm />
                </Row>
            </Container>
        </>);
}

export default Content;