interface ICityDetails {
  handleViewCentered?(): void;
  goBackToHomeScreen(): void;
  coordinates: { lat: number; lon: number };
  cityName: string;
}
