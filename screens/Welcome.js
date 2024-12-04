import React, { useEffect, useRef, useState } from 'react';
import { Image, Platform, SafeAreaView, StatusBar, Text, TouchableWithoutFeedback, View, Dimensions, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IMAGES from '../assets/images';

const WelcomeScreen = () => {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
    checkCarouselStatus(); // Check if carousel has been shown before
  }, []);

  const _carousel = useRef();
  const navigation = useNavigation();

  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [carouselShown, setCarouselShown] = useState(false); // Flag to track carousel display status

  const data = [
    {
      id: 1,
      title: 'Dive into stories, whether in pages or waves of sound',
      image: IMAGES.BROWSE,
      description:
        'Discover worlds within pages, where every story is an invitation to explore',
    },
    {
      id: 2,
      title: 'Create your library',
      image: IMAGES.PAY,
      description:
        'Add the books and topics you like to your library. Then you can easily find the newest books on those topics',
    },
    {
      id: 3,
      title: 'Welcome!\nPages hold worlds untold',
      image: IMAGES.TRACK,
      description: 'Discover the allure of past epochs, delve into timeless stories and historical accounts, embark on adventures within these timeless literary treasures available online.',
    },
  ];

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            height: Dimensions.get('window').width,
            width: Dimensions.get('window').width,
          }}
        />
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#ffffff', fontFamily: 'AlegreyaSC-Bold', fontSize: 32, textAlign: 'center' }}>{item.title}</Text>
          <Text style={{ marginTop: 20, fontSize: 16, color: '#ffffff', fontFamily: 'AlegreyaSC-Bold', fontSize: 16, textAlign: 'center' }}>{item.description}</Text>
        </View>
      </View>
    );
  };

  const handleNextButtonPress = () => {
    if (activeDotIndex === data.length - 1) {
      navigation.navigate('MainContainer'); // Navigate to the main screen after carousel
      setCarouselShown(true); // Set flag to indicate carousel has been shown
      AsyncStorage.setItem('carouselShown', 'true'); // Store flag in AsyncStorage
    } else {
      _carousel.current.snapToItem(activeDotIndex + 1);
    }
  };

  const checkCarouselStatus = async () => {
    try {
      const carouselStatus = await AsyncStorage.getItem('carouselShown');
      if (carouselStatus === 'true') {
        // If carousel has been shown before, navigate to the main screen
        navigation.navigate('MainContainer');
      }
    } catch (error) {
      console.log('Error checking carousel status:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#8B4513" barStyle="light-content" />
      <Carousel
        ref={_carousel}
        data={data}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={(index) => setActiveDotIndex(index)}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pagination
          carouselRef={_carousel}
          activeDotIndex={activeDotIndex}
          dotsLength={3}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 10,
            backgroundColor: '#E04B07',
          }}
          inactiveDotStyle={{
            width: 15,
            height: 15,
            backgroundColor: '#292929',
          }}
        />
        <View>
          <TouchableWithoutFeedback onPress={handleNextButtonPress}>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <Image
                source={require('../assets/images/nextbutton.png')}
                style={{ width: 150, height: 60, marginRight: 0 }} // adjust the width and height as needed
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#121212',
  },
});

export default WelcomeScreen;
