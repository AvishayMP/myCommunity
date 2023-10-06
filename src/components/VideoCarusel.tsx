import { Card, Col, Container, Row } from 'react-bootstrap';

function VideoCarousel() {
    return (
        <>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        &lt;
                    </Col>
                    <Col>
                        <Card>
                            <iframe
                                title="Video 1"
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/Vc4tb44NAGI"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <iframe
                                title="Video 1"
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/Vc4tb44NAGI"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <iframe
                                title="Video 1"
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/Vc4tb44NAGI"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </Card>
                    </Col>
                    <Col>
                        &gt;
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default VideoCarousel;
