import { Container, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";
import Hero from "./Hero";
// import PhotoGallery from "./PhotoGallery";
// import VideoCarousel from "./VideoCarusel";
import Carusel from "./Carusel/Carusel";

function Content() {
  return (
    <>
      <Hero />
      {/* <h1 className="text-center">שיעורי הרב</h1> */}
      {/* <VideoCarousel /> */}
      <Carusel
        type="video"
        arr={[
          "https://www.youtube.com/embed/Vc4tb44NAGI",
          "https://www.youtube.com/embed/Vc4tb44NAGI",
          "https://www.youtube.com/embed/Vc4tb44NAGI",
          "https://www.youtube.com/embed/Vc4tb44NAGI",
          "https://www.youtube.com/embed/Vc4tb44NAGI",
          "https://www.youtube.com/embed/Vc4tb44NAGI",
        ]}
      />
      <Carusel
        type="image"
        arr={[
          {
            id: 1,
            src: "https://picsum.photos/400",
            alt: "Image 1",
            size: "small",
          },
          {
            id: 2,
            src: "https://picsum.photos/400",
            alt: "Image 2",
            size: "large",
          },
          {
            id: 3,
            src: "https://picsum.photos/400",
            alt: "Image 3",
            size: "medium",
          },
          {
            id: 4,
            src: "https://picsum.photos/400",
            alt: "Image 1",
            size: "small",
          },
          {
            id: 5,
            src: "https://picsum.photos/400",
            alt: "Image 2",
            size: "medium",
          },
          {
            id: 6,
            src: "https://picsum.photos/400",
            alt: "Image 3",
            size: "large",
          },
        ]}
      />
      {/* <PhotoGallery /> */}
      <Container>
        <Row>
          <ContactForm />
        </Row>
      </Container>
    </>
  );
}

export default Content;
