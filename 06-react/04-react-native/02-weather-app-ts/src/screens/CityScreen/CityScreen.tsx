import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { WeatherData } from '../../types/app';
import { digitToString } from '../../utils/toDigit';
import { ICityScreen } from './cityscreen';
import { days } from '../../utils/days';
import { computeTime } from '../../utils/computeTime';
import { fontSizes, spacing } from '../../constants/sizes';
import { CityDetails } from '../CityDetails/CityDetails';
import { generateBoxShadowStyle } from '../../utils/boxShadow';
import { fonts } from '../../constants/fonts';
import { Colors } from '../../constants/colors';
import { textStyles } from '../../global/textStyles';
import { boxShadowStyles } from '../../global/boxShadow';
import { imgStyles } from '../../global/imgStyles';
// import { useNavigation } from '@react-navigation/native';

export const CityScreen = ({
  weatherData,
  handleTempGradient,
  cityDetailsActive,
  activateCityDetails,
  goBackToHomeScreen,
}: ICityScreen) => {
  // const navigation = useNavigation();

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

  useEffect(() => {
    // Changes the background gradient based on the current temperature
    handleTempGradient(currentTemperature);
  }, [currentTemperature]);

  return !cityDetailsActive ? (
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
          <Text style={textStyles.textSm}>{currentTemperature} °C</Text>
        </View>
      </View>

      <View style={styles.mgBottomContainer}>
        <View style={styles.temperatureDetail}>
          <Icon name='temperature-low' size={25} color='#cdfcff' />
          <Text style={textStyles.textSm}>min. temp </Text>
          <Text>{minTemperature} °C</Text>
        </View>
        <View style={styles.temperatureDetail}>
          <Icon name='temperature-high' size={25} color='#ec6e4c' />
          <Text style={textStyles.textSm}> max. temp </Text>
          <Text>{maxTemperature} °C</Text>
        </View>
        <View style={styles.temperatureDetail}>
          <Icon name='water' size={25} color='#7cc6cc' />
          <Text style={textStyles.textSm}>humidity </Text>
          <Text>{humidity}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ marginBottom: spacing.md }}
        // passing route params
        // onPress={() =>
        //   //@ts-ignore
        //   // navigation.navigate('CityDetails', { cityName, coordinates })
        // }
        onPress={activateCityDetails}>
        <Text style={textStyles.linkReturn}>7 Day Forecast</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goBackToHomeScreen}>
        <Text style={textStyles.linkReturn}>Go back to home</Text>
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
});
