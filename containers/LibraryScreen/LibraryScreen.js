import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';

const LibraryScreen = () => {
  const [libraryBooks, setLibraryBooks] = useState([]);

  // Fetch books from AsyncStorage when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      const fetchLibraryBooks = async () => {
        try {
          const storedBooks = await AsyncStorage.getItem('libraryBooks');
          if (storedBooks !== null) {
            setLibraryBooks(JSON.parse(storedBooks));
          }
        } catch (error) {
          console.error('Error fetching books from library:', error);
        }
      };

      fetchLibraryBooks();
    }, [])
  );

  // Handle book removal from library
  const handleRemovePress = async (bookId) => {
    try {
      const updatedBooks = libraryBooks.filter(book => book.id !== bookId); // Filter out the book to be removed
      setLibraryBooks(updatedBooks); // Update state
      await AsyncStorage.setItem('libraryBooks', JSON.stringify(updatedBooks)); // Update AsyncStorage
      alert('Book removed from Library');
    } catch (error) {
      console.error('Error removing book from library:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>My Library</Text>
        
        {libraryBooks.length > 0 ? (
          libraryBooks.map((book, index) => (
            <View key={index} style={styles.bookContainer}>
              <Image source={{ uri: book.imageurl }} style={styles.bookImage} />
              <View style={styles.bookDetails}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemovePress(book.id)}
                >
                  <Ionicons name="trash-outline" size={24} color="#E04B07" />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noBooksText}>No books in your library yet.</Text>
        )}
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
  heading: {
    color: '#E04B07',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'AlegreyaSC-Bold',
  },
  bookContainer: {
    flexDirection: 'row',
    backgroundColor: '#292929',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  bookImage: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  bookDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  bookTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'AlegreyaSC-Bold',
  },
  bookAuthor: {
    color: '#696969',
    fontSize: 14,
    fontFamily: 'AlegreyaSC-Bold',
  },
  removeButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  noBooksText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LibraryScreen;
