import { API_KEY } from '@env';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Accordion } from '../../components/Accordion/Accordion';
import { buildOneCallForecastUrl } from '../../services/weatherApi';
import { fontSizes, spacing } from '../../constants/sizes';

export const CityDetails = ({ coordinates, goBackToHomeScreen, ...props }: ICityDetails) => {
  const [weatherData, setWeatherData] = useState<any>(null);

  const exludeString = 'current,minutely,hourly,alerts';

  const { lat: latitude, lon: longitude } = coordinates;

  const API_URL = buildOneCallForecastUrl(
    latitude.toString(),
    longitude.toString(),
    exludeString,
    'metric',
    API_KEY
  );

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
  }, [API_URL]);

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.headingPrimary}>{props.cityName}</Text>
          <Text style={styles.headingSecondary}>7 DAY FORECAST</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {weatherData &&
            weatherData?.daily.map((day: WeatherDataPerDay, i: number) => {
              if (i >= 7) return;
              return <Accordion key={day.dt + Math.random() + i} weatherDataPerDay={day} />;
            })}
        </View>
        <TouchableOpacity style={{ marginVertical: spacing.md }} onPress={goBackToHomeScreen}>
          <Text style={styles.link}>Go back to home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headingPrimary: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  headingSecondary: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: spacing.sm,
    letterSpacing: 3,
  },
  link: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FFF',
  },
});
