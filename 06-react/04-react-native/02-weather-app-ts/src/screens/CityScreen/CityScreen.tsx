import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
  }: WeatherData = weatherData;

  let description;
  let icon;

  if (weatherInfo) {
    description = weatherInfo[0].description;
    icon = weatherInfo[0].icon;
  }

  const currentDate = computeTime('Boston', '-5');
  const dayOfTheWeek = days[currentDate.getDay()];
  const currentMinutes = digitToString(currentDate.getMinutes());
  const currentHours = digitToString(currentDate.getHours());

  const maxTemperature = temperatures?.temp_max;
  const minTemperature = temperatures?.temp_min;
  const humidity = temperatures?.humidity;
  const weatherString = { uri: icon && `http://openweathermap.org/img/wn/${icon}@2x.png` };
  const currentTemperature = temperatures?.temp!;

  useEffect(() => {
    currentTemperature && currentTemperature > 20
      ? handleTempGradient!(true)
      : handleTempGradient!(false);
  }, []);

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
        <Text style={styles.textSmall}>min. temp {minTemperature} °C</Text>
        <Text style={styles.textSmall}> max. temp {maxTemperature} °C</Text>
        <Text style={styles.textSmall}>humidity {humidity}</Text>
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
  headerMedium: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    paddingTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  textSmall: {
    fontFamily: fonts.primary,
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
    fontFamily: fonts.primary,
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
