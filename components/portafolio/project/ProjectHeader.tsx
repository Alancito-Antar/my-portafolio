import { View, Text, Image, Linking, Pressable } from "react-native";
import React from "react";
import tw from "@/tailwind";
import { Project } from "@/lib/projects/types";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProjectHeader({ project }: { project: Project }) {
  const handleStorePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={tw`flex-row items-center gap-x-4 `}>
      <Image
        style={tw`h-20 w-20 rounded-full`}
        source={{
          uri:
            project.icon_url ||
            "https://dynamoprojects.com/wp-content/uploads/2022/12/no-image.jpg",
        }}
      />

      <View style={tw`flex-1 gap-y-1`}>
        <View>
          <Text style={tw`text-white text-3xl`}>{project.name}</Text>
          <View style={tw`rounded-lg bg-blue-500 absolute top-0 right-0 px-2`}>
            <Text style={tw`text-white text-xs capitalize`}>
              {project.type}
            </Text>
          </View>
        </View>
        <View style={tw`flex-row items-center flex-wrap gap-x-2`}>
          {project.tech_stack?.map((x) => (
            <View
              style={tw`px-2 py-1 rounded-full items-center bg-white/10`}
              key={x}
            >
              <Text style={tw`text-white text-sm`}>{x}</Text>
            </View>
          ))}
        </View>

        <View style={tw`flex-row items-center gap-x-2`}>
          {project.appstore_url ? (
            <Pressable onPress={() => handleStorePress(project.appstore_url!)}>
              <Ionicons name="logo-apple-appstore" size={32} color="white" />
            </Pressable>
          ) : null}
          {project.google_play_url ? (
            <Pressable
              onPress={() => handleStorePress(project?.google_play_url!)}
            >
              <Ionicons name="logo-android" size={32} color="white" />
            </Pressable>
          ) : null}
        </View>
      </View>
    </View>
  );
}
