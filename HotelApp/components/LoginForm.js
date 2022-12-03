import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const LoginForm = (props) => {
    return(
      <View>
        <View style={{ flexDirection: "row", flex: 1, marginHorizontal: 20, marginTop : 10}}>
          <View style={styles.icon}>
            <Icon name={props.icon} size={30} color="#bdbdbd" />
          </View>
            
          <TextInput
            value={props.state}
            style={styles.textInput}
            placeholder={props.placeholder}
            onChangeText={text => props.set(text)}
            secureTextEntry={props.secureTextEntry}
          />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
textInput: {
    backgroundColor: "#ffffff",
    borderTopRightRadius : 15,
    borderBottomRightRadius : 15,
    width : 230,
    height : 50,
    paddingLeft : 10,
    elevation : 2,
  },
  icon : {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor: '#ffffff',
    width : 50,
    borderTopLeftRadius : 15,
    borderBottomLeftRadius : 15,
    height : 50,
  }
});

export default LoginForm;