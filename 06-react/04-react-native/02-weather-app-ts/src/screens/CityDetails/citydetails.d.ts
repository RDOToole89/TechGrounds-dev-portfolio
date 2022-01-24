interface ICityDetails {
  goBackToHomeScreen(): void;
  coordinates: { lat: number; lon: number };
  cityName: string;
}
