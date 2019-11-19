import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import logo from '../../assets/logo.png';

export const Container = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
  background: #191920;
`;

export const Content = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 190px;
  height: 25px;
`;

export const CartContainer = styled(RectButton)`
  width: 24px;
  height: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const CartCount = styled.Text`
  min-height: 20px;
  min-width: 20px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: #7159c1;
  border-radius: 10px;
  position: absolute;
  top: -8px;
  right: -8px;
  padding: 2px;
  overflow: hidden;
`;
