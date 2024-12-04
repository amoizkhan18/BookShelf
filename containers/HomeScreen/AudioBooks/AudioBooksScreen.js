import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const AudioBooksScreen = ({ navigation }) => {
  const [audioBooksButtonColor, setAudioBooksButtonColor] = useState('#E04B07');

  const handleBooksButtonPress = () => {
    setAudioBooksButtonColor('#292929');
    navigation.navigate('Home');
  };

  const handleAudioBooksButtonPress = () => {
    setAudioBooksButtonColor('#E04B07');
    // Navigate to Audio Books Screen
  };

  const handleSeeAllAudioPress = () => {
    navigation.navigate('SeeAllAudioScreen');
  };

  const handleCategoryClickPress = () => { 
    navigation.navigate('AudioBooksListScreen');
  };

  // Array of Trending Items  
  const trendingItems = [
    { id: 1, image: require('../../../assets/Playtime1.png'), title: 'Playtime', author: 'Edgar Allan Poe' },
    { id: 2, image: require('../../../assets/Boy1.png'), title: 'Boy & his dog', author: 'Various' },
    { id: 3, image: require('../../../assets/FLew1.png'), title: 'boy who flew', author: 'O. Henry' },
    { id: 4, image: require('../../../assets/storythieves.png'), title: 'Story thieves', author: 'Book Author 4' },
    { id: 5, image: require('../../../assets/storyschool.png'), title: 'story school', author: 'H. G. Wells' },
    { id: 6, image: require('../../../assets/snowwhite.png'), title: 'Snow White', author: 'Aesop' },
    { id: 7, image: require('../../../assets/Playtime1.png'), title: 'Book Name 7', author: 'Book Author 7' },
    { id: 8, image: require('../../../assets/Boy1.png'), title: 'Book Name 8', author: 'Book Author 8' },
    { id: 9, image: require('../../../assets/FLew1.png'), title: 'Book Name 9', author: 'Book Author 9' },
    { id: 10, image: require('../../../assets/storythieves.png'), title: 'Book Name 10', author: 'Book Author 10' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          {/* Top Left Logo */}
          <Image source={require('../../../assets/bsnewlogo.png')} style={styles.logo} />

          {/* Books Button */}
          <TouchableOpacity style={styles.button} onPress={handleBooksButtonPress}>
            <Text style={styles.buttonText}>Books</Text>
          </TouchableOpacity>

          {/* Audio Books Button */}
          <TouchableOpacity style={[styles.button1, { backgroundColor: audioBooksButtonColor }]} onPress={handleAudioBooksButtonPress}>
            <Text style={styles.buttonText}>Audio Books</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSeeAllAudioPress}>
          <Text style={styles.smallText}>See all</Text>
        </TouchableOpacity>

        {/* All Categories Heading */}
        <Text style={styles.heading}>ALL CATEGORIES</Text>

        {/* Categories */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={handleCategoryClickPress}>
            <Image source={require('../../../assets/audiohorror.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Horror</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audioromance.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Romance</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiofantasy.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Fantasy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiotravel.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Travel</Text>
          </TouchableOpacity>
        </View>

        {/* New & Trending Heading */}
        <Text style={styles.heading}>NEW & TRENDING</Text>

        {/* Trending Items */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.trendingContainer}>
          {trendingItems.map(item => (
            <View style={styles.trendingItem} key={item.id}>
              <Image source={item.image} style={styles.trendingImage} />
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
              <TouchableOpacity style={styles.playButton}>
                <EntypoIcon name="controller-play" size={25} color="#F3C0A9" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Popular Heading */}
        <Text style={styles.heading}>POPULAR</Text>

        {/* Popular Items */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.trendingContainer}>
          {trendingItems.map(item => (
            <View style={styles.trendingItem} key={item.id}>
              <Image source={item.image} style={styles.trendingImage} />
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
              <TouchableOpacity style={styles.playButton}>
                <EntypoIcon name="controller-play" size={25} color="#F3C0A9" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    top: 10
  },
  logo: {
    width: 35,
    height: 30,
    marginLeft: 10
  },
  button: {
    backgroundColor: '#292929',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    width: '15%',
    marginLeft: 10,
  },
  button1: {
    backgroundColor: '#292929',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    width: '25%',
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'AlegreyaSC-Bold',
    fontSize: 14
  },
  heading: {
    color: '#E04B07',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'AlegreyaSC-Bold',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 15
  },
  smallText: {
    color: '#E04B07',
    fontSize: 13,
    fontWeight: 'medium',
    fontFamily: 'AlegreyaSC-Bold',
    alignSelf: 'flex-end',
    marginRight: 10,
    textDecorationLine: 'underline',
    top: 30
  },
  imageContainer: {
    flexDirection: 'row',
    marginLeft: 5
  },
  trendingContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  trendingItem: {
    backgroundColor: '#292929',
    width: 120,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    paddingTop: 10,
  },
  trendingImage: {
    width: '70%',
    height: 110,
    marginBottom: 10,
  },
  bookTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'AlegreyaSC-Bold',
  },
  author: {
    color: '#9E909D',
    fontSize: 12,
    marginBottom: 10,
    fontFamily: 'AlegreyaSC-Bold',
  },
  playButton: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E04B07',
    bottom: 5,
  },
  categoryButton: {
    backgroundColor: '#292929',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    width: '47%',
    marginLeft: 7,
    marginTop: 5
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  categoryText: {
    color: '#FFFFFF',
    fontFamily: 'AlegreyaSC-Bold',
    fontSize: 15
  }
});

export default AudioBooksScreen;
