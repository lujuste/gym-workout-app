import { Center, Heading, Text, VStack } from "native-base";
import React, { useState } from "react";
import HeaderScreen from "../components/HeaderScreen";
import HistoryCard from "../components/HistoryCard";
import { SectionList } from "react-native";

// import { Container } from './styles';

const History: React.FC = () => {
  const [exercises, setExercises] = useState([
    {
      title: "28.02.2022",
      data: ["Puxada frontal", "Remada unilateral"],
    },
    {
      title: "28.02.2022",
      data: ["Puxada frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <HeaderScreen title="Historico de Exercicios" />
      <SectionList
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <>
            <VStack px={9}>
              <HistoryCard />
            </VStack>
          </>
        )}
        sections={exercises}
        renderSectionHeader={({ section }: any) => (
          <Heading px={9} fontSize="md" mt={10} mb={3} color="gray.300">
            {section?.title}
          </Heading>
        )}
        contentContainerStyle={
          exercises.length === 0 && {
            flex: 1,
            justifyContent: "center",
          }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign={"center"}>
            Nao ha textos registrados ate o momento. {"\n"}
            Vamos treinar hoje?
          </Text>
        )}
      />
    </VStack>
  );
};

export default History;
