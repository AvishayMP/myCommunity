import { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "../../../node_modules/react-bootstrap/esm/Image";
// import { MyContext } from "../ContextProvider";
// import axios from "axios;

type CaruselProps =
  | {
      type: "video";
      arr: string[];
    }
  | {
      type: "image";
      arr: {
        src: string;
        id: number;
        alt: string
      }[];
    }
  | {
      type: "articals";
      arr: string[];
    };

function Carusel(props: CaruselProps) {
  // const BaseUrl = useContext(MyContext);

  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    // const data = axios.get(BaseUrl + '/chosen/' + type);
    // urlsArr.push(...data);
  }, []);

  const handleClick = (dir: 1 | -1): void => {
    console.log(index);
    setIndex((index + dir + props.arr.length) % props.arr.length);
  };
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col onClick={() => handleClick(-1)}>&lt;</Col>

          {props.arr.map(
            (url, i) =>
              (Math.abs(index - i) <= 1 && (
                <Col>
                  <Card>
                    {props.type == "video" && (
                      <iframe
                        title="Video 1"
                        className="embed-responsive-item"
                        src={url}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                    {/* {props.type === "image" && (
                      <Col key={url.id} xs={12} md={6} lg={4}>
                        <Image
                          src={url.src}
                          alt={url.alt}
                          className="img-fluid"
                        />
                        {index < props.arr.length - 1 && <hr className="my-3" />}
                      </Col>
                    )} */}
                    {props.type ==='articals' && <span>Not setted!!! </span>}
                  </Card>
                </Col>)
              ),
          )}

          <Col onClick={() => handleClick(1)}>&gt;</Col>
        </Row>
      </Container>
    </>
  );
}

export default Carusel;