import React from 'react';
import { View, Image } from 'react-native';

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
  return (
  <Container  >
    <Main>
      <Image source={require('../../assets/logo.png')} />
      <Title>Seu marketplace de coleta de resíduos</Title>
      <Description>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Description>
    </Main>
    <Footer>
      <Button onPress={() => {}} >
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