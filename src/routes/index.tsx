import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthRoutes from "./auth.routes";
import { useTheme, Box } from "native-base";

import { useNavigation } from "@react-navigation/native";
import AppRoutes from "./app.routes";

// import { Container } from './styles';

const Routes: React.FC = () => {
  const { colors } = useTheme();

  const theme = DefaultTheme;

  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  );
};

export default Routes;
