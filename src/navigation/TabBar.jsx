import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import HomeWorkScreen from "../screens/HomeWorkScreen/HomeWorkScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function TabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.background }}>
      <View style={{
        flexDirection: "row",
        width: "90%",
        backgroundColor: colors.darkBlue,
        alignSelf: "center",
        height: 60,
        marginBottom: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center" }}
            >
              {label === "HomeWorkScreen" ? (<Ionicons name="list-outline" size={24}
                                                       color={isFocused ? colors.white : colors.grey} />) : label === "DailaryScreen" ? (
                <Ionicons name="calendar-outline" size={24}
                          color={isFocused ? colors.white : colors.grey} />) : label === "Settings" ? (
                <Ionicons name="settings-outline" size={24} color={isFocused ? colors.white : colors.grey} />) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
