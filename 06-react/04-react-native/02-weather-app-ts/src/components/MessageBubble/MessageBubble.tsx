import { Text, StyleSheet, View } from 'react-native';
import { spacing } from '../../constants/sizes';
import { textStyles } from '../../global/textStyles';

export interface IMessageBubble {
  messageColor: string;
  message: string;
  setErrorToggle(bool: boolean): void;
}

export const MessageBuble = ({
  messageColor,
  message,
  setErrorToggle,
}: IMessageBubble) => {
  const handleCloseMessage = () => {
    setErrorToggle(false);
  };
  return (
    <View style={styles(messageColor).errorWrapper}>
      <Text style={textStyles.textSmUppercase}>{message}</Text>
      <Text onPress={handleCloseMessage}>X</Text>
    </View>
  );
};

const styles = (messageColor: string) =>
  StyleSheet.create({
    errorWrapper: {
      position: 'absolute',
      top: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: spacing.sm,
      backgroundColor: messageColor,
      zIndex: 5,
      width: '100%',
    },
  });
