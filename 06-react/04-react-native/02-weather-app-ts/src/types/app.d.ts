export interface WeatherData {
  main?: { temp: number; temp_max: number; temp_min: number; humidity: number };
  name?: string;
  weather?: [{ description: string; main: string; icon: string }];
}
