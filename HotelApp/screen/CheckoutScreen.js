
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card } from "@rneui/themed";
import SettingsItem from "../components/SettingsItem";

const CheckoutScreen = ({navigation, route}) => {
  const item = route.params;
  console.log(item)


  return (
    <View style={{ flex: 1 }}>
      <Card>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>Contact Information</Text>
      <SettingsItem icon="user" text={item.User.nama_depan} />
      <SettingsItem icon="envelope" text={item.User.email} />
      <SettingsItem icon="phone" text={item.User.no_ktp} />
        <Card.Divider />
        <Text style={{ marginTop: 10, fontWeight: "bold" }}>Price Summary</Text>
        <SettingsItem icon="file-invoice" text={item.kode_pemesanan} />
        <SettingsItem icon="money-check-alt" text={item.total_bayar} />
      </Card>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
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
    backgroundColor: "#3366CC",
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    elevation: 2,
  },
});

export default CheckoutScreen;
