import {Pressable, StyleSheet, Text} from "react-native";
import {useTheme} from "@react-navigation/native";
import {mt400} from "../../constants/Themes";
import {useState} from "react";


export default function SubjectModalItem({item, onClose}) {
  const {colors} = useTheme();
  const [background, setBackground] = useState(colors.background);

  return (
    <Pressable
      onPressIn={() => setBackground("#dadada")}
      onPressOut={() => setBackground(colors.background)}
      onPress={() => onClose(item)}
      style={[styles.container, {backgroundColor: background}]}>
      <Text style={styles.text}>{item}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5
  },
  text: {
    lineHeight: 20,
    fontFamily: mt400,
    marginHorizontal: 20,
    fontSize: 15,
    marginVertical: 5,
  }
});
