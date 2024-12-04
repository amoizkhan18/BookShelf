import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Popup = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.headingText}>Summary</Text>
          <ScrollView
            contentContainerStyle={styles.descriptionContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.modalText}>
              Once upon a time there was a land where no man had ever trod. It lay in a quiet valley between two rugged mountains, and the people who lived on either side of the valley.
            </Text>
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // semi-transparent black background
  },
  modalView: {
    borderColor: '#E04B07', // orange color
    borderWidth: 2, // border width
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#121212',
    maxHeight: '35%', // Adjust the maximum height of the modal view as needed
  },
  headingText: {
    marginBottom: 10,
    color: '#E04B07', // orange color
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'AlegreyaSC-Bold',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'AlegreyaSC-Bold',
    fontSize: 24,
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: '#E04B07',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'AlegreyaSC-Bold',
  },
  descriptionContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default Popup;
