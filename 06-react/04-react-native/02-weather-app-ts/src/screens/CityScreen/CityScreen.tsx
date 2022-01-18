import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WeatherData } from '../../types/app';
import { digitToString } from '../../utils/toDigit';
import { CityScreenInterface } from './cityscreen';
import { days } from '../../utils/days';
import { computeTime } from '../../utils/computeTime';
import { spacing } from '../../utils/sizes';

export const CityScreen = ({ weatherData, resetCity, ...props }: CityScreenInterface) => {
  const { main: temperatures, name: cityName, weather }: WeatherData = weatherData;
  //@ts-ignore
  // const [{ desciption }] = weather;
  // ts(2488) error

  // const description = weather[0]?.description;
  const currentTemperature = temperatures?.temp;
  const maxTemperature = temperatures?.temp_max;
  const minTemperature = temperatures?.temp_min;
  const humidity = temperatures?.humidity;

  const currentDate = computeTime('Boston', '-5');

  const dayOfTheWeek = days[currentDate.getDay()];
  const currentMinutes = digitToString(currentDate.getMinutes());
  const currentHours = digitToString(currentDate.getHours());

  // console.log('temps', temperatures);
  // console.log('weather', weather);

  return (
    <View style={styles.dataContainer}>
      <View style={styles.mgBottomContainer}>
        <Text>{cityName}</Text>
        <Text>
          {dayOfTheWeek} {currentHours}:{currentMinutes}
        </Text>
      </View>
      <View>
        {/* <Text>{description}</Text> */}
        <Text>{currentTemperature} °C</Text>
      </View>
      <View style={styles.mgBottomContainer}>
        <Text>min. temp {minTemperature} °C</Text>
        <Text>max. temp {maxTemperature} °C</Text>
        <Text>humidity {humidity}</Text>
      </View>
      <TouchableOpacity onPress={resetCity}>
        <Text>Go back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    flex: 0.2,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#BAE6FD',
    padding: spacing.lg,
  },
  mgBottomContainer: {
    marginBottom: spacing.md,
  },
});
