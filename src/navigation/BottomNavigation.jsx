import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import TabBar from "./TabBar";
import { useColorScheme } from "react-native";
import LightTheme from "../constants/Themes";
import HomeWorkScreen from "../screens/HomeWorkScreen/HomeWorkScreen";
import DailaryScreen from "../screens/DailaryScreen/DailaryScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DefaultTheme : LightTheme}>
      <Tab.Navigator
        screenOptions={{tabBarHideOnKeyboard: true}}
        initialRouteName={"DailaryScreen"}
        // tabBarColor={"#000"}}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="HomeWorkScreen" component={HomeWorkScreen} options={{ headerShown: false, tabBarHideOnKeyboard: true }} />
        <Tab.Screen name="DailaryScreen" component={DailaryScreen} options={{ headerShown: false, tabBarHideOnKeyboard: true }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
