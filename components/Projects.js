import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useState} from 'react';
import styles from '../styles/Project.module.css'

{/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" /> */}


export default function Projects() {
    const [isHovered, setIsHovered] = useState(false)
    const projectInfo = [
        { title: 'StratTester', description: 'A web application that helps stock traders test and analyze data from various trading strategies.', imageSrc: '/strattester.png', github: 'https://github.com/Slmbyn/strattester', site:'#'},
        { title: 'PushStart', description: 'PushStart is a full-stack CRUD application that seamlessly connects car buyers & sellers.', imageSrc: '/pushstart.png', github: 'https://github.com/Slmbyn/PushStart', site:'#' },
        { title: 'Fit-Forecast', description: 'Web application designed to enhance your well-being through personalized workout suggestions based on your local weather conditions.', imageSrc: '/fitforecast.png', github: 'https://github.com/Slmbyn/Fit-Forecast', site:'https://fitforecast-dc33e66f392f.herokuapp.com/' },
        { title: 'Snake', description: 'Snake, the timeless arcade game, is back! In snake, players control a snake with never ending hunger as it navigates through a field in search of food!', imageSrc: '/snake.png', github: 'https://github.com/Slmbyn/Snake', site:'https://snake-gilt-eta.vercel.app/' },
      ];
  return (
    <Row xs={1} md={2} className="g-4">
      {projectInfo.map((card, idx) => (
        <Col key={idx}>
          <Card
            className={`${styles['project-card']} ${isHovered ? 'hovered' : ''}`}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Card.Img variant="top" src={card.imageSrc} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Card.Footer className='text-center bg-dark-subtle'>
                <Card.Link href={card.github} target="_blank" >Github</Card.Link>
                <Card.Link href={card.site} target="_blank" >Visit Site</Card.Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
