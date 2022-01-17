import { View, Text, StyleSheet } from 'react-native';
import { WeatherData } from '../../App';

interface CityScreen {
  weatherData: WeatherData;
}

export const CityScreen = ({ weatherData, ...props }: CityScreen) => {
  const { main, name, weather } = weatherData;
  console.log(weather);

  //@ts-ignore
  const [{ description, icon }] = weather; // ts(2488) error

  return (
    <View>
      <View>
        <Text>{name}</Text>
      </View>
      <View>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
