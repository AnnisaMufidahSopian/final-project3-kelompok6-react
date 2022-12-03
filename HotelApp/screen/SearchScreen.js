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
import { useSelector } from "react-redux";
const width = Dimensions.get('window').width / 2 - 30;

const FavoriteScreen = ({navigation}) => {


    const allHotels = useSelector((state) => state.home.hotel);
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({hotel}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', hotel)}>
        <View style={style.topHotelCard}>
            <View
            style={{
                position: 'absolute',
                top: 5,
                right: 5,
                zIndex: 1,
                flexDirection: 'row',
            }}>
            <Icon name="star" size={15} color={COLORS.orange} />
            <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 15}}>
                {hotel.rating_hotel}
            </Text>
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
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
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