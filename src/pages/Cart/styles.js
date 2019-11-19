import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 80px 20px 20px 20px;
  background: #fff;
  padding: 15px;
  border-radius: 4px;
`;

export const Products = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageProduct = styled.Image`
  width: 65px;
  height: 65px;
`;

export const InfoProduct = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 8px;
`;
export const TitleProduct = styled.Text`
  font-size: 15px;
`;

export const PriceProduct = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Amount = styled.View`
  background: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
  margin-top: 5px;
`;

export const ValueAmount = styled.TextInput.attrs({
  disableFullscreenUI: true,
})``;

export const AddCart = styled(RectButton)``;
export const RemoveCart = styled(RectButton)``;
export const PriceAmount = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Total = styled.View`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #b3b3b3;
  font-size: 20px;
  font-weight: bold;
`;

export const TotalCart = styled.Text`
  color: #333;
  font-size: 25px;
  font-weight: bold;
`;

export const FinishButton = styled(RectButton)`
  background: #7159c1;
  padding: 10px;
  border-radius: 4px;
`;

export const FinishButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
