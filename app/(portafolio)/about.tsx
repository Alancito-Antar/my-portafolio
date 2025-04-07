import React from "react";
import { Text, View } from "react-native";

function WhoAmICard() {
  return (
    <View>
      <Text>Im</Text>
      <Text>Alan Antar</Text>
    </View>
  );
}

function AboutMe() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default function AboutScreen() {
  return (
    <View>
      <WhoAmICard />
      <AboutMe />
    </View>
  );
}
