import styled from 'styled-components/native';

import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

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

export const  PointImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-top: 32px;
`;
    
export const  PointName = styled.Text`
  color: #322153;
  font-size: 28px;
  font-family: 'Ubuntu_700Bold';
  margin-top: 24px;
`;
    

export const  PointItems = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  color: #6C6C80;
`;
    
export const  Address = styled.View`
  margin-top: 32px;
`;
    
export const  AddressTitle = styled.Text`
  color: #322153;
  font-family: 'Roboto_500Medium';
  font-size: 16px;
`;
    
export const  AddressContent = styled.Text`
  font-family: 'Roboto_400Regular';
  line-height: 24px;
  margin-top: 8px;
  color: #6C6C80;
`;

export const  Footer = styled.View`
  /* borderTopWidth: StyleSheet.hairlineWidth; */
  border-color: #999;
  padding: 20px 32px;
  flex-direction: row;
  justify-content: space-between;
`;
    
export const  Button = styled.View`
  width: 48%;
  background-color: #34CB79;
  border-radius: 10px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const  ButtonText = styled.Text`
  margin-left: 8px;
  color: #FFF;
  font-size: 16px;
  font-family: 'Roboto_500Medium';
`;
    