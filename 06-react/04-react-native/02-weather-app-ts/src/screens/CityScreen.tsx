import { View, Text, StyleSheet } from 'react-native';
import { WeatherData } from '../types/app';
import { digitToString } from '../utils/toDigit';
import { CityScreenInterface } from './cityscreen';
import { days } from '../utils/days';

export const CityScreen = ({ weatherData, ...props }: CityScreenInterface) => {
  const { main: temperatures, name: cityName, weather }: WeatherData = weatherData;
  // @ts-ignore  // ts(2488) error
  // const [{ desciption }] = weather;

  // const description = weather[0]?.description;
  const currentTemperature = temperatures?.temp;
  const maxTemperature = temperatures?.temp_max;
  const minTemperature = temperatures?.temp_min;
  const humidity = temperatures?.humidity;
  const currentDate = new Date();
  const dayOfTheWeek = days[currentDate.getDay()];
  const currentMinutes = digitToString(currentDate.getMinutes());
  const currentHours = digitToString(currentDate.getHours());

  // console.log('temps', temperatures);
  // console.log('weather', weather);

  return (
    <View>
      <View>
        <Text>{cityName}</Text>
        <Text>
          {dayOfTheWeek} {currentHours}:{currentMinutes}
        </Text>
      </View>
      <View>
        {/* <Text>{description}</Text> */}
        <Text>{currentTemperature}</Text>
      </View>
      <View>
        <Text>min. temp {minTemperature}</Text>
        <Text>max. temp {maxTemperature}</Text>
        <Text>humidity {humidity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
