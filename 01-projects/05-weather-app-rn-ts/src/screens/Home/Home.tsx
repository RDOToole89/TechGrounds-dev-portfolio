import { useContext, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import { API_KEY } from '@env';

import { TopBar } from '../../components/TopBar/TopBar';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Footer } from '../../components/FooterBar/FooterBar';

import { CityScreen } from '../../screens/CityScreen/CityScreen';

import { WeatherData } from '../../types/app';
import { spacing } from '../../constants/sizes';
import { buildCurrentWeatherUrl } from '../../services/weatherApi';

import { LinearGradient } from 'expo-linear-gradient';
import { useKeyboard } from '@react-native-community/hooks';

import { MessageBuble } from '../../components/MessageBubble/MessageBubble';
import { DarkModeContext } from '../../context/DarkModeContext';
import useFetch from '../../hooks/useFetch';
import { Colors } from '../../constants/colors';
import { imgStyles } from '../../global/imgStyles';
import { handleTempGradients } from '../../utils/handleGradient';

export const Home = () => {
  const [cityDetailsActive, setCityDetailsActive] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [errorToggle, setErrorToggle] = useState(false);
  const [temperature, setTemperature] = useState(0);

  // default background gradient
  const [gradient, setGradient] = useState(['#3286a7', '#b1dae1', '#d8eeee']);

  // darkmode context
  const { dark } = useContext(DarkModeContext);
  const keyboard = useKeyboard();

  // Handler functions
  const handleOnChangeSearch = (userInput: string) => {
    setSearchInput(userInput);
  };

  const handleOnClickSetCity = () => {
    setCity(searchInput);
  };

  const handleResetDefaults = () => {
    setCity('');
    setSearchInput('');
  };

  const handleSwitchDetailsScreen = () => {
    setCityDetailsActive(!cityDetailsActive);
  };

  const handleCityDetailsActive = () => {
    setCityDetailsActive(true);
  };

  // Function which resets the app to default state
  const handleGoBackToMainSceen = () => {
    setCityDetailsActive(false);
    handleResetDefaults();
    setGradient(['#3286a7', '#b1dae1', '#d8eeee']);
  };

  // If a city query has been entered create the API_URL
  const API_URL = !city
    ? null
    : buildCurrentWeatherUrl(city, API_KEY, 'metric');

  // Custom fetching logic
  const { data, error, errorMessage } = useFetch<WeatherData>(API_URL);
  useEffect(() => {
    // Check if the query was valid if not show error

    if (error) setErrorToggle(true);

    // If the the request was succesfull set the weather state
    if (city && !error && data) {
      const { temp } = data.main;

      setTemperature(temp);
      setWeatherData(data);
    }

    () => {
      setErrorToggle(false);
    };
  }, [data, error]);

  useMemo(() => {
    handleTempGradients(temperature, setGradient);
  }, [temperature]);

  return (
    <>
      <TopBar handleGoBackToMainSceen={handleGoBackToMainSceen} />
      <KeyboardAvoidingView
        style={[
          styles.container,
          {
            alignItems: 'center',
            paddingTop: keyboard.keyboardShown ? spacing.md : 0,
          },
        ]}>
        {errorToggle && (
          <MessageBuble
            message={errorMessage}
            messageColor='hsla(0,72.2%,50.6%, .8)'
            setErrorToggle={setErrorToggle}
          />
        )}
        <LinearGradient colors={gradient} style={styles.background} />
        {dark && (
          <LinearGradient
            colors={['rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.4)', 'rgba(0,0,0,0.6)']}
            style={[styles.background, { zIndex: 0 }]}
          />
        )}

        {weatherData && city ? (
          <CityScreen
            weatherData={weatherData}
            handleCityDetailsActive={handleCityDetailsActive}
            handleGoBackToMainSceen={handleGoBackToMainSceen}
            handleSwitchDetailsScreen={handleSwitchDetailsScreen}
            cityDetailsActive={cityDetailsActive}
          />
        ) : (
          <View>
            <View style={styles.imageWrapper}>
              <Image
                style={imgStyles.mediumImage}
                source={require('../../../assets/cloud-sun.png')}
              />
            </View>
            <SearchBar
              searchInput={searchInput}
              handleOnChangeSearch={handleOnChangeSearch}
              handleOnClickSetCity={handleOnClickSetCity}
            />
          </View>
        )}
      </KeyboardAvoidingView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    backgroundColor: Colors.backgroundBlue,
    justifyContent: 'center',
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: spacing.md,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
