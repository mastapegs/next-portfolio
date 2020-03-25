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
          <Link href="/">
            <a>Matthew Pagan</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {links.map(({ href, text }) => {
              return (
                <Nav.Item>
                  <Link href={href}>
                    <a>{text}</a>
                  </Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Header;