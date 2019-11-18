import styled from 'styled-components/native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
`;

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 70px;
`;

export const Product = styled.View`
  width: 245px;
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  margin: 0 15px;
`;

export const ImageProduct = styled.Image`
  width: 190px;
  height: 190px;
`;

// title product
export const Title = styled.Text`
  font-size: 16px;
`;

// price product
export const Price = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin: 14px 0;
`;

export const AddCartButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
`;

export const CartAmount = styled.View`
  display: flex;
  flex-direction: row;
  background: ${darken(0.1, '#7159c1')};
  padding: 12px;
`;

export const AddCartText = styled.Text`
  margin: 0 auto;
  color: #fff;
`;

export const CartAmountText = styled.Text`
  color: #fff;
`;
