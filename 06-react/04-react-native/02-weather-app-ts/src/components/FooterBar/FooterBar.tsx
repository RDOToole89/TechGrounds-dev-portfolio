import { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { spacing } from '../../constants/sizes';
import { DarkModeContext } from '../../context/DarkModeContext';
import { imgStyles } from '../../global/imgStyles';
import { textStyles } from '../../global/textStyles';

export const Footer = () => {
  const { dark } = useContext(DarkModeContext);

  return (
    <View style={styles(dark).infoBar}>
      <Text style={textStyles.textXsm}>Powered by: </Text>
      <Image
        style={imgStyles.smallImage}
        source={require('../../../assets/cloud-sun.png')}
      />
      <Text style={textStyles.textXsm}>OpenWeather API ©</Text>
    </View>
  );
};

const styles = (darkMode: boolean = false) =>
  StyleSheet.create({
    infoBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      alignItems: 'center',
      backgroundColor: darkMode ? Colors.primaryBlack : Colors.primaryBlue,
    },
  });
