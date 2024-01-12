import { Center, FlatList, HStack, Heading, Text, VStack } from "native-base";
import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Group from "../components/Group";
import ExerciseCard from "../components/ExerciseCard";

// import { Container } from './styles';

const Home: React.FC = () => {
  const [groupSelected, setGroupSelected] = useState("costa");
  const [groups, setGroups] = useState([
    "Costas",
    "Ombro",
    "Biceps",
    "Triceps",
  ]);
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
            4
          </Text>
        </HStack>

        <ExerciseCard />
        <ExerciseCard />
      </VStack>
    </VStack>
  );
};

export default Home;
