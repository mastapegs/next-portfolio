import Link from 'next/link'

const Header = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>index.js</a>
        </Link>
      </li>
    </ul>
  );
}

export default Header;