import React ,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet ,ScrollView,FlatList,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';//logout
import Icon_ from 'react-native-vector-icons/MaterialCommunityIcons'; //chaticon,logo
import Icon__ from 'react-native-vector-icons/FontAwesome'; //Arraw 
import Icon___ from 'react-native-vector-icons/Foundation'; //Foundation


//device width & height
const width =  Dimensions.get('window').width
const height = Dimensions.get('window').height

const ProfileScreen = ({onClick}) => {


 const [selectedOption, setSelectedOption] = useState('Badges');

  const options = ['Games Played', 'Badges'];

  let badgesData = []

  if(selectedOption==options[1]){
   
  
    badgesData = [
        {
          id: '1',
          title: 'Badge 1',
          description: 'Description for Badge 1',
          image: require('../src/images/game_bagd.jpg'),
        },
        {
          id: '2',
          title: 'Badge 2',
          description: 'Description for Badge 2',
          image: require('../src/images/game_bagd.jpg'),
        },
        {
            id: '3',
            title: 'Badge 3',
            description: 'Description for Badge 1',
            image: require('../src/images/game_bagd.jpg'),
          },
          {
            id: '4',
            title: 'Badge 4',
            description: 'Description for Badge 2',
            image: require('../src/images/game_bagd.jpg'),
          },
          {
            id: '5',
            title: 'Badge 5',
            description: 'Description for Badge 1',
            image: require('../src/images/game_bagd.jpg'),
          },
          {
            id: '6',
            title: 'Badge 6',
            description: 'Description for Badge 2',
            image: require('../src/images/game_bagd.jpg'),
          },
          {
            id: '7',
            title: 'Badge 7',
            description: 'Description for Badge 1',
            image: require('../src/images/game_bagd.jpg'),
          },
          {
            id: '8',
            title: 'Badge 28',
            description: 'Description for Badge 2',
            image: require('../src/images/game_bagd.jpg'),
          },
          {
            id: '9',
            title: 'Badge 9',
            description: 'Description for Badge 1',
            image: require('../src/images/game_bagd.jpg'),
          },
          {
            id: '10',
            title: 'Badge 10',
            description: 'Description for Badge 10',
            image: require('../src/images/game_bagd.jpg'),
          },
        // Add more badge objects as needed
      ];

  }

  

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
   
    <View style={styles.container}>
      {/* Top Logos */}
      <View style={styles.topLogos}>
        
       <Icon name="logo-ionitron" size={30} color="#6231AE" style={{marginTop:5}} />
       <Text style={styles.profileTitle}>Profile</Text>
       <Icon name="chatbox" size={30} color="#B3B3B3" style={{marginTop:5}} />


      </View>
      {/* Profile Picture */}
      <Image source={require('../src/images/girl_dp.jpg')} style={styles.profilePic} />
      
      {/* Name */}
      <Text style={styles.text}>Jina Simons</Text>
      
      {/* Points */}
      <Text style={{color:'black',fontSize:15,fontWeight: '500',}}>6000 Pts</Text>
      
      {/* Objective */}
      <Text style={styles.objective}>
      I'm a software developer that has been in the crypto space since 2012. And I've seen it grow and falter over a period of time. Really happy to be here!
      </Text>
      
      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
       <Icon_ name="logout" size={20} color="gray" style={{marginTop:0}} />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',width:340,justifyContent:'space-between',borderWidth:1,padding:5,borderColor:'#dbdbdb'}}>
        <View>
            <View>
                <Text style={{color:'black'}}>Under or Over</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Icon__ name="arrow-up" size={15} color="#76BA6F" style={{marginRight:3,marginTop:2}} />
            
            <Text style={{color:'black',}}>81%</Text>

            </View>

        </View>
        <View>
            <View>
                <Text style={{color:'black'}}>Top 5</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Icon__ name="arrow-down" size={15} color="red" style={{marginRight:3,marginTop:2}} />
            <Text style={{color:'black'}}>-51%</Text>

            </View>

        </View>
      </View>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              option === selectedOption && styles.selectedOption,
            ]}
            onPress={() => handleOptionChange(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
          ))}
          </View>
          <View style={styles.badgesList}>
            <FlatList
              data={badgesData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.badgeItem} key={item.id}>
                  <Image source={item.image} style={styles.badgeImage} />
                  <View style={styles.badgeText}>
                    <Text style={styles.badgeTitle}>{item.title}</Text>
                    <Text style={styles.badgeDescription}>{item.description}</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignContent:'flex-end',width:width-(width/10)}}>
        <View style={{}}>
        <Icon__ name="home" size={15} color="#6231AE" style={{marginLeft:9,marginTop:2}} />

        <Text style={{fontSize: 14,fontWeight: '600',color:'#6231AE' }}>Home</Text>


        </View>
        <TouchableOpacity  onPress={onClick}>
        <Icon_ name="wallet-giftcard" size={15} color="#666769" style={{marginLeft:16,marginTop:2}} />

        <Text style={{fontSize: 14,fontWeight: '600',color:'#B3B3B3' }}>Leagues</Text>


        </TouchableOpacity>
        <TouchableOpacity  onPress={onClick}>
        <Icon__ name="search" size={15} color="#666769" style={{marginLeft:19,marginTop:2}} />

        <Text style={{fontSize: 14,fontWeight: '600',color:'#B3B3B3' }}>Research</Text>


        </TouchableOpacity>
        <TouchableOpacity  onPress={onClick}>
        <Icon___ name="graph-bar" size={15} color="#666769" style={{marginLeft:25,marginTop:2}} />

        <Text style={{fontSize: 14,fontWeight: '600',color:'#B3B3B3' }}>Leaderboard</Text>
        
        </TouchableOpacity>
        <TouchableOpacity >
        <Icon_ name="account" size={15} color="#666769" style={{marginLeft:9,marginTop:2}} />

        <Text style={{fontSize: 14,fontWeight: '600',color:'#B3B3B3' }}>Profile</Text>
        
        </TouchableOpacity>
        
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'white',
    
  },
  topLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: (width-(width/10)),
    
  },
  
  profileTitle: {
    fontSize: 17,
    fontWeight: '500',
    marginVertical: 6,
    color:'black'
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color:'black',
    
  },
  objective: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color:'black',
    fontWeight:'300'

  },
  logoutButton: {
    padding: 10,
    flexDirection:'row'
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 16,
    marginTop:0
  },

  optionsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
    
  },
  option: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  selectedOption: {
    borderBottomWidth: 2,
    borderColor: 'blue',
    
  },
  optionText: {
    fontSize: 16,
    color:'black',
    fontWeight:'800'

  },
  badgesList: {
  // height:height-(height/1.4),
  flex:8,
  width:(width-(width/10)),
  marginBottom: 20,
  backgroundColor:'#F6F3FA'
  
  },
  badgeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor:'white'
    
  },
  badgeImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  badgeText: {
    // flex: 1,
    color:'black'
  },
  badgeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  badgeDescription: {
    fontSize: 16,
    color:'black'
  },
});

export default ProfileScreen;
