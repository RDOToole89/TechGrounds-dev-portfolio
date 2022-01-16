import Link from 'next/link';

const styled = {
  display: 'flex',
  background: 'grey',
  padding: '1rem',
};

function Navbar() {
  return (
    <nav style={styled}>
      <Link href='/'>
        <a style={{ marginRight: '1rem' }}>home</a>
      </Link>

      <Link href='/about'>
        <a style={{ marginRight: '1rem' }}>about</a>
      </Link>

      <Link href='/contact'>
        <button>contact</button>
      </Link>
      <Link href='/posts'>
        <button>posts</button>
      </Link>
    </nav>
  );
}

export default Navbar;
