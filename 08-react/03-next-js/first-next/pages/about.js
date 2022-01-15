import Link from 'next/link';
import Navbar from '../components/Navbar';

const About = () => {
  console.log('about component');

  return (
    <div>
      <Navbar />
      <h1>The about page!</h1>;
    </div>
  );
};

export default About;
