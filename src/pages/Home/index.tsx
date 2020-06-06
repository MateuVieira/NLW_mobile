import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Main, 
  Title, 
  Description, 
  Button, 
  ButtonIconSpace,
  ButtonIcon, 
  ButtonText, 
  Footer } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToPoints = () => {
  };

  return (
  <Container  >
    <Main>
      <Image source={require('../../assets/logo.png')} />
      <Title>Seu marketplace de coleta de resíduos</Title>
      <Description>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Description>
    </Main>
    <Footer>
      <Button onPress={handleNavigateToPoints} >
        <ButtonIconSpace>
          <ButtonIcon />
        </ButtonIconSpace>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Footer>
  </Container>
  );
}

export default Home;