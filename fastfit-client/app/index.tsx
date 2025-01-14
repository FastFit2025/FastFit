import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MainButton from "../src/Components/MainButton";
import SecondaryButton from "../src/Components/SecondaryButton";


const loadFonts = async () => {
  await Font.loadAsync({
    "Urbanist-SemiBold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
}

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 42, // Add padding on top
      }}
    >
      
      <MainButton 
        title="Já tenho uma conta" 
        onPress={() => {}} 
        style={{ marginBottom: 15 }} 
      />
      
      <SecondaryButton 
        title="Ainda não tenho uma conta FastFit 😞" 
        onPress={() => {}} 
      />
    </View>
  );
}
