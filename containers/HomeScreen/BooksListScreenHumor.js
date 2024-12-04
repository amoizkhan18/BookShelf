import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BooksListScreenHumor = ({ navigation }) => {
  const [booksButtonColor, setBooksButtonColor] = useState('#E04B07');
  const [bookData, setBookData] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://freeinvoicegenerator.pk/api/books/genres/Humor');
        const data = await response.json();

        const bookDetails = data.map(book => ({
          id: book.id,
          title: book.title,
          author: book.author,
          imageurl: book.imageurl,
          genres: book.genres,
          description: book.bookdesc, // Use bookdesc column here
        }));

        setBookData(bookDetails);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBooksButtonPress = () => {
    setBooksButtonColor('#E04B07');
  };

  const handleClickPress = () => {
    navigation.navigate('AudioBooksScreen');
  };

 const handleBackPress = () => {
  navigation.goBack();
};

  const handlePress = (book) => {
    navigation.navigate('BooksDetailsScreen', {
      bookid: book.id,
      genres: book.genres,
      description: book.description, // Pass description here
      imageurl: book.imageurl,
    });
  };

  useEffect(() => {
    const updateLayout = () => {
      setWindowDimensions(Dimensions.get('window'));
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);

    return () => {
      if (subscription && subscription.remove) {
        subscription.remove();
      }
    };
  }, []);

    const handleDownloadPress = async (book) => {
    try {
      const existingBooks = await AsyncStorage.getItem('libraryBooks');
      let updatedBooks = existingBooks ? JSON.parse(existingBooks) : [];

      // Check if the book already exists in the library
      const bookExists = updatedBooks.some(storedBook => storedBook.id === book.id);

      if (!bookExists) {
        updatedBooks.push(book); // Add the new book only if it doesn't already exist
        await AsyncStorage.setItem('libraryBooks', JSON.stringify(updatedBooks));
        Alert.alert('Success', 'Book added to Library');
      } else {
        Alert.alert('Notice', 'This book is already in the Library');
      }
    } catch (error) {
      console.error('Error saving book to library:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={[styles.backButton, { marginLeft: 10 }]} onPress={handleBackPress}>
            <Icon name="chevron-left" size={30} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: booksButtonColor }]} onPress={handleBooksButtonPress}>
            <Text style={styles.buttonText}>Books</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} onPress={handleClickPress}>
            <Text style={styles.buttonText}>Audio Books</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>HUMOR</Text>

        {bookData.map((book, index) => (
          <TouchableOpacity key={index} style={styles.categoryContainer} onPress={() => handlePress(book)}>
            <View style={styles.category}>
              <Image
                source={{ uri: book.imageurl }}
                style={styles.categoryImage}
              />
              <View style={styles.categoryContent}>
                <Text style={styles.categoryTitle}>{book.title}</Text>
                <Text style={styles.categorySubtitle}>{book.author}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.downloadButton} onPress={() => handleDownloadPress(book)}>
              <Ionicons name="add-outline" size={35} color="#F3C0A9" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
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
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    fontSize: 14,
  },
  heading: {
    color: '#E04B07',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'AlegreyaSC-Bold',
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 15,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  category: {
    backgroundColor: '#292929',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
  },
  categoryImage: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  categoryContent: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 10,
  },
  categoryTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'AlegreyaSC-Bold',
    marginBottom: 5,
  },
  categorySubtitle: {
    color: '#696969',
    fontSize: 20,
    marginBottom: 5,
    fontFamily: 'AlegreyaSC-Bold',
  },
  downloadButton: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E04B07',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default BooksListScreenHumor;
