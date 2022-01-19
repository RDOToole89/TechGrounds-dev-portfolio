import { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatDate, unixTimeStampCoverter } from '../../utils/computeTime';
import { daysShort } from '../../utils/days';
import { fontSizes, spacing } from '../../utils/sizes';

export const Accordion = ({ weatherDataPerDay }: Accordion) => {
  const [accordionActive, setArcordionActive] = useState(true);
  const unixTimeStamp = weatherDataPerDay.dt;
  const { temp } = weatherDataPerDay;

  const mornTemperature = Math.floor(temp.morn);
  const dayTemperature = Math.floor(temp.day);
  const eveTemperature = Math.floor(temp.eve);
  const nightTemperature = Math.floor(temp.morn);
  const lowestTemperature = Math.floor(Math.min(...Object.values(temp)));
  const highestTemperature = Math.floor(Math.max(...Object.values(temp)));

  const currentDate = unixTimeStampCoverter(unixTimeStamp);
  const day = daysShort[currentDate.getDay()];
  const formattedDate = formatDate(currentDate.toISOString());

  return (
    <View>
      <View style={styles.accordionWrapper}>
        <Text style={[styles.textSm, styles.textBold]}>{day}</Text>
        <Text style={[styles.textSm, styles.textBold]}>{formattedDate}</Text>
        <Text style={[styles.textSm, styles.textBold]}>
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
          <Text style={[styles.textSm, styles.tempText]}>Temp</Text>
          <View style={styles.accordionTimeOfDay}>
            <Text style={styles.textSm}>Morning</Text>
            <Text style={styles.textSm}>
              {mornTemperature} / {highestTemperature} °C
            </Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text style={styles.textSm}>Afternoon</Text>
            <Text style={styles.textSm}>
              {dayTemperature} / {highestTemperature} °C
            </Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text style={styles.textSm}>Evening</Text>
            <Text style={styles.textSm}>
              {eveTemperature} / {highestTemperature} °C
            </Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text style={styles.textSm}>Night</Text>
            <Text style={styles.textSm}>
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
  tempText: { alignSelf: 'flex-end', padding: spacing.sm },
  textSm: {
    fontSize: fontSizes.sm,
  },
  textBold: { fontWeight: '600' },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  accordionTimeOfDay: {
    flexDirection: 'column',
    marginRight: spacing.md,
  },
});
