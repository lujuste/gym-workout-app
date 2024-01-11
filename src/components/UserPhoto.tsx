import { Image, IImageProps } from "native-base";
import React from "react";

type Props = IImageProps & {
  size: number;
};

// import { Container } from './styles';

const UserPhoto: React.FC<Props> = ({ size, ...rest }) => {
  return (
    <Image
      borderWidth={2}
      borderColor={"gray.400"}
      w={size}
      h={size}
      rounded={"full"}
      {...rest}
    />
  );
};

export default UserPhoto;
