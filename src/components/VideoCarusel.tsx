import { Carousel } from 'react-bootstrap';

function VideoCarousel() {
    return (
        <Carousel
            data-bs-theme="dark"
            variant="dark"
            className="d-flex align-items-center"
            style={{ height: '40vh' }}
        >
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <iframe
                            title="Video 1"
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/Vc4tb44NAGI"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <iframe
                            title="Video 2"
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/iz0VALIFzbg"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <iframe
                            title="Video 2"
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/iz0VALIFzbg"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <iframe
                            title="Video 2"
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/iz0VALIFzbg"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default VideoCarousel;
