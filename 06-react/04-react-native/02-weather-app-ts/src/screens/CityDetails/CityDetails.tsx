import { View, Text, TouchableOpacity } from 'react-native';
import { Accordion } from '../../components/Accordion/Accordion';

export const CityDetails = ({ resetCity, activateSevenDayForecast }: CityDetailsInterface) => {
  const goBackToHomeScreen = () => {
    resetCity();
    activateSevenDayForecast();
  };

  return (
    <View>
      <Text>7 DAY FORECAST</Text>
      <TouchableOpacity onPress={goBackToHomeScreen}>
        <Text>Go back to home</Text>
      </TouchableOpacity>

      <Accordion />
    </View>
  );
};
