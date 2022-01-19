import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { WeatherData } from '../../types/app';
import { digitToString } from '../../utils/toDigit';
import { CityScreenInterface } from './cityscreen';
import { days } from '../../utils/days';
import { computeTime } from '../../utils/computeTime';
import { fontSizes, spacing } from '../../constants/sizes';
import { CityDetails } from '../CityDetails/CityDetails';
import { generateBoxShadowStyle } from '../../utils/boxShadow';

export const CityScreen = ({ weatherData, resetCity }: CityScreenInterface) => {
  const [cityDetailsActive, setCityDetailsActive] = useState(false);
  const {
    coord: coordinates,
    main: temperatures,
    name: cityName,
    weather: weatherInfo,
  }: WeatherData = weatherData;

  // @ts-ignore
  const { description, icon } = weatherInfo ? weatherInfo[0] : '';

  const currentTemperature = temperatures?.temp;
  const maxTemperature = temperatures?.temp_max;
  const minTemperature = temperatures?.temp_min;
  const humidity = temperatures?.humidity;
  const weatherString = { uri: `http://openweathermap.org/img/wn/${icon}@2x.png` };

  const currentDate = computeTime('Boston', '-5');

  const dayOfTheWeek = days[currentDate.getDay()];
  const currentMinutes = digitToString(currentDate.getMinutes());
  const currentHours = digitToString(currentDate.getHours());

  const activateSevenDayForecast = () => {
    setCityDetailsActive(!cityDetailsActive);
  };

  return !cityDetailsActive ? (
    <View style={[styles.dataContainer, styles.boxShadow]}>
      <View style={styles.mgBottomContainer}>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text
            style={{
              fontSize: fontSizes.md,
              fontWeight: '600',
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              paddingTop: spacing.xl,
              marginBottom: spacing.sm,
            }}>
            {cityName}
          </Text>
          <Text>
            {dayOfTheWeek} {currentHours}:{currentMinutes}
          </Text>
        </View>
        <View>
          <Image style={styles.tinyLogo} source={weatherString} />
          <Text>{description}</Text>
          <Text>{currentTemperature} °C</Text>
        </View>
      </View>

      <View style={styles.mgBottomContainer}>
        <Text>min. temp {minTemperature} °C</Text>
        <Text>max. temp {maxTemperature} °C</Text>
        <Text>humidity {humidity}</Text>
      </View>
      <TouchableOpacity style={{ marginBottom: spacing.md }} onPress={activateSevenDayForecast}>
        <Text style={styles.link}>7 Day Forecast</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetCity}>
        <Text style={styles.link}>Go back to home</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <CityDetails
      resetCity={resetCity}
      activateSevenDayForecast={activateSevenDayForecast}
      coordinates={coordinates}
      cityName={cityName}
    />
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    width: '80%',
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
    fontFamily: 'ubuntu',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: 'hsla(201, 94%, 88%, .4)',
    fontWeight: '500',
    color: '#fff',
    borderRadius: 10,
  },
});
