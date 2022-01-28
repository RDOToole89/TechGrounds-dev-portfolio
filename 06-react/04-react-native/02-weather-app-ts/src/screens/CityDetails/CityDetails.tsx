import { API_KEY } from '@env';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WeatherDataDetails } from '../../types/app.d';
import { Accordion } from '../../components/Accordion/Accordion';
import { buildOneCallForecastUrl } from '../../services/weatherApi';
import { fontSizes, spacing } from '../../constants/sizes';
import useFetch from '../../hooks/useFetch';
import { Colors } from '../../constants/colors';
import { textStyles } from '../../global/textStyles';

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
          <Text style={textStyles.headingPrimary}>{props.cityName}</Text>
          <Text style={textStyles.headingSecondary}>7 DAY FORECAST</Text>
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
          <Text style={textStyles.linkText}>Go back to home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
