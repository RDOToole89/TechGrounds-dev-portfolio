import { WeatherData } from '../types/app';

export interface CityScreenInterface {
  weatherData: WeatherData;
  handleTempGradient(bool: Boolean): void;
  activateCityDetails(): void;
  goBackToHomeScreen(): void;
  cityDetailsActive: Boolean;
}
