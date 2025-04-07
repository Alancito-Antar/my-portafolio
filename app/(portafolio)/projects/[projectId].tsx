import ProjectImages from "@/components/portafolio/project/ProjectImages";
import ProjectHeader from "@/components/portafolio/project/ProjectHeader";
import ProjectNameAndStack from "@/components/portafolio/project/ProjectHeader";
import { db } from "@/firebaseConfig";
import { Project } from "@/lib/projects/types";
import tw from "@/tailwind";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, FlatList } from "react-native";

export default function ProjectScreen() {
  const { projectId } = useLocalSearchParams();

  const [project, setProject] = useState<Project>();
  const [loading, setLoading] = useState<boolean>(true);

  const getProjectById = async () => {
    setLoading(true);
    try {
      const projectDoc = (
        await getDoc(doc(db, "projects", projectId as string))
      ).data() as Project;

      setProject(projectDoc);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectById();
  }, []);

  if (loading) {
    return (
      <View style={tw`flex-1 items-center justify-center px-4 bg-black`}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (!project) {
    return (
      <View style={tw`flex-1 px-4 bg-black`}>
        <Text>Project was not found</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 gap-y-4 w-full p-4 bg-black`}>
      {/* Header */}
      <ProjectHeader project={project} />
      {/* About */}
      <Text style={tw`text-white`}>{project.about}</Text>
      {/* Images */}
      <ProjectImages images={project.images || []} />
    </View>
  );
}
