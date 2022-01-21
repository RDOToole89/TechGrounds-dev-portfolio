import WeatherCard from '../pages/WeatherCard';
import WeatherDetail from '../pages/WeatherDetail';
import WeatherOverview from '../pages/WeatherOverview';
import { Link } from 'react-router-dom';

export default function Pagebuttons({}) {
  const card = () => {
    console.log(WeatherCard);
  };
  const detail = () => {
    console.log(WeatherDetail);
  };
  const overview = () => {
    console.log(WeatherOverview);
  };

  return (
    <div className='pageButtonContainer'>
      <Link to='/'>
        <button className='pageBTN PBTN-Card' onClick={card} />
      </Link>
      <Link to='/weatherDetail'>
        <button className='pageBTN PBTN-Detail' onClick={detail} />
      </Link>
      <Link to='/weatherOverview'>
        <button className='pageBTN PBTN-Overview' onClick={overview} />
      </Link>
    </div>
  );
}
