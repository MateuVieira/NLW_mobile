import styled from 'styled-components/native';

import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg';

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  padding-top: ${`${20 + Constants.statusBarHeight}px`};
`;

export const GoBack = styled.TouchableOpacity``;

export const  GoBackIcon = styled(Feather).attrs({
  name: 'arrow-left',
  size: 20,
  color: '#34cb79',
})``;


export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Ubuntu_700Bold';
  margin-top: 24px;
`;

export const Description = styled.Text`
  color: #6C6C80;
  font-size: 16px;
  margin-top: 4px;
  font-family: 'Roboto_400Regular';
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Map = styled(MapView).attrs({
  initialRegion: {
    latitude: -23.0216064,
    longitude: -45.5346316,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014,
  },
})`
  width: 100%;
  height: 100%;
`;

export const MapMarker = styled(Marker).attrs({
  coordinate: {
    latitude: -23.0216064,
    longitude: -45.5346316,
  },
})`
  width: 90px;
  height: 80px; 
`;

export const MapMarkerContainer = styled.View`
  width: 90px;
  height: 70px;
  background-color: #34CB79;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
`;

export const MapMarkerImage = styled.Image`
  width: 90px;
  height: 45px;
  /* resize-mode: 'cover'; */
`;

export const MapMarkerTitle = styled.Text`
  flex: 1;
  font-family: 'Roboto_400Regular';
  color: #FFF;
  font-size: 13px;
  line-height: 23px;
`;

export const ItemsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ItemsScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 20},
})``;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: #fff;
  border-width: 2px;
  border-color: #eee;
  height: 120px;
  width: 120px;
  border-radius: 8px;
  padding: 20px 16px 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  border-color: #34CB79;
  border-width: ${props => props.statusSelectItem ? '2px' : '0px'};
`;

export const ItemImage = styled(SvgUri).attrs(props => ({
  width: 42,
  height: 42,
  uri: props.imageUrl,
}))``;

export const SelectedItem = styled.View`
  border-color: #34CB79;
  border-width: 2px;
`;

export const ItemTitle = styled.Text`
  font-family: 'Roboto_400Regular';
  text-align: center;
  font-size: 13px;
`;

