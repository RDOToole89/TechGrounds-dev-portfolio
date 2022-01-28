type Props = NativeStackScreenProps<RootStackParams, 'CityScreen'>;

interface ICityDetails {
  goBackToHomeScreen(): void;
  coordinates: { lat: number; lon: number };
  cityName: string;
  route?: Props;
}
