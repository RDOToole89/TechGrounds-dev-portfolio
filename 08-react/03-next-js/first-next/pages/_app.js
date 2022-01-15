import '../styles/globals.css';
import Navbar from '../components/Navbar';
import getServerSideProps from 'next';

// The current page is passed as a prop to <Component />
// This essentially renders the app so this is where we would add
// components that we want to display in our entire app.

function MyApp({ Component, pageProps }) {
  return (
    <div className='myApp'>
      <Navbar />
      <p>I am a parargraph in the MyApp component inside the _app.js !</p>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
