import { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { fonts } from '../../constants/fonts';
import { fontSizes, spacing } from '../../constants/sizes';
import { DarkModeContext } from '../../context/DarkModeContext';
import { ITopBar } from './topbar';

import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/colors';

export const TopBar = ({ goBackToHomeScreen }: ITopBar) => {
  const { dark, toggleDark } = useContext(DarkModeContext);

  return (
    <View style={styles(dark).infoBar}>
      <TouchableOpacity onPress={goBackToHomeScreen}>
        <Text style={styles(dark).navTitle}>Open Weather</Text>
      </TouchableOpacity>

      <View style={[styles().iconWrapper]}>
        {!dark ? (
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

        <TouchableOpacity onPress={goBackToHomeScreen}>
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

const styles = (darkMode: boolean = false) =>
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
      backgroundColor: darkMode ? Colors.primaryBlack : Colors.primaryBlue,
    },
    navTitle: {
      flex: 1,
      justifyContent: 'center',
      color: '#fff',
      fontFamily: fonts.ubuntuBold,
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: 2.5,
      fontSize: fontSizes.md,
    },
    iconColor: {
      color: darkMode ? Colors.primaryWhite : Colors.primaryBlack,
    },
    navLogo: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      transform: [{ rotate: '25deg' }],
    },
  });
