import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import SplashScreen from 'expo-splash-screen';

const HomeScreen = ({ navigation }) => {
  const [booksButtonColor, setBooksButtonColor] = useState('#E04B07');

  const [fontsLoaded, fontError] = useFonts({
    'AlegreyaSC-Bold': require('../../assets/fonts/AlegreyaSC-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleBooksButtonPress = () => {
    setBooksButtonColor('#E04B07');
    // Navigate to Books Screen
  };

  const handleAudioBooksButtonPress = () => {
    setBooksButtonColor('#292929');
    // Navigate to Audio Books Screen
  };

  const handleSeeAllPress = () => {
    navigation.navigate('SeeAllScreen');
  };

  const handlePress = () => {
    navigation.navigate('AudioBooksScreen');
  };

  const handleHorrorCategoryClickPress = () => {
    navigation.navigate('BooksListScreenHorror');
  };

    const handleRomanceCategoryClickPress = () => {
    navigation.navigate('BooksListScreenRomance');
  };

      const handleScienceCategoryClickPress = () => {
    navigation.navigate('BooksListScreenScience');
  };

        const handleReligionCategoryClickPress = () => {
    navigation.navigate('BooksListScreenReligion');
  };

  // Array of Trending Items
  const trendingItems = [
    { id: 1, image: require('../../assets/Playtime1.png'), title: 'Playtime', author: 'Edgar Allan Poe' },
    { id: 2, image: require('../../assets/Boy1.png'), title: 'Boy & his dog', author: 'Various' },
    { id: 3, image: require('../../assets/FLew1.png'), title: 'boy who flew', author: 'O. Henry' },
    { id: 4, image: require('../../assets/storythieves.png'), title: 'Story thieves', author: 'Book Author 4' },
    { id: 5, image: require('../../assets/storyschool.png'), title: 'story school', author: 'H. G. Wells' },
    { id: 6, image: require('../../assets/snowwhite.png'), title: 'Snow White', author: 'Aesop' },
    { id: 7, image: require('../../assets/Playtime1.png'), title: 'Book Name 7', author: 'Book Author 7' },
    { id: 8, image: require('../../assets/Boy1.png'), title: 'Book Name 8', author: 'Book Author 8' },
    { id: 9, image: require('../../assets/FLew1.png'), title: 'Book Name 9', author: 'Book Author 9' },
    { id: 10, image: require('../../assets/storythieves.png'), title: 'Book Name 10', author: 'Book Author 10' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          {/* Top Left Logo */}
          <Image source={require('../../assets/bsnewlogo.png')} style={styles.logo} />

          {/* Books Button */}
          <TouchableOpacity style={[styles.button, { backgroundColor: booksButtonColor }]} onPress={handleBooksButtonPress}>
            <Text style={styles.buttonText}>Books</Text>
          </TouchableOpacity>

          {/* Audio Books Button */}
          <TouchableOpacity style={styles.button1} onPress={handlePress}>
            <Text style={styles.buttonText}>Audio Books</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSeeAllPress}>
          <Text style={styles.smallText}>See all</Text>
        </TouchableOpacity>

        {/* All Categories Heading */}
        <Text style={styles.heading}>ALL CATEGORIES</Text>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={handleHorrorCategoryClickPress}>
            <Image source={require('../../assets/categoryimages/Horror.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Horror</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={handleRomanceCategoryClickPress}>
            <Image source={require('../../assets/categoryimages/Romance.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Romance</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={handleScienceCategoryClickPress}>
            <Image source={require('../../assets/categoryimages/Science.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Science</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={handleReligionCategoryClickPress}>
            <Image source={require('../../assets/categoryimages/Religion.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Religion</Text>
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
    color: '#ffffff',
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
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10
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
    width: 50,
    height: 70,
    marginRight: 10,
  },
  categoryText: {
    color: '#FFFFFF',
    fontFamily: 'AlegreyaSC-Bold',
    fontSize: 15
  },
  trendingContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  trendingItem: {
    backgroundColor: '#292929',
    width: 110,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 10
  },
  trendingImage: {
    width: '70%',
    height: 120,
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
});

export default HomeScreen;
