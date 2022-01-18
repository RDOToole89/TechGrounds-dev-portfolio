import { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatDate, unixTimeStampCoverter } from '../../utils/computeTime';
import { daysShort } from '../../utils/days';
import { spacing } from '../../utils/sizes';

export const Accordion = ({ weatherDataPerDay }: Accordion) => {
  const [accordionActive, setArcordionActive] = useState(true);
  const unixTimeStamp = weatherDataPerDay.dt;
  const { temp } = weatherDataPerDay;

  const minTemperature = Math.floor(temp.min);
  const maxTemperature = Math.floor(temp.max);
  const mornTemperature = Math.floor(temp.morn);
  const dayTemperature = Math.floor(temp.day);
  const eveTemperature = Math.floor(temp.eve);
  const nightTemperature = Math.floor(temp.morn);
  const lowestTemperature = Math.floor(Math.min(...Object.values(temp)));
  const highestTemperature = Math.floor(Math.max(...Object.values(temp)));
  console.log(highestTemperature);

  const currentDate = unixTimeStampCoverter(unixTimeStamp);
  const day = daysShort[currentDate.getDay()];
  const formattedDate = formatDate(currentDate.toISOString());

  return (
    <View style={{ width: 350 }}>
      <View style={styles.accordionWrapper}>
        <Text>{day}</Text>
        <Text>{formattedDate}</Text>
        <Text>
          {lowestTemperature} / {highestTemperature} °C
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{ uri: `http://openweathermap.org/img/wn/10d@2x.png` }}
        />
        <Icon
          name='caret-down-outline'
          size={20}
          color='#000'
          onPress={() => setArcordionActive(!accordionActive)}
        />
      </View>
      {accordionActive && (
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: spacing.sm }}>
          <Text style={{ alignSelf: 'flex-end', marginRight: spacing.md }}>Temp</Text>
          <View style={styles.accordionTimeOfDay}>
            <Text>Morning</Text>
            <Text>
              {mornTemperature} / {highestTemperature} °C
            </Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text>Afternoon</Text>
            <Text>
              {dayTemperature} / {highestTemperature} °C
            </Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text>Evening</Text>
            <Text>
              {eveTemperature} / {highestTemperature} °C
            </Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text>Night</Text>
            <Text>
              {nightTemperature} / {highestTemperature} °C
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  accordionTimeOfDay: {
    flexDirection: 'column',
    marginRight: spacing.md,
  },
});
