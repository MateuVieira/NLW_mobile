import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from '../../servicies/api';

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

interface Item {
  id: number;
  title: string,
  image_url: string,
};

import api from '../../servicies/api';

const Points: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  }, []);

  const handleNavigationBack = () => {
    navigation.goBack()
  };

  const handleNavigationToDetail = () => {
    navigation.navigate('Detail')
  }

  const handleSelectItem = (id: number) => {
    const alreadySelectd = selectedItems.findIndex(item => item === id);

    if(alreadySelectd >= 0 ) {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

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
                <MapMarkerImage source={{ uri: 'https://ei.marketwatch.com/Multimedia/2016/11/14/Photos/ZG/MW-FA143_foodpr_20161114104830_ZG.jpg?uuid=ca5a6656-aa81-11e6-95fb-001cc448aede' }} />
                <MapMarkerTitle>Mercado</MapMarkerTitle>
              </MapMarkerContainer>
            </MapMarker>
          </Map>
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ItemsScroll>
          {items.map(item => (
            <Item 
              key={item.id} 
              onPress={() => handleSelectItem(item.id)} 
              statusSelectItem={selectedItems.includes(item.id)}  
            >
              <ItemImage imageUrl={item.image_url} />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </ItemsScroll>
      </ItemsContainer>
    </>
  );
}

export default Points;