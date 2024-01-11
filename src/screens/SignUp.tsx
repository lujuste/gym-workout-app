import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import React from "react";
import BackgroundImg from "@assets/background.png";

import LogoSvg from "@assets/logo.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
// import { Container } from './styles';

const SignUp: React.FC = () => {
  const navigate = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
    >
      <VStack px={10} flex={1}>
        <Image
          alt="pessoas treinando"
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          resizeMode="contain"
          position={"absolute"}
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm" fontFamily={"heading"}>
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center mb={6}>
          <Heading color="gray.100">Crie a sua conta</Heading>
        </Center>

        <Input placeholder="Nome" />

        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
        />
        <Input secureTextEntry placeholder="Senha" />

        <Button title="Criar e acessar" />

        <Center mt={24}>
          <Button
            onPress={() => navigate.goBack()}
            title="Voltar para login"
            variant={"outline"}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};

export default SignUp;
