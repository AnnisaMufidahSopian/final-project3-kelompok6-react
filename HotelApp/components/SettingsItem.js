import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ProfileItem = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10,
      }}
    >
      <View style={styles.icon}>
        <Icon name={props.icon} size={20} color="#bdbdbd" />
      </View>
      <View style={styles.textBox}>
        <Text>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    width: 150,
    height: 50,
    elevation: 2,
    paddingLeft: 10,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: 70,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    height: 25,
  },
});
export default ProfileItem;
