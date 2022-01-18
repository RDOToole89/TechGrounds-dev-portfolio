import { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { spacing } from '../../utils/sizes';

export const Accordion = () => {
  const [accordionActive, setArcordionActive] = useState(false);

  return (
    <View style={{ width: 350 }}>
      <View style={styles.accordionWrapper}>
        <Text>24-11-2020</Text>
        <Text>5/8 °C</Text>
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
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: spacing.md }}>
          <Text style={{ alignSelf: 'flex-end', marginRight: spacing.md }}>Temp</Text>
          <View style={styles.accordionTimeOfDay}>
            <Text>Morning</Text>
            <Text>5/8 °C</Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text>Morning</Text>
            <Text>5/8 °C</Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text>Morning</Text>
            <Text>5/8 °C</Text>
          </View>
          <View style={styles.accordionTimeOfDay}>
            <Text>Morning</Text>
            <Text>5/8 °C</Text>
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
