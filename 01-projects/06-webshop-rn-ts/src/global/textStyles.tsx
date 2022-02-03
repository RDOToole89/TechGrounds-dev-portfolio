import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { fontSizes, spacing } from '../constants/sizes';

export const textStyles = StyleSheet.create({
  headingPrimary: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  headingSecondary: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: Colors.primaryWhite,
    marginBottom: spacing.sm,
    letterSpacing: 3,
  },
  headerMedium: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.md,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    paddingTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  textSmUppercase: {
    fontSize: fontSizes.sm,
    fontFamily: 'ubuntu',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.primaryBlack,
  },
  textXsm: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.sm,
    color: Colors.primaryWhite,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  textSm: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.sm,
    color: Colors.primaryWhite,
    letterSpacing: 1.5,
  },
  textSmBlack: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xsm,
    color: Colors.primaryBlack,
    letterSpacing: 1.5,
  },
  textBold: { fontWeight: '600' },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  linkText: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.primaryWhite,
  },
  linkReturn: {
    textTransform: 'uppercase',
    fontFamily: fonts.primary,
    letterSpacing: 1.2,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xsm,
    backgroundColor: 'hsla(201, 94%, 88%, .4)',
    fontWeight: '500',
    color: Colors.primaryWhite,
    borderRadius: 10,
  },
});
