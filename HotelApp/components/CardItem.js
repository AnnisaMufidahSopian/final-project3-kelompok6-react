import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Card } from "@rneui/themed";

const CardItem = ({
    name,
    picture,
    location,
    email,
  }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card>
          <Card.Title>
            {name.first} {name.last}
          </Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{ uri: picture.medium }}
          />
          <Text style={{ marginBottom: 10 }}>
            Jalan {location.street.number} {location.street.name}
            {location.city} {location.country}{" "}
            {location.postcode}
          </Text>
          <Text style={{ marginBottom: 10 }}>Email: {email}</Text>
        </Card>
    </ScrollView>
  );
};

export default CardItem;
