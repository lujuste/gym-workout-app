import { Center, Text, VStack } from "native-base";
import React from "react";
import HeaderScreen from "../components/HeaderScreen";

// import { Container } from './styles';

const History: React.FC = () => {
  return (
    <VStack flex={1}>
      <HeaderScreen title="Historico de Exercicios" />
    </VStack>
  );
};

export default History;
