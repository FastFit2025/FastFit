import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from "react-native";

// Define the types for the props
interface MainButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;  // Optional style for the button container
  textStyle?: StyleProp<TextStyle>; // Optional style for the text
}

const MainButton: React.FC<MainButtonProps> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.buttonContainer, style]}>
      <View style={styles.button}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 16,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5dcb6a",
  },
  buttonText: {
    fontSize: 20,
    letterSpacing: -1,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
    color: "#fff",
    textAlign: "left",
  },
});

export default MainButton;
