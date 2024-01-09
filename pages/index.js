import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Selam Beyene Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <Navbar />

      <Container className="bg-dark text-light my-5" id='landing'>
        <Row>
          {/* <Col md={6}>
            <Image src="/headshot.png" alt="My Headshot" width={200} height={200} />
          </Col> */}
          {/* <Col md={6}> */}
          <span className='text-center'>
            <h1>Selam Beyene</h1>
            <h3>Full Stack Software Engineer</h3>
          </span>
          {/* </Col> */}
        </Row>
      </Container>

      {/* About Me Section */}
      <Container className="bg-dark text-light my-5 text-center" id="about">
        <Row>
          {/* <Col md={6}> */}
            <h2>About Me:</h2>
            <p>
              I'm a methodically-minded software engineer and options trader, with an aptitude for efficient processes and function. My experiences prior to entering the software engineering field have helped me enhance my skills in detail-oriented work, process development, and rapid learning in fast-paced environments. My goal as a software engineer is to leverage my experiences alongside my technical expertise to support a team with a shared commitment to fostering positive community impact.
            </p>
          {/* </Col> */}
        </Row>
      </Container>

      <Container className="bg-dark text-light my-5" id="skills">
        <Row>
          <Col>
            <h2>Skills:</h2>
            <h4>Languages:</h4>
            <ul>
              <li>Python</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
            </ul>
          </Col>
          <Col>
            <h4>Frameworks/Libraries:</h4>
            <ul>
              <li>React</li>
              <li>Django</li>
              <li>Mongoose</li>
              <li>Node.js</li>
              <li>Next.js</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Projects Section */}
      <Container className="bg-dark text-light py-5" id="projects">
        <span className='text-center'>
          <h1 className=' mb-4'>Projects</h1>
        </span>
        <Projects />
      </Container>

      {/* Contact Me Section */}
      <Container className="bg-secondary text-white text-center py-5" id="contact">
        <h2>Contact Me:</h2>
        {/* Add your contact form or information here */}
      </Container>
    </>
  );
}
