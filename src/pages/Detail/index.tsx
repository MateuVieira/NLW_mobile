import React from 'react';
// import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  GoBack, 
  GoBackIcon,
  PointImage,
  PointName,
  PointItems,
} from './styles';

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
      <PointImage source={{ uri: 'https://ei.marketwatch.com/Multimedia/2016/11/14/Photos/ZG/MW-FA143_foodpr_20161114104830_ZG.jpg?uuid=ca5a6656-aa81-11e6-95fb-001cc448aede'}} />
      <PointName>Mercado teste</PointName>
      <PointItems>Lâmpadas, Óleo de Cozinha</PointItems>
    </Container>
  );
}

export default Detail;