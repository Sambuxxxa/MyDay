import {FlatList, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {useRef, useState} from "react";
import {mt400, mt600} from "../../constants/Themes"
import 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
import SUBJECTS from "../../constants/SUBJECTS";
import SubjectModalItem from "./SubjectModalItem";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function AddingModal() {
  const {colors} = useTheme();
  const [subject, setSubject] = useState("Не вибраний");
  const [text, setText] = useState('');

  const modalizeSubject = useRef();

  const onOpen = () => {
    modalizeSubject.current.open();
    // modalizeSubject.current.close();
  };
  const onClose = (item) => {
    modalizeSubject.current.close();
    setSubject(item)
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <View style={styles.element}>
          <Text style={[styles.title, {color: colors.darkBlue}]}>Урок:</Text>
          <Pressable
            onPress={onOpen}>
            <Text style={[styles.text, {color: colors.blue}]}>{subject}</Text>
          </Pressable>
        </View>
        <Text style={[styles.title, {color: colors.darkBlue, marginLeft: 20, marginVertical: 10}]}>Завдання:</Text>
        <TextInput
          selectionColor={colors.lightBlue}
          cursorColor={colors.blue}
          style={styles.inp}
          value={text}
          onChangeText={(text) => setText(text)}
          multiline
        />
        <RBSheet
          animationType={'slide'}
          ref={modalizeSubject}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: (SUBJECTS.length * 20) + (SUBJECTS.length * 10) + 40
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
      <View style={[styles.btn, {backgroundColor: colors.darkBlue}]}>
        <AntDesign name="plus" size={35} color={colors.white} />
      </View>
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
  inp: {
    marginHorizontal: 20,
    borderWidth: 0.1,
    borderRadius: 5,
    paddingHorizontal: 15
  },
  btn: {
    alignSelf: "center",
    height: 60,
    borderRadius: 20,
    width: 200,
    marginTop: 5,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
