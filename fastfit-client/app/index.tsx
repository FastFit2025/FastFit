import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, Alert } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MainButton from "../src/Components/MainButton";
import SecondaryButton from "../src/Components/SecondaryButton";
import LightButton from "../src/Components/LightButton";
import PressableText from "@/src/Components/PressableText";

const loadFonts = async () => {
  await Font.loadAsync({
    "Urbanist-SemiBold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf")
  });
};

export default function Index() {
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
    <View style={styles.container}>
      <Image
        source={require("../assets/images/stock-images/malhado_segurando_marmita.png")}
        style={styles.image}
      />
      <Image
        source={require("../assets/images/logos/fastfit-verde.png")}
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <MainButton
          title="Já tenho uma conta"
          onPress={() => showAlert("Já tenho uma conta clicado")}
          style={{ marginBottom: 15 }}
        />
        <SecondaryButton
          title="Ainda não tenho uma conta FastFit 😞"
          onPress={() => showAlert("Ainda não tenho uma conta FastFit clicado")}
        />
      </View>
      <View style={styles.enterWith}>
        <View style={styles.lineContainer}>
          <Image
            source={require("../assets/images/line.png")}
            style={styles.line}
          />
          <Text style={styles.textEntreCom}>Ou entre com</Text>
          <Image
            source={require("../assets/images/line.png")}
            style={styles.line}
          />
        </View>
        <View style={styles.lightButtonRow}>
          <LightButton
            onPress={() => showAlert("Entrar com Google clicado")}
            imageSource={require("../assets/images/icons/google.png")}
            style={{ width: 155 }} // Add margin to separate the buttons
          />
          <LightButton
            onPress={() => showAlert("Entrar com Apple clicado")}
            imageSource={require("../assets/images/icons/apple.png")}
            style={{ width: 155 }}
          />
        </View>
      </View>
      <PressableText
        style={styles.pressableText}
        text="Pular por enquanto"
        onPress={() => showAlert("Pular por enquanto clicado")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  image: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 470,
    resizeMode: "cover"
  },
  logo: {
    position: "absolute",
    top: 24,
    width: 200,
    height: 100,
    resizeMode: "contain"
  },
  buttonContainer: {
    position: "absolute",
    top: 485,
    bottom: 201,
    left: 5,
    right: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  enterWith: {
    position: "absolute",
    bottom: 110, // !
    width: "100%",
    alignItems: "center"
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 5,
    bottom: 7
  },
  line: {
    width: 110,
    height: 1.5,
  },
  textEntreCom: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Urbanist-SemiBold",
    color: "#6a707c",
    textAlign: "center",
    marginHorizontal: 10
  },
  lightButtonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 10
  },
  pressableText: {
    position: "absolute",
    bottom: 45,
    right: 20
  },
});
