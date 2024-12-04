import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const LibraryScreen = ({ navigation }) => {

  const [activeCategory, setActiveCategory] = useState('BOOKS');

  const [searchText, setSearchText] = useState('');

    const handleBackPress = () => {
    navigation.navigate('LibraryScreen');
  };

      const handleClickPress = () => {
    navigation.navigate('LibraryScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
<TouchableOpacity style={[styles.backButton, { marginLeft: 10 }]} onPress={handleBackPress}> 
<Icon name="chevron-back" size={30} color="#fff" /> 
</TouchableOpacity>
</View>
        <Text style={styles.headerText}>MY LIBRARY</Text>
      
{/* Search Bar */}
      <View style={styles.searchBar}>
        <AntDesign name="search1" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          color='white'
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>

        <View style={styles.textb}>
          <TouchableOpacity onPress={handleClickPress}>
        <Text style={styles.category}>BOOKS</Text>
        </TouchableOpacity>

         <TouchableOpacity onPress={() => setActiveCategory('BOOKS')}>
            <Text style={[styles.category, activeCategory === 'BOOKS' && styles.activeCategory]}>AUDIO BOOKS</Text>
          </TouchableOpacity>      
        </View>
      
      <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
        <View style={styles.bookContainer}>
          <Image source={require('../../assets/bookimagecircle.png')} style={styles.bookImage} />
          <Image source={require('../../assets/plus.png')} style={styles.plusIcon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.bookTitle}>for me</Text>
          <Text style={styles.author}>15 authors</Text>
          <Text style={styles.description}>
  <Text style={styles.bold}>21</Text>  books
</Text>
        </View>
        <Image source={require('../../assets/save.png')} style={styles.smallImage} />
      </TouchableOpacity>

 <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
        <View style={styles.bookContainer}>
          <Image source={require('../../assets/childrencircle.png')} style={styles.bookImage} />
          <Image source={require('../../assets/plus.png')} style={styles.plusIcon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.bookTitle}>children</Text>
          <Text style={styles.author}>25 authors</Text>
          <Text style={styles.description}>
  <Text style={styles.bold}>40</Text>  books
</Text>
        </View>
        <Image source={require('../../assets/save.png')} style={styles.smallImage} />
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
        <View style={styles.bookContainer}>
          <Image source={require('../../assets/bedtimecircle.png')} style={styles.bookImage} />
          <Image source={require('../../assets/plus.png')} style={styles.plusIcon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.bookTitle}>bedtime</Text>
          <Text style={styles.author}>30 authors</Text>
          <Text style={styles.description}>
  <Text style={styles.bold}>31</Text>  books
</Text>
        </View>
        <Image source={require('../../assets/save.png')} style={styles.smallImage} />
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
        <View style={styles.bookContainer}>
          <Image source={require('../../assets/bookimagecircle.png')} style={styles.bookImage} />
          <Image source={require('../../assets/plus.png')} style={styles.plusIcon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.bookTitle}>for me</Text>
          <Text style={styles.author}>15 authors</Text>
          <Text style={styles.description}>
  <Text style={styles.bold}>21</Text>  books
</Text>
        </View>
        <Image source={require('../../assets/save.png')} style={styles.smallImage} />
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
        <View style={styles.bookContainer}>
          <Image source={require('../../assets/childrencircle.png')} style={styles.bookImage} />
          <Image source={require('../../assets/plus.png')} style={styles.plusIcon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.bookTitle}>for me</Text>
          <Text style={styles.author}>15 authors</Text>
          <Text style={styles.description}>
  <Text style={styles.bold}>21</Text>  books
</Text>
        </View>
        <Image source={require('../../assets/save.png')} style={styles.smallImage} />
      </TouchableOpacity>
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
  headerText: {
    fontSize: 35,
    marginLeft: 20,
    backgroundColor: '#E04B07',
    width: '50%',
    color: '#ffffff',
    fontFamily: 'AlegreyaSC-Bold',
    borderRadius: 30
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
    marginTop: 10
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    paddingVertical: 13,
  },
  textb: {
  flexDirection: 'row',
  marginLeft: 20,
  },
    activeCategory: {
    color: '#E04B07',
  },
  category: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 15,
    fontFamily: 'AlegreyaSC-Bold',
  },
  button: {
    backgroundColor: '#292929',
    padding: 5,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    width: '95%',
    marginRight: 10,
    marginLeft: 10
  },
  bookContainer: {
    position: 'relative',
  },
  bookImage: {
    width: 105,
    height: 100,
    marginRight: 10,
  },
  plusIcon: {
    width: 15,
    height: 15,
    position: 'absolute',
    bottom: 80,
    right: 15,
  },
  textContainer: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 24,
    fontFamily: 'AlegreyaSC-Bold',
    color: '#fff'
  },
  author: {
    fontSize: 20,
    fontFamily: 'AlegreyaSC-Bold',
    fontWeight: 'bold',
    color: '#696969',
    marginBottom: 5,   
  },
  description: {
    fontSize: 18,
    fontFamily: 'AlegreyaSC-Bold',
    color: '#fff',
  },
  smallImage: {
    width: 80,
    height: 80,
    bottom: 18,
    left: 5
  },
  bold: {
    fontSize: 30,
    fontFamily: 'AlegreyaSC-Bold',
    color: '#fff',
  }
});

export default LibraryScreen;
