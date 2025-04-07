import { FlatList, Image } from "react-native";
import React from "react";
import tw from "@/tailwind";

export default function ProjectImages({ images }: { images: string[] }) {
  return (
    <FlatList
      data={images}
      horizontal
      snapToInterval={200}
      decelerationRate="fast"
      renderItem={({ item }) => (
        <Image
          style={tw`w-50 h-100 rounded-lg`}
          source={{ uri: item }}
          resizeMode="contain"
        />
      )}
    />
  );
}
