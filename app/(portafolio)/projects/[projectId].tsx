import { db } from "@/firebaseConfig";
import { Project } from "@/lib/projects/types";
import tw from "@/tailwind";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";

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
    <View style={tw`flex-1 gap-y-4 p-4 bg-black`}>
      <View style={tw`flex-row items-center gap-x-4 `}>
        <Image
          style={tw`h-20 w-20 rounded-full`}
          source={{
            uri:
              project?.icon_url ||
              "https://dynamoprojects.com/wp-content/uploads/2022/12/no-image.jpg",
          }}
        />

        <View style={tw`gap-y-1`}>
          <Text style={tw`text-white text-3xl`}>{project?.name}</Text>
          <View style={tw`flex-row items-center flex-wrap gap-x-2`}>
            {project?.tech_stack?.map((x) => (
              <View
                style={tw`px-2 py-1 rounded-full items-center bg-white/10`}
                key={x}
              >
                <Text style={tw`text-white text-sm`}>{x}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={tw`gap-y-1`}>
        <Text style={tw`text-white`}>{project?.about}</Text>
      </View>
    </View>
  );
}
