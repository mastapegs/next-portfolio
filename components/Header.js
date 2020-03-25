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
    <ul>
      {links.map(link => (
        <li>
          <Link href={link.href}>
            <a>{link.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default Header;