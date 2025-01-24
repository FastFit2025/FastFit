import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, Alert, Dimensions, ScrollView } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Input from "@/src/Components/Input";
import LightButton from "@/src/Components/LightButton";
import PressableText from "@/src/Components/PressableText";

const { width, height } = Dimensions.get("window");

const loadFonts = async () => {
  await Font.loadAsync({
    "Urbanist-SemiBold": require("@/assets/fonts/Urbanist-SemiBold.ttf"),
    "Montserrat-SemiBold": require("@/assets/fonts/Montserrat-SemiBold.ttf")
  });
};

export default function Login() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const showAlert = (message: string) => {
    Alert.alert(message);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Input />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: "center",
      backgroundColor: "white",
      paddingVertical: 20,
    },
  });
  