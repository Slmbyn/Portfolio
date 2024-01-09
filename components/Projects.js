import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

{/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" /> */}


export default function Projects() {
    const projectInfo = [
        { title: 'StratTester', description: 'A web application that helps stock traders test and analyze data from various trading strategies.', imageSrc: '/strattester.png', github: 'https://github.com/Slmbyn/Snake' },
        { title: 'PushStart', description: 'PushStart is a full-stack CRUD application that seamlessly connects car buyers & sellers.', imageSrc: '/strattester.png', github: 'https://github.com/Slmbyn/Snake' },
        { title: 'Fit-Forecast', description: 'Web application designed to enhance your well-being through personalized workout suggestions based on your local weather conditions.', imageSrc: '/strattester.png', github: 'https://github.com/Slmbyn/Snake' },
        { title: 'Snake', description: 'Snake, the timeless arcade game, is back! In snake, players control a snake with never ending hunger as it navigates through a field in search of food!', imageSrc: '/strattester.png', github: 'https://github.com/Slmbyn/Snake' },
      ];
  return (
    <Row xs={1} md={2} className="g-4">
      {projectInfo.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.imageSrc} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Card.Link href={card.github}>Github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
