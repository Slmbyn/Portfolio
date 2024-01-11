// built in components from next.js
// self-referencial links use the Link component



import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
    <Container>
      <Navbar.Brand as={ScrollLink} to='landing'>Selam Beyene</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={ScrollLink} to='about'>About</Nav.Link>
        <Nav.Link as={ScrollLink} to='skills'>Skills</Nav.Link>
        <Nav.Link as={ScrollLink} to='projects'>Projects</Nav.Link>
        <Nav.Link as={ScrollLink} to='contact'>Contact Me</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}
// export default function CustomNavbar() {
//   return (
//     <Nav className="ml-auto">
//       <Nav.Link as={ScrollLink} to="about" smooth={true} duration={500}>
//         About Me
//       </Nav.Link>
//       <Nav.Link as={ScrollLink} to="skills" smooth={true} duration={500}>
//         Skills
//       </Nav.Link>
//       <Nav.Link as={ScrollLink} to="projects" smooth={true} duration={500}>
//         Projects
//       </Nav.Link>
//       <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={500}>
//         Contact Me
//       </Nav.Link>
//     </Nav>
//   );
// }

