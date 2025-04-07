import {
  View,
  Text,
  ActivityIndicator,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Project } from "@/lib/projects/types";
import tw from "@/tailwind";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ProjectCard from "@/components/portafolio/project/ProjectCard";

export default function ProjectsScreen() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getProjects = async () => {
    setLoading(true);
    try {
      const querySnapshot = (await getDocs(collection(db, "projects"))).docs;
      setProjects(
        querySnapshot.map((doc) => {
          const project: Project = { ...doc.data(), id: doc.id } as Project;
          return project;
        })
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <View style={tw`flex-1 gap-y-4 pt-[${insets.top + 16}px] bg-black`}>
      <View style={tw`gap-y-1`}>
        <Text style={tw`text-white text-3xl mx-4`}>Hey there! Im Alan!</Text>
        <Text style={tw`text-white text-sm mx-4`}>
          Here are the project I have worked on so far! Let me know if you have
          any questions!
        </Text>
      </View>

      {loading && <ActivityIndicator />}

      <FlatList
        contentContainerStyle={tw`px-4 pb-[${insets.bottom || 16}px] gap-y-2`}
        columnWrapperStyle={tw`gap-x-2`}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        numColumns={2}
        snapToInterval={width - 32}
        data={projects}
        renderItem={({ item }) => <ProjectCard {...item} />}
      />
    </View>
  );
}
