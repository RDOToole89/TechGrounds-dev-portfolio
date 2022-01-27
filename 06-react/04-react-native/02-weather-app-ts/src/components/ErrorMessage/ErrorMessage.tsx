import { Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/colors';
import { fontSizes, spacing } from '../../constants/sizes';
import { IErrorMessage } from './errormessage';

export const ErrorMessage = ({
  errorColor,
  handleErrorOnClick,
}: IErrorMessage) => {
  return (
    <View style={[styles(errorColor).errorWrapper]}>
      <Text style={[styles(errorColor).text]}>Enter valid City</Text>
      <Text onPress={handleErrorOnClick}>X</Text>
    </View>
  );
};

const styles = (errorColor: string) =>
  StyleSheet.create({
    text: {
      fontSize: fontSizes.sm,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: Colors.primaryBlack,
    },
    errorWrapper: {
      position: 'absolute',
      top: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: spacing.sm,
      backgroundColor: errorColor,
      zIndex: 5,
      width: '100%',
    },
  });
