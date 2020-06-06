import React from 'react';
// import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  SafeArea,
  Container,
  GoBack,
  GoBackIcon,
  PointImage,
  PointName,
  PointItems,
  Address,
  AddressTitle,
  AddressContent,
  Footer,
  Button,
  IconWhatsapp,
  IconMail,
  ButtonText,
} from './styles';

const Detail: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigationBack = () => {
    navigation.goBack()
  };

  return (
    <SafeArea>
      <Container>
        <GoBack onPress={handleNavigationBack} >
          <GoBackIcon />
        </GoBack>
        <PointImage source={{ uri: 'https://ei.marketwatch.com/Multimedia/2016/11/14/Photos/ZG/MW-FA143_foodpr_20161114104830_ZG.jpg?uuid=ca5a6656-aa81-11e6-95fb-001cc448aede' }} />
        <PointName>Mercado teste</PointName>
        <PointItems>Lâmpadas, Óleo de Cozinha</PointItems>
        <Address>
          <AddressTitle>Endereços</AddressTitle>
          <AddressContent>Rio do Sul, SC</AddressContent>
        </Address>
      </Container>
      <Footer>
        <Button>
          <IconWhatsapp />
          <ButtonText>Whatsapp</ButtonText>
        </Button>
        <Button>
          <IconMail />
          <ButtonText>Email</ButtonText>
        </Button>
      </Footer>
    </SafeArea>
  );
}

export default Detail;