// // built in components from next.js
// // self-referencial links use the Link component
// import Link from "next/link";
// import { Link as ScrollLink } from 'react-scroll'

// export default function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <ScrollLink to="about" smooth={true} duration={500}>About Me</ScrollLink>
//                 </li>
//                 <li>
//                     <ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink>
//                 </li>
//                 <li>
//                     <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
//                 </li>
//                 <li>
//                     <ScrollLink to="contact" smooth={true} duration={500}>Contact Me</ScrollLink>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// Navbar.js

// Navbar.js


import { Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

export default function CustomNavbar() {
  return (
    <Nav className="ml-auto">
      <Nav.Link as={ScrollLink} to="about" smooth={true} duration={500}>
        About Me
      </Nav.Link>
      <Nav.Link as={ScrollLink} to="skills" smooth={true} duration={500}>
        Skills
      </Nav.Link>
      <Nav.Link as={ScrollLink} to="projects" smooth={true} duration={500}>
        Projects
      </Nav.Link>
      <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={500}>
        Contact Me
      </Nav.Link>
    </Nav>
  );
}

