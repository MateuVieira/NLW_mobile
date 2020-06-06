import React, { useState, useEffect} from 'react';
// import { SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import api from '../../servicies/api';

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

interface Params {
  point_id: number,
};

interface Data {
  point: {
    image: string,
    name: string,
    email: string,
    whatsapp: string,
    city: string,
    uf: string,
  };
  items: {
    title: string,
  }[];
}

const Detail: React.FC = () => {
  const [data, setData] = useState<Data>({} as Data);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    api.get(`points/${routeParams.point_id}`).then(response => {
      setData(response.data);
    });
  }, []);

  const handleNavigationBack = () => {
    navigation.goBack()
  };

  const handleComposeMail = () => {
    MailComposer.composeAsync({
      subject: 'Interesse na coleta de reśiduos',
      recipients: [data.point.email],
    });
  };

  if (!data.point) {
    return null;
  }

  return (
    <SafeArea>
      <Container>
        <GoBack onPress={handleNavigationBack} >
          <GoBackIcon />
        </GoBack>
        <PointImage source={{ uri: data.point.image}} />
        <PointName>{data.point.name}</PointName>
  <PointItems>{data.items.map(item => item.title).join(', ')}</PointItems>
        <Address>
          <AddressTitle>Endereços</AddressTitle>
          <AddressContent>{`${data.point.city}, ${data.point.uf}`}</AddressContent>
        </Address>
      </Container>
      <Footer>
        <Button>
          <IconWhatsapp />
          <ButtonText>Whatsapp</ButtonText>
        </Button>
        <Button>
          <IconMail onPress={handleComposeMail} />
          <ButtonText>Email</ButtonText>
        </Button>
      </Footer>
    </SafeArea>
  );
}

export default Detail;