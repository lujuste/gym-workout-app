import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";
// import { Container } from './styles';

type Props = TouchableOpacityProps & {};

const ExerciseCard: React.FC<Props> = ({ ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems={"center"}
        p={2}
        pr={4}
        rounded={"md"}
        mb={3}
      >
        <Image
          source={{
            uri: "https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-957253398.jpg",
          }}
          w={16}
          h={16}
          rounded={"md"}
          alt="img"
          mr={4}
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading fontSize={"lg"} color="white">
            Remada unilateral
          </Heading>

          <Text fontSize={"sm"} color="gray.200" mt={1} numberOfLines={2}>
            3 series x 12 repeticoes
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" />
      </HStack>
    </TouchableOpacity>
  );
};

export default ExerciseCard;
