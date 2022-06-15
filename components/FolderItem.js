import {Image,Text,View,Pressable} from 'react-native';



function FolderItem({folder,onSelect}){
    return(
        <Pressable onPress={onSelect}>
            <View>
                <Image source={{uri:folder.imageUri}}>
                    <View>
                        <Text>{folder.title}</Text>
                    </View>
                </Image>
            </View>
        </Pressable>
    );

};

export default FolderItem;
