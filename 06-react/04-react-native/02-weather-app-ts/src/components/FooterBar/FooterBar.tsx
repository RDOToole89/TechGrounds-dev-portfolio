import { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { fontSizes, spacing } from '../../constants/sizes';
import { DarkModeContext } from '../../context/DarkModeContext';

export const Footer = () => {
  const { dark } = useContext(DarkModeContext);

  return (
    <View style={styles(dark).infoBar}>
      <Text style={styles().textSm}>Powered by: </Text>
      <Image
        style={styles().smallImage}
        source={require('../../../assets/cloud-sun.png')}
      />
      <Text style={styles().textSm}>OpenWeather API ©</Text>
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
    textSm: {
      fontFamily: fonts.ubuntu,
      fontSize: fontSizes.sm,
      color: Colors.primaryWhite,
      letterSpacing: 1.5,
    },
    smallImage: {
      flex: 1,
      width: 40,
      height: 40,
      resizeMode: 'contain',
    },
  });
