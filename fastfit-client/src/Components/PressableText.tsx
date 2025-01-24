import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle, StyleProp, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  pularPorEnquanto: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Urbanist-SemiBold",
    color: "#6a707c",
    textAlign: "left"
  }
});

interface PressableTextProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>; // Use StyleProp<ViewStyle>
}

const PressableText: React.FC<PressableTextProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={[style]}>
      <Text style={styles.pularPorEnquanto}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PressableText;