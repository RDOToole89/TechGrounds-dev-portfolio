import { Text, StyleSheet, View } from 'react-native';
import { spacing } from '../../constants/sizes';
import { textStyles } from '../../global/textStyles';
import { IErrorMessage } from './errormessage';

export const ErrorMessage = ({
  errorColor,
  handleErrorOnClick,
}: IErrorMessage) => {
  return (
    <View style={[styles(errorColor).errorWrapper]}>
      <Text style={[textStyles.textSmUppercase]}>Enter valid City</Text>
      <Text onPress={handleErrorOnClick}>X</Text>
    </View>
  );
};

const styles = (errorColor: string) =>
  StyleSheet.create({
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
