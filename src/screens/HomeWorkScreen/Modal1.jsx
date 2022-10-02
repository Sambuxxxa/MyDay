import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {useRef, useState} from "react";
import {mt400, mt600} from "../../constants/Themes"
import 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
import SUBJECTS from "../../constants/SUBJECTS";
import SubjectModalItem from "./SubjectModalItem";

export default function Modal1() {
  const {colors} = useTheme();
  const [subject, setSubject] = useState("Не вибраний");

  const modalizeSubject = useRef();

  const onOpen = () => {
    modalizeSubject.current.open();
    // modalizeSubject.current.close();
  };
  const onClose = () => {
    modalizeSubject.current.close();
  };


  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.element}>
        <Text style={[styles.title, {color: colors.darkBlue}]}>Урок:</Text>
        <Pressable
          onPress={onOpen}>
          <Text style={[styles.text, {color: colors.blue}]}>{subject}</Text>
        </Pressable>
      </View>
      <RBSheet
        animationType={'slide'}
        ref={modalizeSubject}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: "80%"
          },
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.07)"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <FlatList data={SUBJECTS} renderItem={({item}) => (<SubjectModalItem onClose={onClose} item={item}/>)}/>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  element: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontFamily: mt600,
    fontSize: 15
  },
  text: {
    fontFamily: mt400,
    fontSize: 15
  },

});
