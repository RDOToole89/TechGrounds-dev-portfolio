import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { fonts } from './src/constants/fonts';
import { API_KEY } from '@env';
import { useEffect, useState } from 'react';
import { SearchBar } from './src/components/SearchBar/SearchBar';
import { fontSizes, spacing } from './src/constants/sizes';
import { CityScreen } from './src/screens/CityScreen/CityScreen';
import { WeatherData } from './src/types/app';
import { LinearGradient } from 'expo-linear-gradient';
import { buildCurrentWeatherUrl } from './src/services/weatherApi';

export default function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const API_URL = buildCurrentWeatherUrl(city, API_KEY, 'metric');

  const onChangeSearch = (userInput: string) => {
    setSearchInput(userInput);
  };

  const onClickSetCity = (): void => {
    setCity(searchInput);
  };

  const resetCity = (): void => {
    setCity('');
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <>
      <View style={styles.navWrapper}>
        <Text style={styles.navTitle}>Open Weather</Text>
        <Image style={styles.navLogo} source={require('./assets/paper-plane2.png')} />
      </View>
      <View style={styles.container}>
        <LinearGradient colors={['#3286a7', '#b1dae1', '#d8eeee']} style={styles.background} />

        {!city ? (
          <>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Image style={styles.mainImage} source={require('./assets/cloud-sun.png')} />
            </View>
            <SearchBar
              searchInput={searchInput}
              onChangeSearch={onChangeSearch}
              onClickSetCity={onClickSetCity}
            />
          </>
        ) : (
          <CityScreen weatherData={weatherData} resetCity={resetCity} />
        )}
      </View>
      <View style={styles.navWrapper}>
        <Text style={styles.textSm}>Powered by: </Text>
        <Image style={styles.smallImage} source={require('./assets/cloud-sun.png')} />
        <Text style={styles.textSm}>OpenWeather API ©</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: '#BAE6FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSm: {
    fontSize: fontSizes.sm,
    color: '#fff',
    letterSpacing: 1.5,
  },
  navWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
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
  mainImage: {
    flex: 1,
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  smallImage: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
