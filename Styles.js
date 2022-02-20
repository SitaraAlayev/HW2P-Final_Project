import { StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


export default StyleSheet.create({

  container: {
    flex: 1,
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

  // containerButtons:{
  //     borderRadius: 12,
  //     borderColor: '#AD67EA',
  //     justifyContent:'center',
  //     width:windowWidth/2,
  //     height:windowHeight/10,
      

      
  // },
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
smallbuttonupload:
{
  width:windowWidth/2.5,
  
},
card:{
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 8,
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,

},

//Body text 
textstyle: {
    color: '#AD67EA',
    fontSize: 20,
    textAlign:'center',
    
    
},

inputText:{
  height:30,
  width:50,
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
},

  });