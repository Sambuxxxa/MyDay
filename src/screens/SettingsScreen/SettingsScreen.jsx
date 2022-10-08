import {ActivityIndicator, Image, StyleSheet, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {mt400} from "../../constants/Themes";


export default function SettingsScreen() {
  const {colors} = useTheme()
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/construction-worker.png")} style={{height: 60, width: 60}}/>
      <Text style={{color: colors.grey, fontFamily: mt400, marginVertical: 5, fontSize: 16}}>В розробці...</Text>
      <ActivityIndicator size={"large"} color={colors.darkBlue}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
