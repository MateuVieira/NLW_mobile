import React from 'react';
// import { View } from 'react-native';

import { Container, GoBack, GoBackIcon, } from './styles';

const Detail: React.FC = () => {
  return (
    <Container>
      <GoBack>
        <GoBackIcon />
      </GoBack>
    </Container>
  );
}

export default Detail;