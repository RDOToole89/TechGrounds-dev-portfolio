import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { digitToString } from '../../utils/toDigit';
import { days } from '../../utils/days';
import { computeTime } from '../../utils/computeTime';
import { spacing } from '../../constants/sizes';
import { CityDetails } from '../CityDetails/CityDetails';

import { textStyles } from '../../global/textStyles';
import { boxShadowStyles } from '../../global/boxShadow';
import { imgStyles } from '../../global/imgStyles';

import { WeatherData } from '../..///types/app';

export interface ICityScreen {
  weatherData: WeatherData;
  handleCityDetailsActive(): void;
  handleGoBackToMainSceen(): void;
  handleSwitchDetailsScreen(): void;
  cityDetailsActive: boolean;
}

export const CityScreen = ({
  weatherData,
  handleCityDetailsActive,
  cityDetailsActive,
  handleGoBackToMainSceen,
  handleSwitchDetailsScreen,
}: ICityScreen) => {
  // Destructure all the data needed for the UI
  const {
    coord: coordinates,
    main: temperatures,
    name: cityName,
    weather: weatherInfo,
    timezone,
  }: WeatherData = weatherData;

  // converts the timezoneUTC offset to unix time stamp for conversion
  const timezoneUtcOffset = timezone / 3600;

  const { description, icon } = weatherInfo[0];

  const currentDate = computeTime(cityName, timezoneUtcOffset);
  const dayOfTheWeek = days[currentDate.getDay()];
  const currentMinutes = digitToString(currentDate.getMinutes());
  const currentHours = digitToString(currentDate.getHours());

  const {
    temp: currentTemperature,
    temp_max: maxTemperature,
    temp_min: minTemperature,
    humidity,
  } = temperatures;

  const weatherString = {
    uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
  };

  return cityDetailsActive ? (
    <CityDetails
      handleGoBackToMainSceen={handleGoBackToMainSceen}
      coordinates={coordinates}
      cityName={cityName}
      handleCityDetailsActive={handleCityDetailsActive}
      handleSwitchDetailsScreen={handleSwitchDetailsScreen}
    />
  ) : (
    <View style={[styles.dataContainer, boxShadowStyles.boxShadow]}>
      <View style={styles.mgBottomContainer}>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text style={textStyles.headerMedium}>{cityName}</Text>
          <Text style={textStyles.textSm}>
            {dayOfTheWeek} {currentHours}:{currentMinutes}
          </Text>
        </View>
        <View>
          <Image style={imgStyles.smallLogo} source={weatherString} />
          <Text style={textStyles.textSm}>{description}</Text>
          <Text style={textStyles.textSm}>
            {Math.floor(currentTemperature)} °C
          </Text>
        </View>
      </View>

      <View style={styles.mgBottomContainer}>
        <View style={styles.temperatureDetail}>
          <Icon name='temperature-low' size={25} color='#cdfcff' />
          <Text style={textStyles.textSm}>min. temp </Text>
          <Text>{Math.floor(minTemperature)} °C</Text>
        </View>
        <View style={styles.temperatureDetail}>
          <Icon name='temperature-high' size={25} color='#ec6e4c' />
          <Text style={textStyles.textSm}> max. temp </Text>
          <Text>{Math.floor(maxTemperature)} °C</Text>
        </View>
        <View style={styles.temperatureDetail}>
          <Icon name='water' size={25} color='#7cc6cc' />
          <Text style={textStyles.textSm}>humidity </Text>
          <Text>{humidity}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ marginBottom: spacing.md }}
        onPress={handleCityDetailsActive}>
        <Text style={textStyles.linkReturn}>7 Day Forecast</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoBackToMainSceen}>
        <Text style={textStyles.linkReturn}>Go back to main screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    width: '90%',
    justifyContent: 'center',
    backgroundColor: 'hsla(201, 94%, 88%, .2)',
    padding: spacing.xl,
    paddingTop: spacing.md,
    borderRadius: 10,
  },
  mgBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  temperatureDetail: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
