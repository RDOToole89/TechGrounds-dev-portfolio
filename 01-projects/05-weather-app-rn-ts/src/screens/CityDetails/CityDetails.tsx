import { API_KEY } from '@env';
import { View, Text, TouchableOpacity } from 'react-native';
import { WeatherDataDetails } from '../../types/app.d';
import { Accordion } from '../../components/Accordion/Accordion';
import {
  buildOneCallForecastUrl,
  exludeString,
} from '../../services/weatherApi';
import { spacing } from '../../constants/sizes';
import useFetch from '../../hooks/useFetch';
import { textStyles } from '../../global/textStyles';
import React from 'react';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParams } from '../../../App';
// coordinates = { coordinates };
// type Props = NativeStackScreenProps<RootStackParams, 'CityScreen'>;

interface ICityDetails {
  handleGoBackToMainSceen(): void;
  handleCityDetailsActive(): void;
  handleSwitchDetailsScreen(): void;
  coordinates: { lat: number; lon: number };
  cityName: string;
}

export const CityDetails = ({
  handleSwitchDetailsScreen,
  cityName,
  coordinates,
}: ICityDetails) => {
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
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <Text style={textStyles.headingPrimary}>{cityName}</Text>
        <Text style={textStyles.headingSecondary}>7 DAY FORECAST</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {data?.daily.map(
          (day: WeatherDataPerDay, i: number) =>
            i > 0 && i < 8 && <Accordion key={day.dt} weatherDataPerDay={day} />
        )}
      </View>
      <View>
        <TouchableOpacity
          style={{ marginVertical: spacing.md }}
          onPress={handleSwitchDetailsScreen}>
          <Text style={textStyles.linkText}>Go back to Today's weather</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
