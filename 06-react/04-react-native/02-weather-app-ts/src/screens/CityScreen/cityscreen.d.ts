import { WeatherData } from '../types/app';

export interface ICityScreen {
  weatherData: WeatherData;
  handleTempGradient(number): void;
  activateCityDetails(): void;
  goBackToHomeScreen(): void;
  cityDetailsActive: Boolean;
}
