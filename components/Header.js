import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
const Header = () => {
  const pages = [
    {
      href: "/",
      text: "Home"
    },
    {
      href: "/contact",
      text: "Contact Me"
    },
    {
      href: "/about",
      text: "About"
    }
  ];
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          Matthew Pagan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {pages.map(({ href, text }) => {
              return (
                <Link href={href} passHref>
                  <Nav.Link>
                    {text}
                  </Nav.Link>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Header;