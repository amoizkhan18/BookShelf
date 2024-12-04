import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, TextInput, ScrollView, ActivityIndicator, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import navigation

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  const navigation = useNavigation(); // Access navigation

  // Fetch books when search text changes
  useEffect(() => {
    if (searchText.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const searchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://freeinvoicegenerator.pk/api/books/search/${searchText}`);
        const data = await response.json();
        setSearchResults(data.books || data || []);
        setShowResults(true);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(searchBooks, 300); // Debounce to reduce API calls

    return () => clearTimeout(timeoutId); // Cleanup previous timeout on text change
  }, [searchText]);

  const renderSearchResultItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => selectBook(item)}>
      <Text style={styles.resultItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

const selectBook = (book) => {
  setShowResults(false);
  navigation.navigate('BooksDetailsScreen', {
    bookid: book.id,
    imageurl: book.image_url, // Ensure this field matches what you have in book details
    genres: book.genres,
    description: book.description,
  });
};

  const handleClearSearch = () => {
    setSearchText('');
    setSearchResults([]);
    setShowResults(false);
  };

  const handleHideResults = () => {
    if (searchText === '') {
      setShowResults(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); handleHideResults(); }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <AntDesign name="search1" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#666"
            onChangeText={setSearchText}
            value={searchText}
            onFocus={() => setShowResults(true)}
          />
          {searchText ? (
            <TouchableOpacity onPress={handleClearSearch}>
              <AntDesign name="closecircle" size={20} color="#666" />
            </TouchableOpacity>
          ) : null}
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#E04B07" />
        ) : showResults && searchResults.length > 0 ? (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSearchResultItem}
            style={styles.resultsList}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={true}
          />
        ) : null}

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>RECENT SEARCHES</Text>
          <View style={styles.recentSearchesContainer}>
            <TouchableOpacity style={[styles.searchItem, { borderColor: 'green' }]}>
              <Text style={styles.searchItemText} numberOfLines={1} ellipsizeMode="tail">SAPPHIRE LADY</Text>
              <Image source={require('../../assets/sapphire.png')} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.searchItem, { borderColor: 'red' }]}>
              <Text style={styles.searchItemText} numberOfLines={1} ellipsizeMode="tail">HOUSE OF EARTH & BLOOD</Text>
              <Image source={require('../../assets/houseofearth.png')} style={styles.image} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#121212',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#292929',
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: 'white',
    paddingVertical: 13,
  },
  resultsList: {
    backgroundColor: '#292929',
    borderRadius: 10,
    maxHeight: 200,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  resultItemText: {
    color: 'white',
    fontSize: 16,
  },
  heading: {
    color: '#E04B07',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  recentSearchesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 10,
  },
  searchItemText: {
    textAlign: 'center',
    color: '#F3DDD3',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
