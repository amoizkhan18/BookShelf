import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Entypo';

const AudioBooksDetailsScreen = ({ navigation }) => {
  const [showMore, setShowMore] = useState(false);

  // Hardcoded data
  const genres = ['Horror'];
  const description = 'Terrifically popular science fiction novel by renowned writer HG Wells, about a scientist discovering how to achieve invisibility. But, in his case, being out of sight evidently does NOT mean out of mind. (Summary by Cathy Barratt) Narrated by Cathy Barratt';
  const imageurl = 'https://ia600200.us.archive.org/9/items/invisibleman_1209_librivox_cb/invisible_man_1209.jpg';

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePlayPress = () => {
    // Replace 'MusicScreen' with the actual screen you want to navigate to
    navigation.navigate('MusicScreen4');
  };

  const similarBooks = [
    { id: '1', title: 'My Playtime', author: 'Andrew Henry', image: 'https://keywordplanners.io/assets/Playtime1.png' },
    { id: '2', title: 'A Boy and His Dog', author: 'Tom Johnes', image: 'https://keywordplanners.io/assets/Boy1.png' },
    { id: '3', title: 'The Boy Who Flew', author: 'Fleur Hitchcock', image: 'https://keywordplanners.io/assets/FLew1.png' },
    { id: '4', title: 'Story Thieves', author: 'John Doe', image: 'https://keywordplanners.io/assets/storythieves.png' }
  ];

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
          <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
            <Ionicons name="play" color="#F3C0A9" size={35} style={{ left: 2 }} />
          </TouchableOpacity>
          <Text style={styles.description}>
            {showMore ? description : `${description.slice(0, 100)}...`}
          </Text>
          <TouchableOpacity style={styles.moreButton} onPress={() => setShowMore(!showMore)}>
            <Text style={styles.moreButtonText}>{showMore ? 'Less' : 'More'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <Text style={styles.similarBooksHeading}>Similar Books</Text>
        <FlatList
          data={similarBooks}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookCard}>
              <Image source={{ uri: item.image }} style={styles.bookImage} />
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
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
  playButton: {
    backgroundColor: 'black',
    width: 55,
    height: 55,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E04B07',
    alignSelf: 'flex-end',
    marginTop: 0,
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
  similarBooksHeading: {
    color: '#E04B07',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  bookCard: {
    width: 150,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  bookImage: {
    width: 70,
    height: 110,
    marginBottom: 5,
    marginTop: 5,
  },
  bookTitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  bookAuthor: {
    color: 'grey',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default AudioBooksDetailsScreen;
