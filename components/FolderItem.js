import { Image, Text, View, Pressable, StyleSheet } from "react-native";

const FolderItem=({ folder, onSelect }) =>{
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: folder.imageUri }} />
      <View>
        <Text>{folder.title}</Text>
      </View>
    </Pressable>
  );
}

export default FolderItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: "white",
    elevation: 2,
  },
  pressed: {},
});
