import { WeatherData } from '../types/app';

export interface CityScreenInterface {
  weatherData: WeatherData;
  handleTempGradient(number): void;
  activateCityDetails(): void;
  goBackToHomeScreen(): void;
  cityDetailsActive: Boolean;
}
