import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";


export default function Check({ isSelected, setIsSelected }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {isSelected ? (<Image style={{ height: 16, width: 23 }} source={require("../assets/images/checkOn.png")} />) :
        (<Image style={{ height: 16, width: 23, opacity: 0.5 }} source={require("../assets/images/checkOf.png")} />)}

    </View>
  );
}

const styles = StyleSheet.create({});
