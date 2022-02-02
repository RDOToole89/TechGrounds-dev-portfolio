import { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatDate, unixTimeStampCoverter } from '../../utils/computeTime';
import { daysShort } from '../../utils/days';
import { textStyles } from '../../global/textStyles';
import { Colors } from '../../constants/colors';
import { imgStyles } from '../../global/imgStyles';
import { spacing } from '../../constants/sizes';

export const Accordion = ({ weatherDataPerDay }: IAccordion) => {
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
        <Text style={[textStyles.textSm, textStyles.textBold]}>{day}</Text>
        <Text style={[textStyles.textSm, textStyles.textBold]}>
          {formattedDate}
        </Text>
        <Text style={[textStyles.textSm, textStyles.textBold]}>
          {lowestTemperature} / {highestTemperature} °C
        </Text>
        <Image
          style={imgStyles.tinyLogo}
          source={{ uri: `http://openweathermap.org/img/wn/10d@2x.png` }}
        />
        {accordionActive ? (
          <Icon
            name='caret-down-outline'
            size={20}
            color={Colors.primaryBlack}
            onPress={() => setArcordionActive(!accordionActive)}
          />
        ) : (
          <Icon
            name='caret-up-outline'
            size={20}
            color={Colors.primaryBlack}
            onPress={() => setArcordionActive(!accordionActive)}
          />
        )}
      </View>
      {accordionActive && (
        <View style={styles.accordionActiveWrapper}>
          <Text style={[textStyles.textSmBlack, styles.tempText]}>Temp</Text>
          <View style={styles.accordionTimeOfDay}>
            <Text style={textStyles.textSmBlack}>Morning</Text>
            <Text style={textStyles.textSmBlack}>
              {mornTemperature} / {highestTemperature} °C
            </Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text style={textStyles.textSmBlack}>Afternoon</Text>
            <Text style={textStyles.textSmBlack}>
              {dayTemperature} / {highestTemperature} °C
            </Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text style={textStyles.textSmBlack}>Evening</Text>
            <Text style={textStyles.textSmBlack}>
              {eveTemperature} / {highestTemperature} °C
            </Text>
          </View>{' '}
          <View style={styles.accordionTimeOfDay}>
            <Text style={textStyles.textSmBlack}>Night</Text>
            <Text style={textStyles.textSmBlack}>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    backgroundColor: 'hsla(200, 51%, 41%, .7)',
  },
  accordionActiveWrapper: {
    flexDirection: 'row',
    backgroundColor: ' 	hsla(0, 0%, 100%, .5)',
    padding: spacing.xxsm,
  },
  accordionTimeOfDay: {
    flexDirection: 'column',
    marginRight: spacing.md,
  },
  tempText: { alignSelf: 'flex-end', padding: spacing.sm },
});
