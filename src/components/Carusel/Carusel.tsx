import { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { MyContext } from "../ContextProvider";
import axios from "axios";


function Carusel({ type }: { type: 'image' | 'video' | 'articals' }) {
    const BaseUrl = useContext(MyContext);
    const urlsArr: string[] = [];
    const [index, setIndex] = useState<number>(0);
    useEffect(() => {
        const data = axios.get(BaseUrl + '/chosen/' + type);
        urlsArr.push(...data);
    }, [])

    const handleClick = ({ dir }: { dir: 1 | -1 }): void => {
        setIndex((index + dir + urlsArr.length) % urlsArr.length);
    }
    return (<>
        <Container>
            <Row className="align-items-center">
                <Col onClick={() => handleClick({ dir: -1 })}>
                    &lt;
                </Col>
                {urlsArr.map(() => <Col>
                    <Card>
                        <iframe
                            title="Video 1"
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/Vc4tb44NAGI"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Card>
                </Col>)}
                <Col onClick={() => handleClick({ dir: 1 })}>
                    &gt;
                </Col>
            </Row>
        </Container>
    </>);
}

export default Carusel;