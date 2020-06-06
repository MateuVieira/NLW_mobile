import React from 'react';
// import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  GoBack,
  GoBackIcon,
  Title,
  Description,
  MapContainer,
  Map,
  MapMarker,
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
  ItemsContainer,
  ItemsScroll,
  Item,
  ItemImage,
  ItemTitle,
} from './styles';

const Points: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigationBack = () => {
    navigation.goBack()
  };

  const handleNavigationToDetail = () => {
    navigation.navigate('Detail')
  }

  return (
    <>
      <Container>
        <GoBack onPress={handleNavigationBack} >
          <GoBackIcon />
        </GoBack>
        <Title>Bem vindo.</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>
        <MapContainer>
          <Map>
            <MapMarker onPress={handleNavigationToDetail} >
              <MapMarkerContainer>
              <MapMarkerImage source={{uri: 'https://ei.marketwatch.com/Multimedia/2016/11/14/Photos/ZG/MW-FA143_foodpr_20161114104830_ZG.jpg?uuid=ca5a6656-aa81-11e6-95fb-001cc448aede'}} />
              <MapMarkerTitle>Mercado</MapMarkerTitle>
              </MapMarkerContainer>
            </MapMarker>
          </Map>
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ItemsScroll>
          <Item>
            <ItemImage imageUrl={'https://weboverhauls.github.io/demos/svg/checkmark.svg'} />
            <ItemTitle>TEste</ItemTitle>
          </Item>
          <Item>
            <ItemImage imageUrl={'https://weboverhauls.github.io/demos/svg/checkmark.svg'} />
            <ItemTitle>TEste</ItemTitle>
          </Item>
          <Item>
            <ItemImage imageUrl={'https://weboverhauls.github.io/demos/svg/checkmark.svg'} />
            <ItemTitle>TEste</ItemTitle>
          </Item>
          <Item>
            <ItemImage imageUrl={'https://weboverhauls.github.io/demos/svg/checkmark.svg'} />
            <ItemTitle>TEste</ItemTitle>
          </Item>
          <Item>
            <ItemImage imageUrl={'https://weboverhauls.github.io/demos/svg/checkmark.svg'} />
            <ItemTitle>TEste</ItemTitle>
          </Item>
          <Item>
            <ItemImage imageUrl={'https://weboverhauls.github.io/demos/svg/checkmark.svg'} />
            <ItemTitle>TEste</ItemTitle>
          </Item>
        </ItemsScroll>
      </ItemsContainer>
    </>
  );
}

export default Points;