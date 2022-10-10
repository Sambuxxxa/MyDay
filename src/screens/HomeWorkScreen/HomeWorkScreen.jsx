import {FlatList, Modal, Pressable, StyleSheet, TextInput, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {useEffect, useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SubjectItem from "./SubjectItem";
import AddingModal from "./Modals/AddingModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeleteElModal from "./Modals/DeleteElModal";

export default function HomeWorkScreen() {
  useEffect(() => {
    // storeData({isCompleted: false, text: '', subject: '', id: '1'})
    getData()
  }, []);

  const [tasks, setTasks] = useState([]);
  const [inpText, setInpText] = useState("");
  const [searchedElements, setSearchedElements] = useState(tasks);
  const [visibleAddEl, setVisibleAddEl] = useState(false);
  const [visibleDeleteEl, setVisibleDeleteEl] = useState(true);
  const [deletedItem, setDeletedItem] = useState({});
  const {colors} = useTheme();

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify([
        value,
        ...tasks
      ])
      await AsyncStorage.setItem('tasks', jsonValue)
    } catch (e) {
    }
    getData()
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('tasks')
      if (value !== null) {
        setTasks(JSON.parse(value))
        if (inpText === "") {
          setSearchedElements(JSON.parse(value))
        } else {
          setSearchedElements(JSON.parse(value).filter((item) => item.text.toLowerCase().includes(inpText.toLowerCase()) || item.subject.toLowerCase().includes(inpText.toLowerCase())))
        }
      }
    } catch (e) {
    }
  }
  const changeCompleted = async (item) => {
    try {
      const jsonValue = JSON.stringify(tasks.map((el) => {
        if (el.id === item.id) {
          return {isCompleted: !item.isCompleted, subject: item.subject, text: item.text, id: item.id};
        } else {
          return el;
        }
      }))
      await AsyncStorage.setItem('tasks', jsonValue)
    } catch (e) {
    }
    getData()
  }
  const deleteItem = async () => {
    try {
      const jsonValue = JSON.stringify(tasks.filter((el) => {
        if (el.id !== deletedItem.id) {
          return el;
        }
      }))
      await AsyncStorage.setItem('tasks', jsonValue)
    } catch (e) {
    }
    getData()
  }

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={{flexDirection: "row", paddingHorizontal: "5%", alignItems: "center"}}>
        <View style={styles.inpBox}>
          <View style={{marginHorizontal: 5}}>
            <Ionicons name="search-outline" size={24} color={colors.darkBlue}/>
          </View>
          <TextInput
            selectionColor={colors.lightBlue}
            cursorColor={colors.blue}
            onChangeText={(text) => {
              setInpText(text);
              if (text === '') {
                setSearchedElements(tasks)
              } else {
                setSearchedElements(tasks.filter((item) => item.text.toLowerCase().includes(text.toLowerCase()) || item.subject.toLowerCase().includes(text.toLowerCase())));
              }
            }}
            value={inpText}
            style={styles.inp}/>
        </View>
        <Pressable
          onPress={() => setVisibleAddEl(true)}
          style={[styles.btn, {backgroundColor: colors.darkBlue}]}>
          <AntDesign name="plus" size={24} color={colors.white}/>
        </Pressable>
      </View>

      <View style={{flex: 1, marginVertical: 10}}>
        <FlatList
          ListEmptyComponent={() => (<View style={{height: "100%", width: "100%", backgroundColor: "red"}}></View>)}
          showsVerticalScrollIndicator={false}
          data={searchedElements}
          renderItem={({item}) => (
            <SubjectItem setDeletedItem={setDeletedItem} setVisibleDeleteEl={setVisibleDeleteEl} changeCompleted={changeCompleted} item={item}/>)}/>
      </View>
      <Modal
        animationType={"slide"}
        visible={visibleAddEl}
        onRequestClose={() => setVisibleAddEl(false)}>
        <AddingModal setVisibleAddEl={setVisibleAddEl} storeData={storeData}/>
      </Modal>
      <Modal
        animationType={'none'}
        transparent={true}
        onRequestClose={() => setVisibleDeleteEl(false)}
        visible={visibleDeleteEl}>
        <DeleteElModal deleteItem={deleteItem} setVisibleDeleteEl={setVisibleDeleteEl}/>
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
