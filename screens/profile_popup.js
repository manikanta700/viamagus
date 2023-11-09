import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';

import ProfileScreen from './screen3';


const ProfileModal = ({ isVisible, onClose }) => {


  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
      
    >
      <View style={styles.modalContainer}>
        <ProfileScreen onClick={onClose}></ProfileScreen>
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // 
  },
  modalContent: {
    // width: 350,
    // height:450,
    // backgroundColor: 'white',
    borderRadius: 10,
    // padding: 20,
    // marginTop:300,

  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:10,
    color:'black'
  },
  numberPicker: {
    height: 200,
  },
  numberOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  selectedOption: {
    backgroundColor: '#F1EBF7',
  },
  numberText: {
    fontSize: 16,
    textAlign: 'center',
    color:'black'
  },
  predictionValue: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    color:"black"
  },
  submitButton: {
    color: 'white',
     fontSize: 16,
     backgroundColor:'#6231AE',
     height:40,
     justifyContent:'space-around',
     borderRadius:20
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ProfileModal;
