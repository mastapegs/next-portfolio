import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
const Header = () => {
  const links = [
    {
      href: "/",
      text: "Home"
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
            {links.map(({ href, text }) => {
              return (
                <Link href={href}>
                  <Nav.Link href={href}>
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