import { Center, FlatList, HStack, Heading, Text, VStack } from "native-base";
import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Group from "../components/Group";
import ExerciseCard from "../components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";

// import { Container } from './styles';

const Home: React.FC = () => {
  const [exercises, setExercises] = useState([
    "Remada unilateral",
    "Remada curvada",
  ]);
  const [groupSelected, setGroupSelected] = useState("costa");
  const [groups, setGroups] = useState([
    "Costas",
    "Ombro",
    "Biceps",
    "Triceps",
  ]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleOpenExerciseDetails = () => {
    navigation.navigate("exercise");
  };

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        horizontal
        my={10}
        maxH={10}
        _contentContainerStyle={{ px: 8 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            onPress={() => setGroupSelected(item)}
            isActive={groupSelected === item}
            name={item}
          />
        )}
      />
      <VStack flex={1} px={8}>
        <HStack justifyContent={"space-between"} mb={5}>
          <Heading color="gray.200" fontSize={"md"}>
            Exercicios
          </Heading>
          <Text color="gray.200" fontSize={"sm"}>
            {exercises?.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
        {/* <ExerciseCard onPress={handleOpenExerciseDetails} /> */}
      </VStack>
    </VStack>
  );
};

export default Home;
