import { Text, StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../../constants/sizes';

export const ErrorMessage = ({ errorColor }: { errorColor: string }) => {
  return <Text style={[styles(errorColor).text]}>Enter valid City</Text>;
};

const styles = (errorColor: string) =>
  StyleSheet.create({
    text: {
      width: '100%',
      padding: spacing.sm,
      fontSize: fontSizes.md,
      fontWeight: 'bold',
      color: '#000',
      backgroundColor: errorColor,
      zIndex: 2,
      alignSelf: 'flex-start',
    },
  });
