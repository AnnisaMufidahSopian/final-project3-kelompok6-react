import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card } from "@rneui/themed";
import COLORS from "../components/Color";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5";
import { authPemesananApi } from "../feature/bookingSlice";

const BookingScreen = ({navigation, route}) => {
  const item = route.params;
  const dispatch = useDispatch();

  const [Person, setPerson] = useState("") 
  const [Room, setRoom] = useState("") 
  const [Day, setDay] = useState("")
  const [Date, setDate] = useState("") 

  const handleRoom = (inputRoom) => {
      setRoom(inputRoom)
  }
  const handleDay = (inputDay) => {
      setDay(inputDay)
  }
  const handleDate = (inputDate) => {
    setDate(inputDate)
  }
  const handlePerson = (inputPerson) => {
    setPerson(inputPerson)
  }
  const doSubmit = (event) => {
      event.preventDefault();
      dispatch(authPemesananApi({ Room, Day, Person, Date, item }));
      setRoom("");
      setDay("");
      setPerson("");
      setDate("");
    };

  return (
    <View style={{ flex: 1 }}>
      <View>
          <View style={styles.cartCard}>
            <Image source={require(`../assets/img-hotel/${item.poto_hotel}`)} 
            style={{
                height: 80,
                width: 80,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
            }} />
            <View
              style={{
                height: 120,
                marginLeft: 10,
                paddingVertical: 20,
                flex: 1,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.nama_hotel}</Text>
              <Text style={{fontSize: 13, color: COLORS.grey}}>
                {item.alamat_hotel}
              </Text>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Rp. {item.harga_hotel}</Text>
            </View>
          </View>
      </View>
      <View>
        <Card>
        <Text style={{ marginTop: 10, marginBottom: 15, fontWeight: "bold" }}>Booking Form</Text>
        <form onSubmit={doSubmit}>
        <View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              marginHorizontal: 20,
              marginTop: 10,
            }}
          >
            <View style={styles.icon}>
              <Icon name="door-open" size={20} color="#bdbdbd" />
            </View>
            <input type="number" id="form3Example3" className="form-control" 
                              required 
                              onChange={(event) => handleRoom(event.target.value)} 
                              value={Room}
                              style={styles.textInput}
                              placeholder="Jumlah kamar"/>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              marginHorizontal: 20,
              marginTop: 10,
            }}
          >
            <View style={styles.icon}>
              <Icon name="sun" size={20} color="#bdbdbd" />
            </View>
            <input type="number" id="form3Example4" className="form-control" 
                              required 
                              onChange={(event) => handleDay(event.target.value)}
                              value={Day}
                              style={styles.textInput}
                              placeholder="Day"/>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              marginHorizontal: 20,
              marginTop: 10,
            }}
          >
            <View style={styles.icon}>
              <Icon name="user" size={20} color="#bdbdbd" />
            </View>
            <input type="number" id="form3Example3" className="form-control" 
                              required 
                              onChange={(event) => handlePerson(event.target.value)} 
                              value={Person}
                              style={styles.textInput}
                              placeholder="Person"/>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              marginHorizontal: 20,
              marginTop: 10,
            }}
          >
            <View style={styles.icon}>
              <Icon name="calendar" size={20} color="#bdbdbd" />
            </View>
            <input type="date" id="form3Example3" className="form-control" 
                              required 
                              onChange={(event) => handleDate(event.target.value)} 
                              value={Date}
                              style={styles.textInput}
                              placeholder="Date"/>
          </View>
        </View>


        <View >
          <button type="submit" value="Login" style={styles.button}>
            Booking Now
          </button>
        </View>
            </form>
        </Card>
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
  cartCard: {
    height: 100,
    elevation: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default BookingScreen;