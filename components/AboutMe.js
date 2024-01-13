import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
import { RxDoubleArrowRight } from "react-icons/rx";


export default function AboutMe() {
  return (
    <Carousel className="mx-auto" style={{ maxWidth: '1000px' }} interval={null}>
        <Carousel.Item>
            <Row>
            <Image
                    src="beach.jpg"
                    alt="First slide"
                    fluid
                    style={{ width: '100%', height: 'auto', filter: 'brightness(50%)' }}
                    className='mx-auto'
                    />
            </Row>
            <Row>
            <Carousel.Caption className='text-center' style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 1)', padding: '20px' }}>
                {/* <span>
                <div className='bg-black px-2 py-2 df'> */}
                    <h3>About Me</h3>
                    <p>Hey there! I&apos;m Selam, and my journey into software development has been a bit of a zig-zag. Starting with a finance degree, I dove into the banking world, handling everything from lending to investments. I then took a detour into the wild world of day trading, learning the ropes on my own. While trading, I decided to add to my skill set by teaching myself Python thinking that it would be helpful with my trading (which it definitely is). But I accidentally became enamored with it and ended up completing an immersive software engineering bootcamp.</p>
                    <p>Beyond the professional stuff, I love to socialize, travel, and can chat for hours about the Golden State Warriors and football. Fun fact? Just clinched my first-ever fantasy football league championship!
                        If you are interested in hearing a little more about the journey that led me here, feel free to take a peek <RxDoubleArrowRight /></p>       
                {/* </div>
                </span> */}
            </Carousel.Caption>
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
