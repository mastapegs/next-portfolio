import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Header = () => {
  const router = useRouter();
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
          <Nav activeKey={router.pathname}>
            {pages.map(({ href, text }) => {
              return (
                <Link key={href} href={href} passHref>
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