export interface WeatherData {
  coord?: { lon: number; lat: number };
  main?: { temp: number; temp_max: number; temp_min: number; humidity: number };
  name?: string;
  weather?: [
    {
      description: string;
      icon: string;
    }
  ];
}
