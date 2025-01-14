import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, Alert, Dimensions, ScrollView } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MainButton from "../src/Components/MainButton";
import SecondaryButton from "../src/Components/SecondaryButton";
import LightButton from "../src/Components/LightButton";
import PressableText from "@/src/Components/PressableText";

const { width, height } = Dimensions.get("window");

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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/stock-images/malhado_segurando_marmita.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Image
        source={require("../assets/images/logos/fastfit-verde.png")}
        style={styles.logo}
        resizeMode="contain"
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
            style={{ width: width * 0.4 }}
          />
          <LightButton
            onPress={() => showAlert("Entrar com Apple clicado")}
            imageSource={require("../assets/images/icons/apple.png")}
            style={{ width: width * 0.4 }}
          />
        </View>
      </View>
      <PressableText
        style={styles.pressableText}
        text="Pular por enquanto"
        onPress={() => showAlert("Pular por enquanto clicado")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: height * 0.4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: width * 0.5,
    height: height * 0.1,
    marginBottom: 20,
    marginTop: height * 0.4, // Adjust to position below the image
  },
  buttonContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  enterWith: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 5,
  },
  line: {
    width: width * 0.3,
    height: 1.5,
  },
  textEntreCom: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Urbanist-SemiBold",
    color: "#6a707c",
    textAlign: "center",
    marginHorizontal: 10,
  },
  lightButtonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  pressableText: {
    position: "absolute",
    bottom: 40,
    right: 30,
  },
});
