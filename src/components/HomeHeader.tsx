import { HStack, Text, VStack, Heading, Icon } from "native-base";
import React from "react";
import UserPhoto from "./UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// import { Container } from './styles';

const HomeHeader: React.FC = () => {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems={"center"}>
      <UserPhoto
        mr={4}
        size={16}
        source={{ uri: "https://github.com/lujuste.png" }}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize={"md"}>
          Ola,
        </Text>
        <Heading color="gray.100" fontSize={"md"}>
          Lucas
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
};

export default HomeHeader;
