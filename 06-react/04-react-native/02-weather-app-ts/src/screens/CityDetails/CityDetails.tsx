import { API_KEY } from '@env';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Accordion } from '../../components/Accordion/Accordion';
import { buildOneCallForecastUrl } from '../../services/weatherApi';
import { fontSizes, spacing } from '../../utils/sizes';

export const CityDetails = ({
  resetCity,
  activateSevenDayForecast,
  coordinates,
}: CityDetailsInterface) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  let API_URL: string;
  const exludeString = 'current,minutely,hourly,alerts';
  let mounted = false;
  const latitude = coordinates?.lat.toString()!;
  const longitude = coordinates?.lon.toString()!;

  if (latitude && longitude) {
    API_URL = buildOneCallForecastUrl(latitude, longitude, exludeString, 'metric', API_KEY);
    mounted = true;
  }

  useEffect(() => {
    if (API_URL) {
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(API_URL);

          const data = await response.json();

          setWeatherData(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchWeatherData();
    }

    return () => {
      mounted = false;
    };
  }, [mounted]);

  const goBackToHomeScreen = () => {
    resetCity();
    activateSevenDayForecast();
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.headingPrimary}>7 DAY FORECAST</Text>
      {weatherData &&
        weatherData?.daily.map((day: WeatherDataPerDay, i: number) => {
          return <Accordion key={day.dt + Math.random() + i} weatherDataPerDay={day} />;
        })}
      <TouchableOpacity style={{ marginTop: spacing.xl }} onPress={goBackToHomeScreen}>
        <Text style={styles.link}>Go back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headingPrimary: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    marginBottom: spacing.lg,
  },
  link: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    marginBottom: spacing.md,
    textTransform: 'uppercase',
    color: '#FFF',
  },
});
