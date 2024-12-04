import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Entypo';

const AudioBooksDetailsScreen = ({ navigation }) => {
  const [showMore, setShowMore] = useState(false);

  // Hardcoded data
  const genres = ['Horror'];
  const description = 'Victor Frankenstein discovers the secret of animating lifeless matter and, by assembling body parts, creates the monster who has no name in the book. Rejected by society, the Monster vows revenge on his creator. (Summary written by Gesine) Note: Audio files were volume adjusted and re-uploaded May 3, 2010.';
  const imageurl = 'https://www.loyalbooks.com/image/detail/Moby-Dick-or-the-Whale.jpg';

  const audiobookParts = [
    { id: '1', title: 'Part 1', url: 'http://www.archive.org/download/moby_dick_librivox/mobydick_000_melville_64kb.mp3' },
    { id: '2', title: 'Part 2', url: 'http://www.archive.org/download/moby_dick_librivox/mobydick_001_002_melville_64kb.mp3' },
    { id: '3', title: 'Part 3', url: 'http://www.archive.org/download/moby_dick_librivox/mobydick_003_melville_64kb.mp3' },
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePlayPress = (url) => {
    navigation.navigate('MusicScreen', { audioUrl: url });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={[styles.backButton, { marginLeft: 10 }]} onPress={handleBackPress}>
        <Icon name="chevron-left" size={30} color="#FFFFFF" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: imageurl }} style={styles.mainImage} />
        <View style={styles.categoryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
            {genres.length > 0 ? (
              genres.map((genre, index) => (
                <TouchableOpacity key={index} style={styles.category}>
                  <Text style={styles.categoryText}>{genre}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text>No genres available</Text>
            )}
          </ScrollView>
          <Text style={styles.description}>
            {showMore ? description : `${description.slice(0, 100)}...`}
          </Text>
          <TouchableOpacity style={styles.moreButton} onPress={() => setShowMore(!showMore)}>
            <Text style={styles.moreButtonText}>{showMore ? 'Less' : 'More'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <Text style={styles.audiobookPartsHeading}>Audiobook Parts</Text>
        <FlatList
          data={audiobookParts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.partCard} onPress={() => handlePlayPress(item.url)}>
              <Text style={styles.partTitle}>{item.title}</Text>
              <Ionicons name="play" size={25} color="#E04B07" />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  mainImage: {
    width: '50%',
    height: 270,
    marginTop: 20,
    alignSelf: 'center',
  },
  categoryContainer: {
    padding: 20,
    width: '100%',
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  category: {
    backgroundColor: '#E04B07',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
  },
  description: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 10,
  },
  moreButton: {
    backgroundColor: '#E04B07',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  moreButtonText: {
    color: 'white',
  },
  divider: {
    height: 1,
    backgroundColor: 'grey',
    width: '90%',
    marginVertical: 20,
  },
  audiobookPartsHeading: {
    color: '#E04B07',
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontFamily: 'AlegreyaSC-Bold',
    marginBottom: 10
  },
  partCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    width: '95%',
    alignSelf: 'center',
  },
  partTitle: {
    color: 'white',
    fontSize: 16,
  },
});

export default AudioBooksDetailsScreen;
