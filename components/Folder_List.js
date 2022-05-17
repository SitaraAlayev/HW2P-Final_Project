import {FlatList,View,Text,StyleSheet} from 'react-native';
import FolderItem from '../components/FolderItem';

function Folder_List({folders}){
    if(!folders || folders.lenght===0){
        return (
        <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>
                No folders added yet !
            </Text>
        </View>
        );
    }
    
    return (
    <FlatList
    data={folders} 
    keyExtractor={(item)=>item.id} 
    renderItem={({item}) => <FolderItem folder={item}/>} 
    />
    );
}

export default Folder_List;

const styles =StyleSheet.create({
    fallbackContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    fallbackText:{
        fontSize:16
    }
});