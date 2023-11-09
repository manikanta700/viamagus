import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon_ from 'react-native-vector-icons/FontAwesome'; //FontAwesome


const PredictionModal = ({ isVisible, onClose, onPredictionSubmit,user_option}) => {
  const [selectedPrediction, setSelectedPrediction] = useState(50);

  const handleSelect = (value) => {
    setSelectedPrediction(value);
  };

  const handleSubmit = () => {
    // onPredictionSubmit(selectedPrediction);
    onClose();
  };

  const numbers = Array.from({ length: 101 }, (_, i) => i);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
      
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Icon name="chevron-down" size={35} color="#B3B3B3" style={{marginTop:-15,marginLeft:140}} onPress={onClose}/>
          <Text style={styles.heading}>Your Prediction is {user_option}</Text>
          <Text style={{fontSize: 14,fontWeight: '600',color:'#ADADAF' }}>ENTRY TICKETS</Text>

          <ScrollView style={styles.numberPicker}>
            {numbers.map((number) => (
              <TouchableOpacity
                key={number}
                style={[
                  styles.numberOption,
                  selectedPrediction === number && styles.selectedOption,
                ]}
                onPress={() => handleSelect(number)}
              >
                <Text style={styles.numberText}>{number}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={{flex:2,flexDirection:'row'}}>
                <View style={{flex:3}}>
                <Text style={{fontSize: 13,fontWeight: 'bold',color:'#B3B3B3' ,marginTop:0.5}}>You can win</Text>

                <Text style={{fontSize: 13,fontWeight: 'bold',color:'#2dad4f' ,marginTop:0.5}}>$2000</Text>
                </View>
                <Text style={{fontSize: 13,fontWeight: 'bold',color:'#B3B3B3' ,marginTop:0.5,marginLeft:5}}>Total</Text>
                <Icon_ name="circle" size={15} color="#FFE200" style={{marginLeft:6,marginTop:3}} />
                <Text style={{fontSize: 13,fontWeight: 'bold',color:'#B3B3B3' ,marginTop:0.5,marginLeft:5}}>5</Text>

          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit my prediction</Text>
          </TouchableOpacity>
        </View>
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
  },
  modalContent: {
    width: 350,
    height:450,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop:300,

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

export default PredictionModal;
