import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import COLORS from "../components/Color";
import { useDispatch } from "react-redux";
import { authLoginApi } from "../feature/loginSlice";
import Icon from "react-native-vector-icons/FontAwesome5";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("") 
  const [Password, setPassword] = useState("") 

  const handleEmail = (inputEmail) => {
      setEmail(inputEmail)
  }
  const handlePassword = (inputPassword) => {
      setPassword(inputPassword)
  }
  const doSubmit = (event) => {
      event.preventDefault();
      dispatch(authLoginApi({ Email, Password }));
      setEmail("");
      setPassword("");
    };


  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={require('../img/img2.jpg')} style={{ width: 200, height: 200, borderRadius: 200/ 2, marginTop: 20 }} />
        <Text style={styles.titleText}>Welcome to Hotel Booking App</Text>
      </View>
      <View>
        <View style={{ flexDirection: "row", flex: 1, marginHorizontal: 20, marginTop : 10}}>
          <form onSubmit={doSubmit}>
            <View>
              <View style={{ flexDirection: "row", flex: 1, marginHorizontal: 20, marginTop : 10}}>
                <View style={styles.icon}>
                  <Icon name="envelope" size={30} color="#bdbdbd" />
                </View>
                <input type="text" id="form3Example3" className="form-control" 
                            required 
                            onChange={(event) => handleEmail(event.target.value)} 
                            value={Email}
                            style={styles.textInput}
                            placeholder="Email"/>
                            
              </View>
            </View>
            <View>
              <View style={{ flexDirection: "row", flex: 1, marginHorizontal: 20, marginTop : 10}}>
                <View style={styles.icon}>
                  <Icon name="lock" size={30} color="#bdbdbd" />
                </View>
                <input type="password" id="form3Example4" className="form-control" 
                            required 
                            onChange={(event) => handlePassword(event.target.value)}
                            value={Password}
                            style={styles.textInput}
                            placeholder="Password"/>
              </View>
            </View>
            <View >
            <button type="submit" value="Login" style={styles.button}>
                  Sign in
                </button>
            </View>
          </form>
        </View> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },
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
  },
});

export default LoginScreen;
