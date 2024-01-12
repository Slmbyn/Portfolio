import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function AboutMe() {
  return (
    <Carousel>
        <Carousel.Item>
            <Image
                src="cartoons/class.PNG"
                alt="First slide"
                fluid
                style={{ maxHeight: '400px' }}
                className='mx-auto'
            />
            <Carousel.Caption>
                <h3>Finance at San Jose State</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                src="cartoons/bank.PNG"
                alt="First slide"
                fluid
                style={{ maxHeight: '400px' }}
                className='mx-auto'
            />
            <Carousel.Caption>
                <h3>second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                src="cartoons/dayTrade.PNG"
                alt="First slide"
                fluid
                style={{ maxHeight: '400px' }}
                className='mx-auto'
            />
            <Carousel.Caption>
                <h3>third slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                src="cartoons/bootcamp.PNG"
                alt="First slide"
                fluid
                style={{ maxHeight: '400px' }}
                className='mx-auto'
            />
            <Carousel.Caption>
                <h3>fourth slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                src="cartoons/ready.PNG"
                alt="First slide"
                fluid
                style={{ maxHeight: '400px' }}
                className='mx-auto'
            />
            <Carousel.Caption>
                <h3>Fifth slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}
