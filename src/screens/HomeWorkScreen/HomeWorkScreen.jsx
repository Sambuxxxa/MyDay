import {FlatList, Modal, Pressable, StyleSheet, TextInput, View} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SubjectItem from "./SubjectItem";
import Modal1 from "./Modal1";

const tasks = [
  {
    isCompleted: false,
    subject: "Алгебра",
    text: "Вправа 54",
    important: "#ec1616",
  },
  {
    isCompleted: true,
    subject: "Українська мова",
    text: "Вправа 46",
    important: "#0BC294",
  },
  {
    isCompleted: false,
    subject: "Англійська мова",
    text: "Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25",
    important: "yellow",
  },
  {
    isCompleted: false,
    subject: "Алгебра",
    text: "Вправа 54",
    important: "#ec1616",
  },
  {
    isCompleted: true,
    subject: "Українська мова",
    text: "Вправа 46",
    important: "#0BC294",
  },
  {
    isCompleted: false,
    subject: "Англійська мова",
    text: "Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25",
    important: "yellow",
  },
  {
    isCompleted: false,
    subject: "Алгебра",
    text: "Вправа 54",
    important: "#ec1616",
  },
  {
    isCompleted: true,
    subject: "Українська мова",
    text: "Вправа 46",
    important: "#0BC294",
  },
  {
    isCompleted: false,
    subject: "Англійська мова",
    text: "Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25",
    important: "yellow",
  },
  {
    isCompleted: false,
    subject: "Алгебра",
    text: "Вправа 54",
    important: "#ec1616",
  },
  {
    isCompleted: true,
    subject: "Українська мова",
    text: "Вправа 46",
    important: "#0BC294",
  },
  {
    isCompleted: false,
    subject: "Англійська мова",
    text: "Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25",
    important: "yellow",
  },
  {
    isCompleted: false,
    subject: "Алгебра",
    text: "Вправа 54",
    important: "#ec1616",
  },
  {
    isCompleted: true,
    subject: "Українська мова",
    text: "Вправа 46",
    important: "#0BC294",
  },
  {
    isCompleted: false,
    subject: "Англійська мова",
    text: "Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25",
    important: "yellow",
  },
  {
    isCompleted: false,
    subject: "Алгебра",
    text: "Вправа 54",
    important: "#ec1616",
  },
  {
    isCompleted: true,
    subject: "Українська мова",
    text: "Вправа 46",
    important: "#0BC294",
  },
  {
    isCompleted: false,
    subject: "Англійська мова",
    text: "Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25Вправа 47, вправа 50, текст на сторінці 25",
    important: "yellow",
  },
];


export default function HomeWorkScreen() {
  const { colors } = useTheme();
  const [inpText, setInpText] = useState("");
  const [searchedElements, setSearchedElements] = useState(tasks);
  const [visibleAddEl, setVisibleAddEl] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={{ flexDirection: "row", paddingHorizontal: "5%", alignItems: "center" }}>
        <View style={styles.inpBox}>
          <View style={{ marginHorizontal: 5 }}>
            <Ionicons name="search-outline" size={24} color={colors.darkBlue} />
          </View>
          <TextInput
            selectionColor={colors.lightBlue}
            cursorColor={colors.blue}
            onChangeText={(text) => {
              setInpText(text);
              setSearchedElements(tasks.filter((item) => item.text.toLowerCase().includes(text.toLowerCase()) || item.subject.toLowerCase().includes(text.toLowerCase())));
            }}
            value={inpText}
            style={styles.inp} />
        </View>
        <Pressable
          onPress={() => setVisibleAddEl(true)}
          style={[styles.btn, { backgroundColor: colors.darkBlue }]}>
          <AntDesign name="plus" size={24} color={colors.white} />
        </Pressable>
      </View>

      <View style={{ flex: 1, marginVertical: 10 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchedElements}
          renderItem={({ item }) => (<SubjectItem item={item} />)} />
      </View>
      <Modal
        visible={visibleAddEl}
        onRequestClose={() => setVisibleAddEl(false)}>
        <Modal1 />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  inpBox: {
    height: 50,
    // width: "90%",
    flex: 1,
    borderWidth: 0.1,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  inp: {
    flex: 1,
    fontSize: 15,
  },
  btn: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    marginLeft: 10,
  },
});
