import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../servicies/api';
import * as Location from 'expo-location';

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

interface InicialPosition {
  latitude: number,
  longitude: number,
};

interface Point {
  id: number,
  name: string,
  image: string,
  latitude: number,
  longitude: number,
};

const Points: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [points, setPoints] = useState<Point[]>([])

  const [initialPosition, setInitialPosition] = useState<InicialPosition>({
    latitude: 0,
    longitude: 0,
  });

  const navigation = useNavigation();

  useEffect(() => {
    const loadPosiotion = async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Ooooppps....', 'Precisamos de sua permissão para obter a localização');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition({
        latitude,
        longitude,
      });
    };

    loadPosiotion();
  }, []);

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('points', {
      params: {
        city: 'Rio do Sul',
        uf: 'SC',
        items: [1, 2]
      }
    }).then(response => {
      setPoints(response.data);
    });

  }, []);

  const handleNavigationBack = () => {
    navigation.goBack()
  };

  const handleNavigationToDetail = (id: number) => {
    navigation.navigate('Detail', {point_id: id});
  }

  const handleSelectItem = (id: number) => {
    const alreadySelectd = selectedItems.findIndex(item => item === id);

    if (alreadySelectd >= 0) {
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
          {initialPosition.latitude !== 0 && (
            <Map initialPositionData={initialPosition} >
              {points.map(point => (
                <MapMarker
                  key={String(point.id)}
                  onPress={() => handleNavigationToDetail(point.id)}
                  positionPoint={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                >
                  <MapMarkerContainer>
                    <MapMarkerImage source={{ uri: point.image }} />
                    <MapMarkerTitle>{point.name}</MapMarkerTitle>
                  </MapMarkerContainer>
                </MapMarker>
              ))}
            </Map>
          )}
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