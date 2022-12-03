import {
  Text,
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SettingsItem from "../components/SettingsItem";
import { Card } from "@rneui/themed";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../feature/usersSlice";

const SettingsScreen = () => {

  const handleLogout = () => {
    localStorage.removeItem("id")
    window.location.reload();
}
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const users = useSelector((state) => state.user.user);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor="FAFAFA" />
      <View style={{ flex: 1, padding: 10 }}>
      {users.map((user, index) => (
        <Card key={index}>
          <Text style={{ marginTop: 10, fontWeight: "bold" }}>My Account</Text>
          <View style={{ marginTop: 20 }}>
            <SettingsItem icon="user" text={user.nama_depan} />
            <SettingsItem icon="envelope" text={user.email} />
            <SettingsItem icon="calendar" text={user.no_ktp} />
            <SettingsItem icon="venus-mars" text={user.jenis_kelamin} />
          </View>
          <Card.Divider />
          <Text style={{ marginTop: 10, fontWeight: "bold" }}>Support</Text>
          <TouchableOpacity><SettingsItem icon="flag" text="Report and Problem" /></TouchableOpacity>
          <TouchableOpacity><SettingsItem icon="user-shield" text="Terms and Policy" /></TouchableOpacity>
        </Card>
      ))}
        <View>
          <TouchableOpacity style={styles.button} onPress={()=>handleLogout()}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: '#D90404',
    paddingVertical: 10,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    elevation: 2,
  },
});

export default SettingsScreen;
