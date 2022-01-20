import { View, Text, Image, StyleSheet } from 'react-native';
import { fonts } from '../../constants/fonts';
import { fontSizes, spacing } from '../../constants/sizes';

export const TopBar = () => {
  return (
    <View style={styles.infoBar}>
      <Text style={styles.navTitle}>Open Weather</Text>
      <Image style={styles.navLogo} source={require('../../../assets/paper-plane2.png')} />
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
  navTitle: {
    flex: 1,
    justifyContent: 'center',
    fontSize: fontSizes.md,
    color: '#fff',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontWeight: '700',
    marginTop: spacing.sm,
    fontFamily: fonts.primary,
  },
  navLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    transform: [{ rotate: '25deg' }],
  },
});
