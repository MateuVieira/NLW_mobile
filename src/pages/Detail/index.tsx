import React from 'react';
// import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, GoBack, GoBackIcon, } from './styles';

const Detail: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigationBack = () => {
    navigation.goBack()
  };

  return (
    <Container>
      <GoBack onPress={handleNavigationBack} >
        <GoBackIcon />
      </GoBack>
    </Container>
  );
}

export default Detail;