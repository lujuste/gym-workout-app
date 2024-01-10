import React from "react";

import { Spinner, Center } from "native-base";

const Loading: React.FC = () => {
  return (
    <Center bg="gray.700" flex={1}>
      <Spinner color="green.500" />
    </Center>
  );
};

export default Loading;
