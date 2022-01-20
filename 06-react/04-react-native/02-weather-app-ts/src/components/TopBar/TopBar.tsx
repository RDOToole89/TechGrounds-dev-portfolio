import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants/fonts';
import { fontSizes, spacing } from '../../constants/sizes';
import { TopBarInterface } from './topbar';

export const TopBar = ({ goBackToHomeScreen }: TopBarInterface) => {
  return (
    <View style={styles.infoBar}>
      <TouchableOpacity onPress={goBackToHomeScreen}>
        <Text style={styles.navTitle}>Open Weather</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goBackToHomeScreen}>
        <Image style={styles.navLogo} source={require('../../../assets/paper-plane2.png')} />
      </TouchableOpacity>
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
    marginTop: spacing.sm,
    color: '#fff',
    fontFamily: fonts.primary,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 2.5,
    fontSize: fontSizes.md,
  },
  navLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    transform: [{ rotate: '25deg' }],
  },
});
