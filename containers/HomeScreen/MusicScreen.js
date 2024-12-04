import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Image, Animated, ScrollView, Share, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const MusicScreen = ({ route, navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);

const handlePlaybackSpeed = async () => {
  const newSpeed = playbackSpeed === 1.0 ? 1.5 : playbackSpeed === 1.5 ? 2.0 : 1.0;
  setPlaybackSpeed(newSpeed);
  if (sound) {
    await sound.setRateAsync(newSpeed, true);
  }
  Toast.show({
    type: 'success', // You can use 'success', 'error', or 'info'
    text1: `Playback Speed Changed`,
    text2: `Current Speed: ${newSpeed.toFixed(1)}x`,
  });
};

  const { audioUrl, partTitle } = route.params;

   const shareContent = async () => {
    try {
      const result = await Share.share({
        message: `Check out this audio: ${audioUrl}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type: ', result.activityType);
        } else {
          console.log('Content shared successfully!');
          Alert.alert('Success', 'Content shared successfully!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      Alert.alert('Error', 'Something went wrong while sharing.');
    }
  };


    const skipForward10 = async () => {
    if (sound) {
      const newPosition = Math.min(position + 10000, duration); // Add 10 seconds
      await sound.setPositionAsync(newPosition);
    }
  };

  const skipBackward10 = async () => {
    if (sound) {
      const newPosition = Math.max(position - 10000, 0); // Subtract 10 seconds
      await sound.setPositionAsync(newPosition);
    }
  };


  const songSlider = useRef(null);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      setSongIndex(index);
    });

    return () => {
      scrollX.removeAllListeners();
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    loadSound();
  }, [audioUrl]);

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    }
  }, [sound]);

  useEffect(() => {
    // Stop music when navigating back
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      if (sound) {
        sound.stopAsync();
      }
    });

    return unsubscribe;
  }, [navigation, sound]);

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
      setIsPlaying(status.isPlaying);
    }
  };

  const loadSound = async () => {
    if (sound) {
      await sound.unloadAsync();  
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: audioUrl },
      { shouldPlay: false } // Disable auto-play on load
    );
    setSound(newSound);
  };

  const playPauseSound = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    }
  };

  const skipToNext = () => {
    if (songIndex < 3 - 1) {
      songSlider.current.scrollToOffset({
        offset: (songIndex + 1) * width,
      });
    }
  };

  const skipToPrevious = () => {
    if (songIndex > 0) {
      songSlider.current.scrollToOffset({
        offset: (songIndex - 1) * width,
      });
    }
  };

  const handleReadPress = () => {
    navigation.navigate('DarkModeScreen');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const formatTime = (timeMillis) => {
    const minutes = Math.floor(timeMillis / 60000);
    const seconds = Math.floor((timeMillis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <SafeAreaView style={styles.container}>
<View style={styles.header}>
  <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
    <Icon name="chevron-left" size={30} color="#FFFFFF" />
  </TouchableOpacity>
  <Text style={styles.headerTitle}>{partTitle}</Text>
</View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.artworkWrapper}>
            <Image 
  source={{ uri: 'https://www.loyalbooks.com/image/detail/Moby-Dick-or-the-Whale.jpg' }} 
  style={styles.artworkImg} 
/>
          </View>

          <View style={styles.titleContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={shareContent}>
              <Ionicons name="share-outline" size={35} color="#E04B07" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Moby Dick</Text>
              <Text style={styles.artist}>Herman Mellvile</Text>
            </View>
            <TouchableOpacity onPress={handlePlaybackSpeed} style={styles.iconButton}>
               <MaterialCommunityIcons name="speedometer" size={35} color="#E04B07" />
               <Text style={styles.speedText}>{playbackSpeed.toFixed(1)}x</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Slider
              style={styles.progressContainer}
              value={(position / duration) * 100 || 0}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor='#FF681F'
              minimumTrackTintColor='#FF681F'
              maximumTrackTintColor='#fff'
              onSlidingComplete={async (value) => {
                if (sound) {
                  const seekPosition = (value / 100) * duration;
                  await sound.setPositionAsync(seekPosition);
                }
              }}
            />
            <View style={styles.progressLabelContainer}>
              <Text style={styles.progressLabelTxt}>{formatTime(position)}</Text>
              <Text style={styles.progressLabelTxt}>{formatTime(duration)}</Text>
            </View>
          </View>

          <View style={styles.musicControls}>
            <TouchableOpacity onPress={skipBackward10}>
              <MaterialCommunityIcons name="rewind-10" size={35} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={playPauseSound} style={styles.playButton}>
              <Ionicons
                name={isPlaying ? 'pause' : 'play'}
                color="#F3C0A9"
                size={45}
                style={{ left: 3 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipForward10}>
              <MaterialCommunityIcons name="fast-forward-10" size={35} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#121212'
  },
  headerTitle: {
  flex: 1,
  fontSize: 19,
  fontWeight: 'bold',
  color: '#E04B07',
  textAlign: 'center',
  fontFamily: 'AlegreyaSC-Bold',
},
  backButton: {
    position: 'absolute',
    marginLeft: 10
  },
  scrollView: {
    flex: 1,
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  artworkWrapper: {
    width: width * 0.7,
    height: width * 0.7,
    marginTop: 10
  },
  artworkImg: {
    width: '110%',
    height: '110%',
    right: 11,
    borderRadius: 10,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: 15,
    marginTop: 50
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 45
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE',
    fontFamily: 'AlegreyaSC-Bold',
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: '#545454',
    fontFamily: 'AlegreyaSC-Bold',
  },
  progressContainer: {
    width: width * 0.9,
    height: 40,
    flexDirection: 'row',
    marginTop: 60
  },
  progressLabelContainer: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelTxt: {
    color: '#fff',
    fontFamily: 'AlegreyaSC-Bold',
  },
  musicControls: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 30
  },
  playButton: {
    backgroundColor: 'black',
    width: 75,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E04B07',
    bottom: 20
  },
  speedText: {
  color: '#E04B07',
  fontSize: 14,
  marginLeft: 4,
  fontWeight: 'bold',
},
  lastContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  bottomText: {
    fontFamily: 'AlegreyaSC-Bold',
    fontSize: 17,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  horizontalScrollView: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 140,
    marginHorizontal: 8,
    borderRadius: 10, // Added border radius to the images for a polished look
  },
});

export default MusicScreen;
