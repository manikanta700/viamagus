import React , { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button,TouchableOpacity ,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_ from 'react-native-vector-icons/FontAwesome'; //FontAwesome
import * as Progress from 'react-native-progress';
import PredictionModal from './modelpopup';
import ProfileModal from './profile_popup';
import CountdownTimer from './countertime';

//device width & height
const width =  Dimensions.get('window').width
const height = Dimensions.get('window').height

const TodayGamesScreen = () => {
  const data = [
    { id: '1', 
    title: 'Bitcoin',
    price:"$24,524",
    date:'22nd jan`21',
    strt_time:'03:23:12',
    price_pool:'$12,000',
    under:'3.25x',
    over:'1.25x',
    entry_fee:5,
    total_players:355,
    predicted_under:232,
    predicted_over:123
   },
    
  ];

  const [ShowPopup, setShowPopup] = useState(false);
  const [ShowProfile, setShowProfile] = useState(false);
  const [user_option,setuser_option] = useState('')
  


  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
    <View style={styles.itemPartup}>
      
      <View style={{flex:3,flexDirection:'row',padding:15}}>
      <View style={{flex:3,flexDirection:'row'}}>
      <Text style={{fontSize: 13,fontWeight: 'bold',color:'#B3B3B3' ,marginTop:0.5}}>UNDER OR OVER</Text>
      <Icon name="information-outline" size={18} color="#B3B3B3" style={{marginLeft:3}} />
      </View>
      <Text style={{fontSize: 13,fontWeight: 'bold',color:'#B3B3B3' ,marginTop:0.5,marginLeft:5}}>Starting in</Text>
      <Icon name="clock-time-four" size={18} color="#B3B3B3" style={{marginLeft:3}} />
      <Text style={{fontSize: 13,fontWeight: 'bold',color:'#B3B3B3' ,marginTop:0.5,marginLeft:5}}>{<CountdownTimer initialTime={item.strt_time}/>
}</Text>
      </View>


      <View style={{flex:7,flexDirection:'row',}}>
      <View style={{flex:8,justifyContent:'flex-end',padding:10}}>
      <Text style={{fontSize: 14,fontWeight: 'bold',color:'#B3B3B3' }}>Bitcoin price will be under</Text>
      <Text style={{fontSize: 15,fontWeight: 'bold',color:'white' }}>{item.price} at 7 ET on {item.date}</Text>


      </View >
      <View style={{flex:2,justifyContent:"flex-end"}}>
      <Icon name="bitcoin" size={75} color="#B3B3B3" style={{marginTop:5}} />


      </View>

      </View>
    </View>
    <View style={styles.itemPartMiddle}>
      <View style={{flex:4,flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{}}>
        <Text style={{fontSize: 14,fontWeight: '600',color:'#B3B3B3' }}>PRIZE POOL</Text>
        <Text style={{fontSize: 15,fontWeight: 'bold',color:'black' }}>{item.price_pool}</Text>

        </View>
        <View style={{}}>
        <Text style={{fontSize: 14,fontWeight: '600',color:'#B3B3B3' }}>UNDER</Text>
        <Text style={{fontSize: 15,fontWeight: 'bold',color:'black' }}>{item.under}</Text>

        </View>
        <View style={{}}>
        <Text style={{fontSize: 14,fontWeight: '600',color:'#B3B3B3' }}>OVER</Text>
        <Text style={{fontSize: 15,fontWeight: 'bold',color:'black' }}>{item.over}</Text>

        </View>
        <View style={{}}>
        <Text style={{fontSize: 14,fontWeight: '600',color:'#B3B3B3' }}>ENTRY FEES</Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={{fontSize: 15,fontWeight: 'bold',color:'black' }}>{item.entry_fee}</Text>
        <Icon_ name="circle" size={15} color="#FFE200" style={{marginLeft:6,marginTop:3}} />
        
        </View>
        </View>
      </View>
      <View >
      <Text style={{fontSize: 17,fontWeight: '600',color:'#ADADAF' }}>What's your prediction?</Text>

      </View>
      <View style={{flex:4,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
      <TouchableOpacity style={{ color: 'white', fontSize: 16,backgroundColor:'#452C54',height:40,width:150,justifyContent:'space-around',borderRadius:20}}
      onPress={()=>{setuser_option('Under');setShowPopup(true)}}
      >
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Icon_ name="arrow-down" size={15} color="white" style={{marginRight:3,marginTop:2}} />
        <Text style={{fontSize: 15,fontWeight: 'bold',color:'white' }}>Under</Text>
        
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ color: 'white', fontSize: 16,backgroundColor:'#6231AE',height:40,width:150,justifyContent:'space-around',borderRadius:20}}
         onPress={()=>{setuser_option('Over');setShowPopup(true)}}
      >
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Icon_ name="arrow-up" size={15} color="white" style={{marginRight:3,marginTop:2}} />
        <Text style={{fontSize: 15,fontWeight: 'bold',color:'white' }}>Over</Text>
        
        </View>
      </TouchableOpacity>
       


      </View>
      
    </View>
    <View style={styles.itemPartdown}>
      <View style={{flex:2,flexDirection:'row'}}>
        <View style={{flex:3,flexDirection:'row'}}>
        <Icon name="account" size={18} color="#B3B3B3" style={{marginLeft:3}} />
        <Text style={{fontSize: 13,fontWeight: 'bold',color:'#B3B3B3' ,marginTop:0.5}}>{item.total_players} Players</Text>
        </View>
        <Icon_ name="area-chart" size={18} color="#B3B3B3" style={{marginLeft:3}} />
        <Text style={{fontSize: 13,fontWeight: 'bold',color:'#B3B3B3' ,marginTop:0.5,marginLeft:5}}>View chart</Text>

      </View>
      <View style={{flex:1}}>
         <Progress.Bar progress={(item.predicted_under/item.total_players)} width={(width-(width/10))} color={'#FF4191'} unfilledColor={'#2CACAD'} borderWidth={0}/>

      </View>
      <View style={{flex:2,flexDirection:'row'}}>
        <View style={{flex:3,flexDirection:'row'}}>
        <Text style={{fontSize: 13,fontWeight: 'bold',color:'#B3B3B3' ,marginTop:0.5}}>{item.predicted_under} Predicted under</Text>
        </View>
        <Text style={{fontSize: 13,fontWeight: 'bold',color:'#B3B3B3' ,marginTop:0.5,marginLeft:5}}>{item.predicted_over} Predicted over</Text>

      </View>
    </View>
  </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>

      <Text style={styles.heading}>Today's Games</Text>
      <TouchableOpacity onPress={()=>setShowProfile(true)}>
      <Icon_ name="user-circle" size={20} color="black" style={{marginTop:11}} />
      </TouchableOpacity>
      </View>

      <View style={styles.subcontainer}>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />
      </View>
     {/* popups*/}
     <PredictionModal isVisible={ShowPopup} user_option={user_option} onClose={()=>setShowPopup(false)} ></PredictionModal>
     <ProfileModal isVisible={ShowProfile}  onClose={()=>setShowProfile(false)}></ProfileModal>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor:'white',
      },
  header:{
    flexDirection:'row',
    padding:4,
    justifyContent:'space-between'

  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'black'
  },
  subcontainer:{
justifyContent:'center'

  },
  itemContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: 'white',
    shadowColor: 'grey', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.9, 
    shadowRadius: 2, 
    elevation: 5, 
    height:430,
    
  },
  itemText: {
    fontSize: 18,
  },
  itemPartup: {
    flex: 0.3, 
    backgroundColor:'#6231AE'
  },
  itemPartMiddle: {
    flex: 0.4, 
    padding: 8,
    
  },
  itemPartdown: {
    flex: 0.3, 
    padding: 8,
    backgroundColor:'#F6F3FA'
  },
  itemText: {
    fontSize: 18,
  },

  //popup
  containerContent: {flex: 1, marginTop: 40},
  containerHeader: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#F1F1F1',
  },
  headerContent:{
    marginTop: 0,
  },
  Modal: {
    backgroundColor: '#005252',
    marginTop: 0,
  }
});

export default TodayGamesScreen;
