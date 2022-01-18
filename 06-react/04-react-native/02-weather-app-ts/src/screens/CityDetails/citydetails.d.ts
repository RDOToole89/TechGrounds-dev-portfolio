interface CityDetailsInterface {
  resetCity(): void;
  activateSevenDayForecast(): void;
  coordinates?: { lat: number; lon: number };
}
