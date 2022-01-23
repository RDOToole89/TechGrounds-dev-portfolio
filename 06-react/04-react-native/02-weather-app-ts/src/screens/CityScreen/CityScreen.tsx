import { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { WeatherData } from '../../types/app';
import { digitToString } from '../../utils/toDigit';
import { CityScreenInterface } from './cityscreen';
import { days } from '../../utils/days';
import { computeTime } from '../../utils/computeTime';
import { fontSizes, spacing } from '../../constants/sizes';
import { CityDetails } from '../CityDetails/CityDetails';
import { generateBoxShadowStyle } from '../../utils/boxShadow';
import { fonts } from '../../constants/fonts';

export const CityScreen = ({
  weatherData,
  handleTempGradient,
  cityDetailsActive,
  activateCityDetails,
  goBackToHomeScreen,
}: CityScreenInterface) => {
  const {
    coord: coordinates,
    main: temperatures,
    name: cityName,
    weather: weatherInfo,
    timezone,
  }: WeatherData = weatherData;

  const timezoneUtcOffset = timezone / 3600;

  const { description, icon } = weatherInfo[0];

  const currentDate = computeTime(cityName!, timezoneUtcOffset);
  const dayOfTheWeek = days[currentDate.getDay()];
  const currentMinutes = digitToString(currentDate.getMinutes());
  const currentHours = digitToString(currentDate.getHours());

  const {
    temp: currentTemperature,
    temp_max: maxTemperature,
    temp_min: minTemperature,
    humidity,
  } = temperatures;

  const weatherString = { uri: `http://openweathermap.org/img/wn/${icon}@2x.png` };

  useEffect(() => {
    handleTempGradient(currentTemperature);
  }, [currentTemperature]);

  return !cityDetailsActive ? (
    <View style={[styles.dataContainer, styles.boxShadow]}>
      <View style={styles.mgBottomContainer}>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text style={styles.headerMedium}>{cityName}</Text>
          <Text style={styles.textSmall}>
            {dayOfTheWeek} {currentHours}:{currentMinutes}
          </Text>
        </View>
        <View>
          <Image style={styles.tinyLogo} source={weatherString} />
          <Text style={styles.textSmall}>{description}</Text>
          <Text style={styles.textSmall}>{currentTemperature} °C</Text>
        </View>
      </View>

      <View style={styles.mgBottomContainer}>
        <View style={styles.temperatureDetail}>
          <Icon name='temperature-low' size={25} color='#cdfcff' />
          <Text style={styles.textSmall}>min. temp </Text>
          <Text>{minTemperature} °C</Text>
        </View>
        <View style={styles.temperatureDetail}>
          <Icon name='temperature-high' size={25} color='#ec6e4c' />
          <Text style={styles.textSmall}> max. temp </Text>
          <Text>{maxTemperature} °C</Text>
        </View>
        <View style={styles.temperatureDetail}>
          <Icon name='water' size={25} color='#7cc6cc' />
          <Text style={styles.textSmall}>humidity </Text>
          <Text>{humidity}</Text>
        </View>
      </View>
      <TouchableOpacity style={{ marginBottom: spacing.md }} onPress={activateCityDetails}>
        <Text style={styles.link}>7 Day Forecast</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goBackToHomeScreen}>
        <Text style={styles.link}>Go back to home</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <CityDetails
      goBackToHomeScreen={goBackToHomeScreen}
      coordinates={coordinates}
      cityName={cityName}
    />
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
  headerMedium: {
    fontFamily: fonts.secondary,
    fontSize: fontSizes.md,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    paddingTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  textSmall: {
    fontFamily: fonts.secondary,
  },
  boxShadow: generateBoxShadowStyle(
    0,
    2,
    'hsla(200, 100%, 10%, 0.2)',
    0.27,
    4.65,
    1,
    'hsla(200, 100%, 10%, 0.2)'
  ),
  tinyLogo: {
    width: 100,
    height: 100,
  },
  link: {
    textTransform: 'uppercase',
    fontFamily: fonts.secondary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xsm,
    backgroundColor: 'hsla(201, 94%, 88%, .4)',
    fontWeight: '500',
    color: '#fff',
    borderRadius: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
