import React, { useState, useEffect, useCallback } from 'react';
import {Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as NavigationBar from 'expo-navigation-bar';
import AnimatedSplash from './screens/AnimatedSplash';
import MainContainer from './containers/MainContainer/MainContainer';
import SeeAllScreen from './containers/HomeScreen/SeeAllScreen';
import AudioBooksScreen from './containers/HomeScreen/AudioBooks/AudioBooksScreen';
import SeeAllAudioScreen from './containers/HomeScreen/AudioBooks/SeeAllAudioScreen';
import { useFonts } from 'expo-font';
import LibraryScreen from './containers/LibraryScreen/LibraryScreen';
import LibraryAudioScreen from './containers/LibraryScreen/LibraryAudioScreen';
import BooksListScreenHorror from './containers/HomeScreen/BooksListScreenHorror';
import MusicScreen from './containers/HomeScreen/MusicScreen';
import EpubViewerScreen from './containers/HomeScreen/EpubViewerScreen';
import AudioBooksListScreen from './containers/HomeScreen/AudioBooks/AudioBooksListScreen';
import BooksDetailsScreen from './containers/HomeScreen/BooksDetailsScreen';
import BooksListScreenRomance from './containers/HomeScreen/BookListScreenRomance';
import BooksListScreenScience from './containers/HomeScreen/BookListScreenScience';
import BooksListScreenReligion from './containers/HomeScreen/BooksListScreenReligion';
import BooksListScreenFairy from './containers/HomeScreen/BooksListScreenFairy';
import BooksListScreenAction from './containers/HomeScreen/BooksListScreenAction';
import BooksListScreenBiographical from './containers/HomeScreen/BooksListScreenBiographical';
import BooksListScreenDrama from './containers/HomeScreen/BooksListScreenDrama';
import BooksListScreenHistorical from './containers/HomeScreen/BooksListScreenHistorical';
import BooksListScreenHumorous from './containers/HomeScreen/BooksListScreenHumorous';
import BooksListScreenJuvenile from './containers/HomeScreen/BooksListScreenJuvenile';
import BooksListScreenLiterary from './containers/HomeScreen/BooksListScreenLiterary';
import BooksListScreenMystery from './containers/HomeScreen/BooksListScreenMystery';
import BooksListScreenOccult from './containers/HomeScreen/BooksListScreenOccult';
import BooksListScreenPoetry from './containers/HomeScreen/BooksListScreenPoetry';
import BooksListScreenScienceFiction from './containers/HomeScreen/BooksListScreenScienceFiction';
import BooksListScreenShortStories from './containers/HomeScreen/BooksListScreenShortStories';
import BooksListScreenThrillers from './containers/HomeScreen/BooksListScreenThrillers';
import BooksListScreenWar from './containers/HomeScreen/BooksListScreenWar';
import BooksListScreenWestern from './containers/HomeScreen/BooksListScreenWestern';
import BooksListScreenEnglish from './containers/HomeScreen/BooksListScreenEnglish';
import BooksListScreenHistory from './containers/HomeScreen/BooksListScreenHistory';
import BooksListScreenHumanScience from './containers/HomeScreen/BooksListScreenHumanScience';
import BooksListScreenHumor from './containers/HomeScreen/BooksListScreenHumor';
import BooksListScreenSocialScience from './containers/HomeScreen/BooksListScreenSocialScience';
import BooksListScreenTravel from './containers/HomeScreen/BooksListScreenTravel';
import AudioBooksDetailsScreen from './containers/HomeScreen/AudioBooks/AudioBooksDetailsScreen';
import AudioBooksDetailsScreen2 from './containers/HomeScreen/AudioBooks/AudioBooksDetailsScreen2';
import AudioBooksDetailsScreen3 from './containers/HomeScreen/AudioBooks/AudioBooksDetailsScreen3';
import AudioBooksDetailsScreen4 from './containers/HomeScreen/AudioBooks/AudioBooksDetailsScreen4';
import AudioBooksDetailsScreen5 from './containers/HomeScreen/AudioBooks/AudioBooksDetailsScreen5';
import MusicScreen2 from './containers/HomeScreen/MusicScreen2';
import MusicScreen3 from './containers/HomeScreen/MusicScreen3';
import MusicScreen4 from './containers/HomeScreen/MusicScreen4';
import MusicScreen5 from './containers/HomeScreen/MusicScreen5';
import ChapterScreen from './containers/HomeScreen/ChapterScreen';


const Stack = createStackNavigator();

const App = () => {
  const [isSplashFinished, setSplashFinished] = useState(false);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    setTimeout(() => {
      setSplashFinished(true);
    }, 6750); 

    const updateScreenWidth = () => {
      setScreenWidth(Dimensions.get('window').width);
    };
    Dimensions.addEventListener('change', updateScreenWidth);

    return () => {
      Dimensions.removeEventListener('change', updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 600) {
      console.log('Small screen size detected');
      // Perform actions specific to small screens
    } else {
      console.log('Large screen size detected');
      // Perform actions specific to large screens
    }
  }, [screenWidth]);

  
  const [fontsLoaded, fontError] = useFonts({
    'AlegreyaSC-Bold': require('./assets/fonts/AlegreyaSC-Bold.ttf'),
  });

  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        {isSplashFinished ? (
          <>
          
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="SeeAllScreen" component={SeeAllScreen} />
        <Stack.Screen name="AudioBooksScreen" component={AudioBooksScreen} />
        <Stack.Screen name="SeeAllAudioScreen" component={SeeAllAudioScreen} />
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
        <Stack.Screen name="LibraryAudioScreen" component={LibraryAudioScreen} />
        <Stack.Screen name="BooksListScreenHorror" component={BooksListScreenHorror} />
        <Stack.Screen name="MusicScreen" component={MusicScreen} />
        <Stack.Screen name="EpubViewerScreen" component={EpubViewerScreen} />
        <Stack.Screen name="AudioBooksListScreen" component={AudioBooksListScreen} />
        <Stack.Screen name="BooksDetailsScreen" component={BooksDetailsScreen} />
        <Stack.Screen name="BooksListScreenRomance" component={BooksListScreenRomance} />
        <Stack.Screen name="BooksListScreenScience" component={BooksListScreenScience} />
        <Stack.Screen name="BooksListScreenReligion" component={BooksListScreenReligion} />
        <Stack.Screen name="BooksListScreenFairy" component={BooksListScreenFairy} />
        <Stack.Screen name="BooksListScreenAction" component={BooksListScreenAction} />
        <Stack.Screen name="BooksListScreenBiographical" component={BooksListScreenBiographical} />
        <Stack.Screen name="BooksListScreenDrama" component={BooksListScreenDrama} />
        <Stack.Screen name="BooksListScreenHistorical" component={BooksListScreenHistorical} />
        <Stack.Screen name="BooksListScreenHumorous" component={BooksListScreenHumorous} />
        <Stack.Screen name="BooksListScreenJuvenile" component={BooksListScreenJuvenile} />
        <Stack.Screen name="BooksListScreenLiterary" component={BooksListScreenLiterary} />
        <Stack.Screen name="BooksListScreenMystery" component={BooksListScreenMystery} />
        <Stack.Screen name="BooksListScreenOccult" component={BooksListScreenOccult} />
        <Stack.Screen name="BooksListScreenPoetry" component={BooksListScreenPoetry} />
        <Stack.Screen name="BooksListScreenScienceFiction" component={BooksListScreenScienceFiction} />
        <Stack.Screen name="BooksListScreenShortStories" component={BooksListScreenShortStories} />
        <Stack.Screen name="BooksListScreenThrillers" component={BooksListScreenThrillers} />
        <Stack.Screen name="BooksListScreenWar" component={BooksListScreenWar} />
        <Stack.Screen name="BooksListScreenWestern" component={BooksListScreenWestern} />
        <Stack.Screen name="BooksListScreenEnglish" component={BooksListScreenEnglish} />
        <Stack.Screen name="BooksListScreenHistory" component={BooksListScreenHistory} />
        <Stack.Screen name="BooksListScreenHumanScience" component={BooksListScreenHumanScience} />
        <Stack.Screen name="BooksListScreenHumor" component={BooksListScreenHumor} />
        <Stack.Screen name="BooksListScreenSocialScience" component={BooksListScreenSocialScience} />
        <Stack.Screen name="BooksListScreenTravel" component={BooksListScreenTravel} />
        <Stack.Screen name="AudioBooksDetailsScreen" component={AudioBooksDetailsScreen} />
        <Stack.Screen name="AudioBooksDetailsScreen2" component={AudioBooksDetailsScreen2} />
        <Stack.Screen name="AudioBooksDetailsScreen3" component={AudioBooksDetailsScreen3} />
        <Stack.Screen name="AudioBooksDetailsScreen4" component={AudioBooksDetailsScreen4} />
        <Stack.Screen name="AudioBooksDetailsScreen5" component={AudioBooksDetailsScreen5} />
        <Stack.Screen name="MusicScreen2" component={MusicScreen2} />
        <Stack.Screen name="MusicScreen3" component={MusicScreen3} />
        <Stack.Screen name="MusicScreen4" component={MusicScreen4} />
        <Stack.Screen name="MusicScreen5" component={MusicScreen5} />
        <Stack.Screen name="ChapterScreen" component={ChapterScreen} />
          </>
        ) : (
          <Stack.Screen name="Splash" component={AnimatedSplash} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
