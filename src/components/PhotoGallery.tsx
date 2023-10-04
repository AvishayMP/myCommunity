import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function PhotoGallery() {
    const photos = [
        { id: 1, src: 'https://picsum.photos/400', alt: 'Image 1', size: 'small' },
        { id: 2, src: 'https://picsum.photos/400', alt: 'Image 2', size: 'large' },
        { id: 3, src: 'https://picsum.photos/400', alt: 'Image 3', size: 'medium' },
        { id: 4, src: 'https://picsum.photos/400', alt: 'Image 1', size: 'small' },
        { id: 5, src: 'https://picsum.photos/400', alt: 'Image 2', size: 'medium' },
        { id: 6, src: 'https://picsum.photos/400', alt: 'Image 3', size: 'large' },
    ];

    return (
        <Container>
            <Row>
                {photos.map((photo, index) => (
                    <Col key={photo.id} xs={12} md={6} lg={4}>
                        <img src={photo.src} alt={photo.alt} className="img-fluid" />
                        {index < photos.length - 1 && <hr className="my-3" />}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PhotoGallery;

