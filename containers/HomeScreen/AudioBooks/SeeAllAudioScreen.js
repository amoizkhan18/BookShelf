import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SeeAllAudioScreen = ({ navigation }) => {
  const [booksButtonColor, setBooksButtonColor] = useState('#E04B07');

  const handleBooksButtonPress = () => {
    setBooksButtonColor('#E04B07');
    // Navigate to Books Screen
  };

  const handleAudioBooksButtonPress = () => {
    setAudioBooksButtonColor('#292929');
    // Navigate to Audio Books Screen
  };

  const handleSeeAllPress = () => {
    navigation.navigate('SeeAllScreen');
  };

  const handlePress = () => {
    navigation.navigate('Home');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClickPress = () => {
    navigation.navigate('Home');
  };

  const handleCategoryClickPress = () => {
    navigation.navigate('AudioBooksListScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={[styles.backButton, { marginLeft: 10 }]} onPress={handleBackPress}>
            <Icon name="chevron-back" size={30} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleClickPress}>
            <Text style={styles.buttonText}>Books</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button1, { backgroundColor: booksButtonColor }]} onPress={handleBooksButtonPress}>
            <Text style={styles.buttonText}>Audio Books</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>ALL CATEGORIES</Text>

        {/* Horror and Romance Category */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={handleCategoryClickPress}>
            <Image source={require('../../../assets/audiohorror.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Horror</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audioromance.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Romance</Text>
          </TouchableOpacity>
        </View>

        {/* Fantasy and Travel Category */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiofantasy.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Fantasy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiotravel.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Travel</Text>
          </TouchableOpacity>
        </View>

        {/* Short Stories and Children Category */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audioshortstories.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Short Stories</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiochildren.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Children</Text>
          </TouchableOpacity>
        </View>

        {/* Science Fiction and Adventure Category */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiohistory.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audioadventure.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Adventure</Text>
          </TouchableOpacity>
        </View>

        {/* Psychology and Religion Category */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiopsychology.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Psychology</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audioreligion.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Religion</Text>
          </TouchableOpacity>
        </View>

        {/* Philosophy and Comedy Category */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiophilosophy.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Philosophy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiocomedy.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Comedy</Text>
          </TouchableOpacity>
        </View>

        {/* Nature and Biography Category */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audionature.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Nature</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiobiography.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Biography</Text>
          </TouchableOpacity>
        </View>

        {/* Additional Categories */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audioscience.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Science</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiobible.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Bible</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiopsychology.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Psychology</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiolove.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Love</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audiowar.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>War</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image source={require('../../../assets/audioteen.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Teen</Text>
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
    marginRight: 5,
    marginTop: 10,
  },
  categoryButton: {
    backgroundColor: '#292929',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    width: '47%',
    marginLeft: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  categoryText: {
    color: '#FFFFFF',
    fontFamily: 'AlegreyaSC-Bold',
    fontSize: 15,
  },
});

export default SeeAllAudioScreen;
