import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import 'react-native-gesture-handler';
import {mt600} from "../../../constants/Themes";
import ModalBTN from "../../../components/ModalBTN";

export default function DeleteElModal({setVisibleDeleteEl, deleteItem}) {
  const {colors} = useTheme();

  return (
    <Pressable
      onPress={() => setVisibleDeleteEl(false)}
      style={[styles.container]}>
      <Pressable
        onPress={() => {
        }}
        style={[styles.mainBox, {backgroundColor: colors.white}]}>
        <Text style={styles.title}>Видалити?</Text>
        <Image style={{height: 70, width: 70}} source={require("../../../assets/images/dustbin.png")}/>
        <View style={{flexDirection: "row", width: 180, justifyContent: "space-between", marginTop: 10}}>
          <ModalBTN operation={() => setVisibleDeleteEl(false)} text={'Ні'}/>
          <ModalBTN operation={() => {
            deleteItem()
            setVisibleDeleteEl(false)
          }} text={'Так'}/>
        </View>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.13)",
    alignItems: "center",
    justifyContent: "center"
  },
  mainBox: {
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  title: {
    fontFamily: mt600,
    fontSize: 18,
    marginBottom: 10
  }
});
