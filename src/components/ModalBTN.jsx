import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useTheme} from "@react-navigation/native";
import 'react-native-gesture-handler';
import {mt500} from "../constants/Themes";

export default function ModalBTN({text, operation}) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={operation}
      style={[styles.container, {backgroundColor: colors.modalBTN}]}>
      <Text style={[styles.text, {color: colors.darkBlue}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: mt500,
    fontSize: 17
  }
});
