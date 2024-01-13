import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';

export default function AboutMe() {
  return (
    <Carousel className="mx-auto" style={{ maxWidth: '1000px' }}>
        <Carousel.Item>
  <Row className="position-relative">
    <Image
      src="beach.jpg"
      alt="First slide"
      fluid
      style={{ width: '100%', height: 'auto', filter: 'brightness(50%)' }}
      className='mx-auto'
    />
    <div className='text-center text-light position-absolute top-50 start-50 translate-middle'>
      {/* 
        The 'text-center text-light' classes are added to center the text horizontally and set its color to light.
        The 'position-absolute top-50 start-50 translate-middle' classes center the text both vertically and horizontally.
      */}
      <h3>Fifth slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
  </Row>
</Carousel.Item>



        <Carousel.Item>
            <Row>
                <Col>
                    <Image
                        src="cartoons/class.PNG"
                        alt="First slide"
                        fluid
                        style={{ maxHeight: '400px' }}
                        className='mx-auto'
                    />
                </Col>
                <Col>
                    <div className='text-start mt-4 '>
                        <h3>Fifth slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Col>
            </Row>
        </Carousel.Item>
        <Carousel.Item>
            <Row>
                <Col>
                    <Image
                        src="cartoons/bank.PNG"
                        alt="First slide"
                        fluid
                        style={{ maxHeight: '400px' }}
                        className='mx-auto'
                    />
                </Col>
                <Col>
                    <div className='text-start mt-4 '>
                        <h3>Fifth slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Col>
            </Row>
        </Carousel.Item>
        <Carousel.Item>
            <Row>
                <Col>
                    <Image
                        src="cartoons/dayTrade.PNG"
                        alt="First slide"
                        fluid
                        style={{ maxHeight: '400px' }}
                        className='mx-auto'
                    />
                </Col>
                <Col>
                    <div className='text-start mt-4 '>
                        <h3>Fifth slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Col>
            </Row>
        </Carousel.Item>
        <Carousel.Item>
            <Row>
                <Col>
                    <Image
                        src="cartoons/bootcamp.PNG"
                        alt="First slide"
                        fluid
                        style={{ maxHeight: '400px' }}
                        className='mx-auto'
                    />
                </Col>
                <Col>
                    <div className='text-start mt-4 '>
                        <h3>Fifth slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Col>
            </Row>
        </Carousel.Item>
        <Carousel.Item>
            <Row>
                <Col>
                    <Image
                        src="cartoons/ready.PNG"
                        alt="First slide"
                        fluid
                        style={{ maxHeight: '400px' }}
                        className='mx-auto'
                    />
                </Col>
                <Col>
                    <div className='text-start mt-4 '>
                        <h3>Fifth slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Col>
            </Row>
        </Carousel.Item>
    </Carousel>
  );
}
