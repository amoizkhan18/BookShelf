import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';

const AudioBooksListScreen = ({ navigation }) => {
  const [booksButtonColor, setBooksButtonColor] = useState('#E04B07');

  const audioBookData = [
    {
      id: 1,
      title: 'Moby Dick',
      author: 'Herman Mellvile',
      imageurl: 'https://www.loyalbooks.com/image/detail/Moby-Dick-or-the-Whale.jpg',
      screenName: 'AudioBooksDetailsScreen',
    },
    {
      id: 2,
      title: 'The Odyssey',
      author: 'Homer',
      imageurl: 'https://www.loyalbooks.com/image/detail/Odyssey.jpg',
      screenName: 'AudioBooksDetailsScreen2',
    },
    {
      id: 3,
      title: 'Little Women',
      author: 'Louisa May Alcott',
      imageurl: 'https://www.loyalbooks.com/image/detail/Little-Women-Louisa-May-Alcott.jpg',
      screenName: 'AudioBooksDetailsScreen3',
    },
    {
      id: 4,
      title: 'Warlord of Mars',
      author: 'Edgar Rice Burroughs',
      imageurl: 'https://www.loyalbooks.com/image/detail/Warlord-of-Mars.jpg',
      screenName: 'AudioBooksDetailsScreen4',
    },
    {
      id: 5,
      title: 'His Last Bow',
      author: 'Sir Arthur Conan Doyle',
      imageurl: 'https://www.loyalbooks.com/image/detail/his-last-bow-by-sir-arthur-conan-doyle.jpg',
      screenName: 'AudioBooksDetailsScreen5',
    },
  ];

  const handleBooksButtonPress = () => {
    setBooksButtonColor('#E04B07');
  };

  const handleClickPress = () => {
    navigation.navigate('Home');
  };

  const handleBackPress = () => {
    navigation.navigate('AudioBooksScreen');
  };

  const handlePress = (book) => {
    navigation.navigate(book.screenName); // Navigate to different screens based on book
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={[styles.backButton, { marginLeft: 10 }]} onPress={handleBackPress}>
            <Icon name="chevron-left" size={30} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: booksButtonColor }]} onPress={handleBooksButtonPress}>
            <Text style={styles.buttonText}>Audio Books</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} onPress={handleClickPress}>
            <Text style={styles.buttonText}>Books</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>HORROR</Text>

        {audioBookData.map((book, index) => (
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
            <TouchableOpacity style={styles.downloadButton}>
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
    backgroundColor: '#121212'
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
    width: '25%',
    marginLeft: 10,
  },
  button1: {
    backgroundColor: '#292929',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    width: '15%',
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
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 15
  },
  categoryContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  category: {
    backgroundColor: '#292929',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5
  },
  categoryImage: {
    width: 100,
    height: 135,
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

export default AudioBooksListScreen;
