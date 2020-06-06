import React, { useState } from 'react';
import { View, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Body,
  Main,
  Title,
  Description,
  Input,
  Button,
  ButtonIconSpace,
  ButtonIcon,
  ButtonText,
  Footer
} from './styles';

const Home: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  const handleNavigateToPoints = () => {
    navigation.navigate('Points', {uf, city});
  };

  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Body>
        <Main>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Title>Seu marketplace de coleta de resíduos</Title>
            <Description>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Description>
          </View>
        </Main>
        <Footer>
          <Input
            placeholder="Digite a UF"
            value={uf}
            onChangeText={setUf}
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
          />
          <Input
            placeholder="Digite a cidade"
            value={city}
            onChangeText={setCity}
            autoCorrect={false}
          />
          <Button onPress={handleNavigateToPoints} >
            <ButtonIconSpace>
              <ButtonIcon />
            </ButtonIconSpace>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </Footer>
      </Body>
    </Container >
  );
}

export default Home;