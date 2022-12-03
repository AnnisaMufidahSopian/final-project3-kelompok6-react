import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const IconNavigator = (props) => {
  return (
    <View style>
      <Icon name={props.icon} size={20} color="#bdbdbd" />
    </View>
  );
};

export default IconNavigator;
