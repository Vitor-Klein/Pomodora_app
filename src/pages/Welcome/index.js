import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { LinearGradient } from 'expo-linear-gradient'

import Button from "../../components/Button";

import { styles } from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  const navigateToTimer = useCallback(() => navigation.navigate("Timer"), [
    navigation,
  ]);

  return (
    <LinearGradient
    colors={['#FFFAFA', '#6959CD']}
    style={styles.container}
    >      
        <LottieView
          loop={true}
          autoPlay={true}
          autoSize={false}
          source={require("../../../assets/chill-time.json")}
          style={styles.animation}
        />
        <Text style={styles.text}>Staying focused at work isn’t easy!</Text>
        <Button
          text="Getting Started"
          icon="arrow-right"
          style={styles.button}
          onPress={navigateToTimer}
        />
      
    </LinearGradient>
  );
}
