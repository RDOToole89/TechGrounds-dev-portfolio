import { View, Text, Image, StyleSheet } from 'react-native';
import { fonts } from '../../constants/fonts';
import { fontSizes, spacing } from '../../constants/sizes';

export const Footer = () => {
  return (
    <View style={styles.infoBar}>
      <Text style={styles.textSm}>Powered by: </Text>
      <Image style={styles.smallImage} source={require('../../../assets/cloud-sun.png')} />
      <Text style={styles.textSm}>OpenWeather API ©</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    backgroundColor: 'hsla(200, 100%, 26%, 1)',
  },
  textSm: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.sm,
    color: '#fff',
    letterSpacing: 1.5,
  },
  smallImage: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
