import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Entypo';

const BooksDetailsScreen = ({ route, navigation }) => {
  const { bookid, imageurl, genres: passedGenres, description: passedDescription } = route.params;
  const [showMore, setShowMore] = useState(false);
  const [bookData, setBookData] = useState(null);
  const [genres, setGenres] = useState(Array.isArray(passedGenres) ? passedGenres : []);
  const [description, setDescription] = useState(passedDescription || '');
  const [modalVisible, setModalVisible] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePlayPress = () => {
    setModalVisible(true);
  };

  const handleReadBook = () => {
    setModalVisible(false);
    navigation.navigate('ChapterScreen');
  };

  const handleSaveToLibrary = () => {
    setModalVisible(false);
    alert('Book saved to library!');
  };

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://freeinvoicegenerator.pk/api/books/${bookid}`);
        const data = await response.json();

        console.log('API Response:', data);

        if (data && Array.isArray(data.genres)) {
          setGenres(data.genres);
        } else if (data.genres && typeof data.genres === 'string') {
          setGenres(data.genres.split(',').map((genre) => genre.trim()));
        } else {
          setGenres([]);
        }

        setDescription(data.description || passedDescription);
        setBookData(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setGenres([]); // Fallback to empty array if API call fails
      }
    };

    fetchBookDetails();
  }, [bookid, passedGenres, passedDescription]);

  useEffect(() => {
    const handleResize = () => {
      // Handle dimension changes if needed
    };

    const dimensionSubscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      dimensionSubscription?.remove(); // Correct way to remove the listener
    };
  }, []);

  const similarBooks = [
    { id: '1', title: 'My Playtime', author: 'Andrew Henry', image: 'https://keywordplanners.io/assets/Playtime1.png' },
    { id: '2', title: 'A Boy and His Dog', author: 'Tom Johnes', image: 'https://keywordplanners.io/assets/Boy1.png' },
    { id: '3', title: 'The Boy Who Flew', author: 'Fleur Hitchcock', image: 'https://keywordplanners.io/assets/FLew1.png' },
    { id: '4', title: 'Story Thieves', author: 'John Doe', image: 'https://keywordplanners.io/assets/storythieves.png' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={[styles.backButton, { marginLeft: 10 }]} onPress={handleBackPress}>
        <Icon name="chevron-left" size={30} color="#FFFFFF" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        {bookData && (
          <>
            <Image source={{ uri: imageurl }} style={styles.mainImage} />
            <View style={styles.categoryContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
                {genres && genres.length > 0 ? (
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
                <Ionicons name="book-outline" color="#F3C0A9" size={30} />
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
          </>
        )}
      </ScrollView>
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose an Option</Text>
            <Pressable style={styles.modalButton} onPress={handleReadBook}>
              <Text style={styles.modalButtonText}>Read Book</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={handleSaveToLibrary}>
              <Text style={styles.modalButtonText}>Save to Library</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, { backgroundColor: 'grey' }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#121212',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#E04B07',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BooksDetailsScreen;
