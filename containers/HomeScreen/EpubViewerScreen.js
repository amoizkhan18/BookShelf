import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Entypo';
import Epub from '@epubjs-react-native/core';

const EpubViewerScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const { epubUrl } = route.params; // assuming epubUrl is passed as a parameter

  useEffect(() => {
    const onChange = ({ window, screen }) => {
      // Handle dimension change if needed
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  const handleShare = () => {
    // Implement share functionality here
  };

  const toggleBannerVisibility = () => {
    setIsBannerVisible(!isBannerVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.bannerIcons}>
          <Ionicons name="volume-high-outline" size={30} color="white" style={styles.icon} />
          <TouchableOpacity onPress={toggleBannerVisibility}>
            <Ionicons name="book-outline" size={30} color={isBannerVisible ? "#E04B07" : "white"} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Ionicons name="share-outline" size={30} color="white" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.epubContainer}>
        {isLoading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#E04B07" />
          </View>
        )}
        <Epub
          src={epubUrl}
          flow="paginated"
          onReady={() => setIsLoading(false)}
          onError={(error) => console.error('EPUB loading error:', error)}
          style={styles.epub}
        />
      </View>

      {isBannerVisible && (
        <View style={styles.bottomBanner}>
          <Text style={styles.heading}>Similar Books</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            <Image source={require('../../assets/storyschool.png')} style={styles.image} />
            <Image source={require('../../assets/snowwhite.png')} style={styles.image} />
            <Image source={require('../../assets/storythieves.png')} style={styles.image} />
            <Image source={require('../../assets/FLew1.png')} style={styles.image} />
            <Image source={require('../../assets/Boy1.png')} style={styles.image} />
            <Image source={require('../../assets/Playtime1.png')} style={styles.image} />
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#121212',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  bannerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  epubContainer: {
    flex: 1,
  },
  epub: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBanner: {
    height: 140,
    backgroundColor: '#121212',
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingVertical: 8,
  },
  heading: {
    color: '#E04B07',
    fontSize: 18,
    marginBottom: 5,
    textDecorationLine: 'underline',
    fontFamily: 'AlegreyaSC-Bold',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  image: {
    width: 80,
    height: 140,
    marginHorizontal: 8,
  },
});

export default EpubViewerScreen;
