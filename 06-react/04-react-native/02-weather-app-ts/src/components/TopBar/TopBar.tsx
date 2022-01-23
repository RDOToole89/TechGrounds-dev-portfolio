import { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { fonts } from '../../constants/fonts';
import { fontSizes, spacing } from '../../constants/sizes';
import { DarkModeContext } from '../../context/DarkModeContext';
import { TopBarInterface } from './topbar';
import Icon from 'react-native-vector-icons/Ionicons';

export const TopBar = ({ goBackToHomeScreen }: TopBarInterface) => {
  const { dark, toggleDark } = useContext(DarkModeContext);
  return (
    <View style={styles(dark).infoBar}>
      <TouchableOpacity onPress={goBackToHomeScreen}>
        <Text style={styles(dark).navTitle}>Open Weather</Text>
      </TouchableOpacity>

      <View
        style={{
          width: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {!dark ? (
          <TouchableOpacity onPress={toggleDark}>
            <Icon name='moon' size={30} color={dark ? '#fff' : '#000'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggleDark}>
            <Icon name='sunny-sharp' size={30} color={dark ? '#fff' : '#000'} />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={goBackToHomeScreen}>
          <Icon name='planet' size={30} color={dark ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = (darkMode: boolean) =>
  StyleSheet.create({
    infoBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      alignItems: 'center',
      backgroundColor: darkMode ? '#000' : 'hsla(200, 100%, 26%, 1)',
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
    iconColor: {
      color: darkMode ? '#fff' : '#000',
    },
    navLogo: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      transform: [{ rotate: '25deg' }],
    },
  });
