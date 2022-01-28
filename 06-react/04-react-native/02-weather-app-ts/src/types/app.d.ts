export interface WeatherData {
  coord: { lon: number; lat: number };
  main: { temp: number; temp_max: number; temp_min: number; humidity: number };
  name: string;
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  timezone: number;
}

export interface WeatherDataDaily {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    eve: number;
    morn: number;
    night: number;
  };
}

export interface WeatherDataDetails {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: 14400;
  daily: WeatherDataDaily[];
}
