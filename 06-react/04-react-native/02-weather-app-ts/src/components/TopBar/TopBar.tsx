import { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants/fonts';
import { fontSizes, spacing } from '../../constants/sizes';
import { DarkModeContext } from '../../context/DarkModeContext';

import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/colors';

export interface ITopBar {
  handleGoBackToMainSceen(): void;
}

export const TopBar = ({ handleGoBackToMainSceen }: ITopBar) => {
  const { dark, toggleDark } = useContext(DarkModeContext);

  return (
    <View style={styles(dark).infoBar}>
      <TouchableOpacity onPress={handleGoBackToMainSceen}>
        <Text style={styles().navTitle}>Open Weather</Text>
      </TouchableOpacity>

      <View style={styles().iconWrapper}>
        {dark ? (
          <TouchableOpacity onPress={toggleDark}>
            <Icon
              name='moon'
              size={25}
              color={dark ? Colors.primaryWhite : Colors.primaryBlack}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggleDark}>
            <Icon
              name='sunny-sharp'
              size={25}
              color={dark ? Colors.primaryWhite : Colors.primaryBlack}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={handleGoBackToMainSceen}>
          <Icon
            name='planet'
            size={25}
            color={dark ? Colors.primaryWhite : Colors.primaryBlack}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = (dark: boolean = false) =>
  StyleSheet.create({
    iconWrapper: {
      width: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    infoBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: spacing.md,
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.xxxl,
      backgroundColor: dark ? Colors.primaryBlack : Colors.primaryBlue,
    },
    navTitle: {
      flex: 1,
      justifyContent: 'center',
      color: '#fff',
      fontFamily: fonts.primaryBold,
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: 2.5,
      fontSize: fontSizes.md,
    },
    iconColor: {
      color: 'white',
    },
    navLogo: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      transform: [{ rotate: '25deg' }],
    },
  });
