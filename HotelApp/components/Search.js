import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Alert } from "react-native";
import Btn from "./Button"

const Form = () => {
  const [text, onChangeText] = React.useState("");
 
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Where do you want to go?"
      />
      <Btn />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Form;