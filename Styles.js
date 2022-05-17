import { StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


export default StyleSheet.create({

  container: {
    flex:1,
    width: windowWidth,
    height:windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    

  },
  image: {
    width: windowWidth,
    height: 400,
    padding:100,
    
  },

  containerButtons:{
      borderRadius: 12,
      borderColor: 'white',
      justifyContent:'center',
      width:windowWidth/2,
      height:windowHeight/5,
      flexDirection:'row',
      alignContent:'center',
      
  },
  //הגדרות של הכפתור והמסגרת ביחס למסך
  containerButton:{
    borderRadius:30,
    borderWidth: 5,
    borderColor: '#AD67EA',
    paddingVertical:12,
    paddingHorizontal:30,
    justifyContent:'center',
    textAlign:'center',
    
    
 
},
card:{
  width:300,
  maxWidth:'80%',
  alignItems:'center',
  shadowColor:'black',
  shadowOffset:{width:0 , height:2},
  shadowRadius:6,
  shadowOpacity:0.26,
  backgroundColor:'white',
  elevation:8,
  padding:20,
  borderRadius:10,

},

//Body text 
textstyle: {
    color: '#AD67EA',
    fontSize: 20,
    textAlign:'center',
    
    
},

inputText:{
  height:30,
  width:200,
  borderBottomColor:'grey',
  borderBottomWidth: 1,
  marginVertical:10,
  textAlign:'center',

},
SelectIcon_buttons:{
  flexDirection:'row',
  justifyContent:'center',
  marginTop:500,
},
buttonText: {
  color: '#AD67EA',
  // fontFamily: 'SuezOne_Regular',
  fontSize: 20,
  textAlign:'center',
  flexDirection:'row',


},
placeItem: {
  borderBottomColor: '#ccc',
  borderBottomWidth: 1,
  paddingVertical: 15,
  paddingHorizontal: 30,
  flexDirection: 'row',
  alignItems: 'center'
},
image1: {
  width: 70,
  height: 70,
  borderRadius: 35,
  backgroundColor: '#ccc',
  borderColor:'#AD67EA' ,
  borderWidth: 1
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
infoContainer: {
  marginLeft: 25,
  width: 250,
  justifyContent: 'center',
  alignItems: 'flex-start'
},
title: {
  color: 'black',
  fontSize: 18,
  marginBottom: 5
},



  });