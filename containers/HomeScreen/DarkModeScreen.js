import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DarkModeScreen = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? 'white' : '#121212' }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={30} color={darkMode ? 'black' : 'white'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleDarkMode} style={styles.darkModeButton}>
        <FontAwesome name={darkMode ? 'sun-o' : 'moon-o'} size={30} color={darkMode ? 'black' : 'white'} />
      </TouchableOpacity>
      <Text style={[styles.text, { color: darkMode ? 'black' : 'white' }]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lacus aliquet, fermentum risus eget, luctus leo. Duis bibendum lectus et urna viverra, eu semper turpis consequat. Integer auctor odio non turpis efficitur, sed elementum libero fermentum. Cras dictum nunc ut bibendum efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin placerat purus in felis auctor, vel consectetur sem hendrerit. Donec posuere ante at felis tempus vestibulum.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  darkModeButton: {
    position: 'absolute',
    top: 60,
    right: 25,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 15,
  },
});

export default DarkModeScreen;
