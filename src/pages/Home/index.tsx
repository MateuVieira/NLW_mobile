import React from 'react';
import { View, Image } from 'react-native';

import { Container,Main, Title, Description } from './styles';

const Home: React.FC = () => {
  return (
  <Container source={require('../../assets/home-background.png')} >
    <Main>
      <Image source={require('../../assets/logo.png')} />
      <Title>Seu marketplace de coleta de resíduos</Title>
      <Description>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Description>
    </Main>
  </Container>
  );
}

export default Home;