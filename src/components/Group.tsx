import React from "react";
import { Text, Pressable, IPressableProps } from "native-base";

// import { Container } from './styles';
type Props = IPressableProps & {
  name: string;
  isActive: boolean;
};

const Group: React.FC<Props> = ({ name, isActive, ...rest }) => {
  return (
    <Pressable
      justifyContent={"center"}
      alignItems={"center"}
      mr={3}
      w={24}
      h={10}
      bg={"gray.600"}
      rounded="md"
      overflow={"hidden"}
      isPressed={isActive}
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        fontWeight={"bold"}
        fontSize={"xs"}
        color="gray.200"
        textTransform={"uppercase"}
      >
        {" "}
        {name}{" "}
      </Text>
    </Pressable>
  );
};

export default Group;
