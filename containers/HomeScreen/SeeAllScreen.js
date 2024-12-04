import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SeeAllScreen = ({ navigation }) => {
  const [booksButtonColor, setBooksButtonColor] = useState('#E04B07');

  const handleBooksButtonPress = () => {
    setBooksButtonColor('#E04B07');
  };

  const handleBackPress = () => {
    navigation.navigate('Home');
  };

  const handleCategoryClickPress = (screenName) => {
    navigation.navigate(screenName);
  };

   const handleClickPress = () => {
    navigation.navigate('AudioBooksScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Icon name="chevron-back" size={30} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: booksButtonColor }]} onPress={handleBooksButtonPress}>
            <Text style={styles.buttonText}>Books</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} onPress={handleClickPress}>
            <Text style={styles.buttonText}>Audio Books</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>ALL CATEGORIES</Text>

        {/* Existing Categories */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenHorror')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Horror.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Horror</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenRomance')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Romance.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Romance</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenScience')}>
           <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Science.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Science</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenReligion')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Religion.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Religion</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenAction')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Action.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Action</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenBiographical')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Biographical.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Biographical</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenDrama')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Drama.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Drama</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenFairy')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/FairyTales.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Fairy Tales</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenHistorical')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Historical.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Historical</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenHumorous')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Humorous.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Humorous</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenAction')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Juvenile.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Juvenile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenLiterary')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Literary.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Literary</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenMystery')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Mystery.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Mystery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenOccult')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Occult.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Occult</Text>
          </TouchableOpacity>
        </View>

        {/* Added 4 More Categories */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenPoetry')}>
           <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Poetry.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Poetry</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenScienceFiction')}>
           <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/ScienceFiction.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Science Fiction</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenShortStories')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/ShortStories.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Short Stories</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenThrillers')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Thrillers.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Thrillers</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenWar')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/War.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>War</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenWestern')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Western.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Western</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenEnglish')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/English.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>English</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenHistory')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/History.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>History</Text>
          </TouchableOpacity>

        </View>

        {/* New 4 Categories */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenHumanScience')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/HumanScience.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Human Science</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenHumor')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Humor.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Humor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenSocialScience')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/SocialScience.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Social Science</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryClickPress('BooksListScreenTravel')}>
            <Image source={{ uri: 'https://keywordplanners.io/assets/categoryimages/Travel.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Travel</Text>
          </TouchableOpacity>
        </View>
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
  backButton: {
    marginLeft: 10,
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
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 15,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  categoryButton: {
    backgroundColor: '#292929',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    width: '47%',
    marginRight: 10,
    marginBottom: 10,
  },
  categoryImage: {
    width: 50,
    height: 70,
    marginRight: 10,
  },
  categoryText: {
    color: '#FFFFFF',
    fontFamily: 'AlegreyaSC-Bold',
    fontSize: 14,
  },
});

export default SeeAllScreen;
