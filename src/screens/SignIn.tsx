import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import React from "react";
import BackgroundImg from "@assets/background.png";

import LogoSvg from "@assets/logo.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";
// import { Container } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleNewAcc = () => {
    console.log("chamou!");
    navigation.navigate("signUp");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
    >
      <VStack px={10} flex={1}>
        <Image
          alt="pessoas treinando"
          source={BackgroundImg}
          resizeMode="contain"
          position={"absolute"}
          defaultSource={BackgroundImg}
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm" fontFamily={"heading"}>
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center mb={6}>
          <Heading color="gray.100">Acesse a sua conta</Heading>
        </Center>

        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
        />
        <Input secureTextEntry placeholder="Senha" />

        <Button title="Acessar" />

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily={"body"}>
            Ainda nao tem acesso?
          </Text>
          <Button
            onPress={() => {
              handleNewAcc();
            }}
            title="Criar conta"
            variant={"outline"}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};

export default SignIn;
