import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/Color';
import { useSelector, useEffect } from "react-redux";
const width = Dimensions.get('window').width / 2 - 30;
import Icon1 from "react-native-vector-icons/FontAwesome5";
import { removeFromwishlist } from '../feature/wishlistSlice';
import { useDispatch } from "react-redux";

const FavoriteScreen = ({navigation}) => {




  const allHotels = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const handleRemoveFromwishlist = (hotel) => {
    dispatch(removeFromwishlist(hotel));
  };

  const Card = ({hotel}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', hotel)}>
        <View style={style.topHotelCard}>
            <View
            style={{
                position: 'absolute',
                top: 5,
                right: 5,
                zIndex: 1,
                flexDirection: 'row',
            }}>
            <Icon1 name="trash-alt" size={15} color={COLORS.light} onPress={() => handleRemoveFromwishlist(hotel)} />
            </View>
            <Image style={style.topHotelCardImage} source={require(`../assets/img-hotel/${hotel.poto_hotel}`)} />
            <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
            <Text style={{fontSize: 10, fontWeight: 'bold'}}>{hotel.nama_hotel}</Text>
            <Text style={{fontSize: 7, fontWeight: 'bold', color: COLORS.grey}}>
                Rp. {hotel.harga_hotel}
            </Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Wish list</Text>
        </View>
        
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={allHotels}
        renderItem={({item}) => {
          return <Card hotel={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topHotelCard: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
export default FavoriteScreen;