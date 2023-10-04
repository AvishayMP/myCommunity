import Hero from "./Hero";
import PhotoGallery from "./PhotoGallery";
import VideoCarousel from "./VideoCarusel";

function Content() {
    return (
        <>
            <Hero />
            <h1 className="text-center">שיעורי הרב</h1>
            <VideoCarousel />
            <PhotoGallery />
        </>);
}

export default Content;