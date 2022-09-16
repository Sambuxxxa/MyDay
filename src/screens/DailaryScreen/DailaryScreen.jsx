import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Day from "./Day";
import LinearGradient from "react-native-linear-gradient";
import { FRIDAY, MONDAY, THURSDAY, TUESDAY, WEDNESDAY } from "../../constants/DAILARY";


export default function DailaryScreen() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.background} barStyle={"dark-content"} />
      <ScrollView showsVerticalScrollIndicator={false}
                  style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={{ height: 40 }} />
        <Day day={"Понеділок"} subjects={MONDAY} />
        <Day day={"Вівторок"} subjects={TUESDAY} />
        <Day day={"Середа"} subjects={WEDNESDAY} />
        <Day day={"Четвер"} subjects={THURSDAY} />
        <Day day={"П'ятниця"} subjects={FRIDAY} />
        <View style={{ height: 40 }} />
      </ScrollView>
      <LinearGradient
        colors={["rgb(254,254,254)", "rgba(254,254,254,0.82)", "rgba(254,254,254,0.05)"]}
        style={{ height: 50, width: "100%", position: "absolute", top: 0 }} />
      <LinearGradient
        colors={["rgba(254,254,254,0.05)", "rgba(254,254,254,0.82)", "rgba(254,254,254, 1)"]}
        style={{ height: 50, width: "100%", position: "absolute", bottom: 0 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
  },
});
