import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/Color';
import {
    Avatar,
    Title,
    Caption,
  } from 'react-native-paper';
  import { useEffect } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { fetchData } from '../feature/historySlice';
import { TouchableOpacity } from 'react-native';
  
const HistoryScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  

  const users = useSelector((state) => state.user.user);
  const allHistory = useSelector((state) => state.history.history);

  const CartCard = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Check', item)}>
      <View style={style.cartCard}>
        <Image source={require(`../assets/img-hotel/${item.Hotel.poto_hotel}`)} 
        style={{
            height: 80,
            width: 80,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
        }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.Hotel.nama_hotel}</Text>
          <Text style={{ fontSize: 16}}>{item.status}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.alamat_hotel}
          </Text>
          <Text style={{fontSize: 17, color: COLORS.primary}}>Rp. {item.total_bayar}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <View style={{marginRight: 20, alignItems: 'center', marginTop: 10,}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: COLORS.grey}}>Profil</Text>
        </View>
        <View style={style.userInfoSection}>
        {users.map((user, index) => (
            <View style={{flexDirection: 'row', marginTop: 15}} key={index}>
            <Avatar.Image 
                source={require(`../assets/img-user/${user.poto}`)}
                size={80}
            />
            <View style={{marginLeft: 20}}>
                <Title style={[style.title, {
                marginTop:15,
                marginBottom: 5,
                }]}>{user.nama_depan} {user.nama_belakang}</Title>
                <Caption style={style.caption}>{user.no_ktp}</Caption>
            </View>
            </View>
        ))}
        </View>
        
        <View style={style.userInfoSection}>
        {users.map((user, index) => (
            <View style={style.row} key={index}>
            <Icon name="phone" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>+61 {user.no_ktp}</Text>
            </View>
        ))}
        {users.map((user, index) => (
            <View style={style.row} key={index}>
            <Icon name="email" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>{user.email}</Text>
            </View>
        ))} 
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={allHistory}
        renderItem={({item}) => <CartCard item={item} />}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 1,
    justifyContent: 'space-between',
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 120,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});


export default HistoryScreen;