import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Check from "../../components/Check";
import { mt400, mt600 } from "../../constants/Themes";


export default function Item({ item }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Check isSelected={item.isCompleted} />
      </View>
      <View style={{ flex: 7, paddingHorizontal: 10 }}>
        <Text style={[styles.text, { color: colors.darkBlue }]}>{item.text}</Text>
        <Text style={[styles.subject, { color: colors.grey }]}>{item.subject}</Text>
      </View>
      {/*<View style={{flex: 1, borderWidth: 1, height: 50, alignItems: "center", justifyContent: "center"}}>*/}
      {/*  <View style={[styles.important, {backgroundColor: item.important}]}/>*/}
      {/*</View>*/}
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
    // borderRadius: 2,
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
