import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, GestureResponderEvent, StyleProp, ViewStyle, TextStyle, Image } from "react-native";

// Define the types for the props
interface LightButtonProps {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;  // Optional style for the button container
  textStyle?: StyleProp<TextStyle>; // Optional style for the text
  imageSource: any; // Image source for the button
}

const LightButton: React.FC<LightButtonProps> = ({ title, onPress, style, textStyle, imageSource }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={[styles.buttonContainer, style]}>
      <View style={styles.button}>
        <Image source={imageSource} style={styles.image} />
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
    borderRadius: 8,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e8ecf4",
    flexDirection: "row", // Align image and text horizontally
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Urbanist-SemiBold",
    color: "#1e232c",
    textAlign: "center", 
  },
  image: {
    width: 27, // Adjust the size of the image as needed
    height: 27, // Adjust the size of the image as needed
  },
});

export default LightButton;