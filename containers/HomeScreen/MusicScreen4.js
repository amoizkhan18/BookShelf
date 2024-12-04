import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Image, Animated, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window');

const MusicScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

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
  }, [songIndex]);

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
      { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
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
    if (songIndex < songs.length - 1) {
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
    navigation.navigate('AudioBooksListScreen');
  };

  const formatTime = (timeMillis) => {
    const minutes = Math.floor(timeMillis / 60000);
    const seconds = Math.floor((timeMillis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={[styles.backButton, { marginLeft: 10 }]} onPress={handleBackPress}>
      <Icon name="chevron-left" size={30} color="#FFFFFF" />
      </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.artworkWrapper}>
            <Image source={require('../../assets/music.png')} style={styles.artworkImg} />
          </View>

          <View style={styles.titleContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="share-outline" size={35} color="#E04B07" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.title}>The Quiet Land</Text>
              <Text style={styles.artist}>Tom Johnes</Text>
            </View>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="bookmark-outline" size={35} color="#E04B07" />
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
            <TouchableOpacity onPress={skipToPrevious}>
              <Ionicons name="play-skip-back" size={35} color='#FFFFFF' />
            </TouchableOpacity>
            <TouchableOpacity onPress={playPauseSound} style={styles.playButton}>
              <Ionicons name={isPlaying ? "pause" : "play"} color="#F3C0A9" size={45} style={{ left: 3 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToNext}>
              <Ionicons name="play-skip-forward" size={35} color='#FFFFFF' />
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.lastContainer}>
          <Text style={styles.bottomText}>More from the artist</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
            <Image source={require('../../assets/storyschool.png')} style={styles.image} />
            <Image source={require('../../assets/snowwhite.png')} style={styles.image} />
            <Image source={require('../../assets/storythieves.png')} style={styles.image} />
            <Image source={require('../../assets/FLew1.png')} style={styles.image} />
            <Image source={require('../../assets/Boy1.png')} style={styles.image} />
            <Image source={require('../../assets/Playtime1.png')} style={styles.image} />
          </ScrollView>
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
    padding: 10,
    backgroundColor: '#121212'
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
    marginBottom: 20,
  },
  artworkWrapper: {
    width: width * 0.7,
    height: width * 0.7,
    marginBottom: 25,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5
  },
  artworkImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconButton: {
    marginHorizontal: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: '#545454',
  },
  progressContainer: {
    width: width * 0.9,
    height: 40,
    flexDirection: 'row'
  },
  progressLabelContainer: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progressLabelTxt: {
    color: '#fff'
  },
  musicControls: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 15
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