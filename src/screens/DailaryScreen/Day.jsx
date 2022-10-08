import {StyleSheet, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {mt600} from "../../constants/Themes";


export default function Day({day, subjects}) {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.title, {color: colors.darkBlue}]}>{day}</Text>
      {subjects.map((item) => (
        <View key={item.number.toString()} style={styles.subject}>
          <View style={{flexDirection: "row"}}>
            <Text style={[styles.number, {color: item.bold ? colors.grey : "#000"}]}>{item.number}</Text>
            <Text style={[styles.name, {color: item.bold ? colors.grey : "#000"}]}>{item.name}</Text>
          </View>
          <Text style={[styles.time, {color: colors.lightBlue}]}>{item.time}</Text>
        </View>))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0, height: -50,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    // elevation: 3,
  },
  title: {
    fontFamily: mt600,
    fontSize: 20,
    marginBottom: 5,
  },
  subject: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  number: {
    marginRight: 10,
    fontFamily: mt600,
  },
  name: {
    marginRight: 10,
    fontFamily: mt600,
  },
  time: {
    marginRight: 10,
    fontFamily: mt600,
    width: 100
  },
});
