import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import Check from "../../components/Check";
import {mt400, mt600} from "../../constants/Themes";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function SubjectItem({item, changeCompleted, deleteItem}) {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Pressable
        onPress={() => {
          changeCompleted(item)
        }}
        style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Check isSelected={item.isCompleted}/>
      </Pressable>
      <View style={{flex: 7, paddingHorizontal: 10}}>
        <Text style={[styles.text, {color: colors.darkBlue}]}>{item.text}</Text>
        <Text style={[styles.subject, {color: colors.grey}]}>{item.subject}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          deleteItem(item)
        }}
        style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Ionicons name="trash-outline" size={24} color="black"/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: 5,
    borderWidth: 0.1,
    paddingVertical: 5,
  },
  important: {
    height: 10,
    width: 20,
    borderRadius: 15,
    opacity: 0.8,
  },
  text: {
    fontFamily: mt600,
  },
  subject: {
    fontFamily: mt400,
  },
});
