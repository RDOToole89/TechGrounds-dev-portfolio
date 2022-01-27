import { API_KEY } from '@env';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WeatherDataDetails } from '../../types/app.d';
import { Accordion } from '../../components/Accordion/Accordion';
import { buildOneCallForecastUrl } from '../../services/weatherApi';
import { fontSizes, spacing } from '../../constants/sizes';
import useFetch from '../../hooks/useFetch';
import { Colors } from '../../constants/colors';

export const CityDetails = ({
  coordinates,
  goBackToHomeScreen,
  route,
  ...props
}: ICityDetails) => {
  // console.log('ROUTEPARAMS', route);

  // Grabs lat and lon and the data to exclude from the API request
  const exludeString = 'current,minutely,hourly,alerts';
  const { lat: latitude, lon: longitude } = coordinates;

  // Builds the API_URL based on the the above variables
  const API_URL = buildOneCallForecastUrl(
    latitude.toString(),
    longitude.toString(),
    exludeString,
    'metric',
    API_KEY
  );

  // Fetch the data with useFetch
  const { data } = useFetch<WeatherDataDetails>(API_URL);

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.headingPrimary}>{props.cityName}</Text>
          <Text style={styles.headingSecondary}>7 DAY FORECAST</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          {data &&
            data.daily.map((day: WeatherDataPerDay, i: number) => {
              if (i >= 7) return;
              return (
                <Accordion
                  key={day.dt + Math.random() + i}
                  weatherDataPerDay={day}
                />
              );
            })}
        </View>
        <TouchableOpacity
          style={{ marginVertical: spacing.md }}
          onPress={goBackToHomeScreen}>
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
    color: Colors.primaryWhite,
    marginBottom: spacing.sm,
    letterSpacing: 3,
  },
  link: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.primaryWhite,
  },
});
