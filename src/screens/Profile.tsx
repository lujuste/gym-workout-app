import {
  Center,
  ScrollView,
  Skeleton,
  VStack,
  Text,
  Heading,
  useToast,
} from "native-base";
import React, { useState } from "react";
import HeaderScreen from "../components/HeaderScreen";
import UserPhoto from "../components/UserPhoto";
import { Alert, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

// import { Container } from './styles';
type Props = FileSystem.FileInfo | any;

const Profile: React.FC = () => {
  const [photoIsLoad, setPhotoIsLoad] = useState(false);
  const [userPhoto, setUserPhoto] = useState("https://github.com/lujuste.png");
  const toast = useToast();

  async function handleUserPhotoSelect() {
    try {
      setPhotoIsLoad(true);
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      // console.log(photoSelected);

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo: Props = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        );

        if (photoInfo && photoInfo.size / 1024 / 1024 > 5) {
          toast.show({
            title: "Imagem nao suportada, maximo permitido 5MB",
            placement: "top",
            bgColor: "red.500",
          });
          return;
        }

        setUserPhoto(photoSelected.assets[0].uri);
        setPhotoIsLoad(false);
      }
    } catch (err) {
      setPhotoIsLoad(false);
    } finally {
      setPhotoIsLoad(false);
    }
  }

  return (
    <VStack flex={1}>
      <HeaderScreen title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoad ? (
            <Skeleton
              startColor={"gray.400"}
              endColor={"gray.300"}
              w={33}
              h={33}
              rounded={"full"}
            />
          ) : (
            <UserPhoto source={{ uri: userPhoto }} alt="Foto" size={33} />
          )}
          <TouchableOpacity onPress={() => handleUserPhotoSelect()}>
            <Text
              color="green.500"
              fontWeight={"bold"}
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="gray.600" />
          <Input placeholder="Email" bg="gray.600" isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2}>
            Alterar senha
          </Heading>

          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />
          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
          <Input
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />
          <Button title="Atualizar" />
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Profile;
