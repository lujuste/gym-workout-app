import React from "react";
import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

// import { Container } from './styles';

interface ButtonProps extends IButtonProps {
  title: string;
  variant?: "solid" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = "solid",
  ...rest
}) => {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      _pressed={{ bg: variant === "outline" ? "gray.500" : "green.300" }}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"green.500"}
    >
      <Text color="white" fontFamily={"heading"} fontSize={"sm"} rounded={"sm"}>
        {" "}
        {title}{" "}
      </Text>
    </ButtonNativeBase>
  );
};

export default Button;
