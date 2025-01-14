import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, GestureResponderEvent, StyleProp, ViewStyle, TextStyle, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

interface LightButtonProps {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  imageSource: any;
}

const LightButton: React.FC<LightButtonProps> = ({ title, onPress, style, textStyle, imageSource }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={[styles.buttonContainer, style]}>
      <View style={styles.button}>
        <Image source={imageSource} style={styles.image} />
        {title && <Text style={[styles.buttonText, textStyle]}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: width * 0.9,
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 8,
    height: height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e8ecf4",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Urbanist-SemiBold",
    color: "#1e232c",
    textAlign: "center",
    marginLeft: 10,
  },
  image: {
    width: 27,
    height: 27,
  },
});

export default LightButton;