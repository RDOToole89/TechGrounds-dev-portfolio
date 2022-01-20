import { WeatherData } from '../types/app';

export interface CityScreenInterface {
  weatherData: WeatherData;
  resetCity(): void;
  handleTempGradient?(bool: Boolean): void;
}
