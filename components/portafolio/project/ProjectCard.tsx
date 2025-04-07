import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Project } from "@/lib/projects/types";
import { useRouter } from "expo-router";
import tw from "@/tailwind";

export default function ProjectCard({ id, name, icon_url }: Project) {
  const router = useRouter();
  const { height } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={tw`bg-white/8 flex-1 h-[${
        height / 4
      }px] items-center p-4 gap-y-2 justify-center rounded-lg shadow border border-white/20`}
      onPress={() => router.push(`/projects/${id}`)}
    >
      <Image
        style={tw`h-10 w-10 rounded-full`}
        source={{
          uri:
            icon_url ||
            "https://dynamoprojects.com/wp-content/uploads/2022/12/no-image.jpg",
        }}
      />
      <Text style={tw`text-white text-lg`}>{name}</Text>
    </TouchableOpacity>
  );
}
