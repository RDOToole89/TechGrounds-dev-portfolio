interface CityDetailsInterface {
  resetCity(): void;
  activateSevenDayForecast(): void;
  handleViewCentered?(): void;
  coordinates?: { lat: number; lon: number };
  cityName?: string;
}
