import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Products,
  ProductInfo,
  ImageProduct,
  InfoProduct,
  TitleProduct,
  PriceProduct,
  Amount,
  ValueAmount,
  AddCart,
  RemoveCart,
  PriceAmount,
  Total,
  TotalText,
  TotalCart,
  FinishButton,
  FinishButtonText,
} from './styles';

function Cart() {
  return (
    <Container>
      <Products>
        <ProductInfo>
          <ImageProduct
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/chuteira-campo-nike-bravata-2-fg/06/D12-2777-006/D12-2777-006_detalhe1.jpg?ims=326x',
            }}
          />

          <InfoProduct>
            <TitleProduct>Chuteira Nike 7.0</TitleProduct>
            <PriceProduct>R$ 179.90</PriceProduct>
          </InfoProduct>
        </ProductInfo>

        <Icon name="delete-forever" size={25} color="#7159c1" />
      </Products>

      <Amount>
        <RemoveCart>
          <Icon name="remove-circle-outline" size={15} color="#7159c1" />
        </RemoveCart>
        <ValueAmount value="2" />
        <AddCart>
          <Icon name="add-circle-outline" size={15} color="#7159c1" />
        </AddCart>

        <PriceAmount>R$ 179.90</PriceAmount>
      </Amount>

      <Total>
        <TotalText>TOTAL</TotalText>
        <TotalCart>R$179.90</TotalCart>
      </Total>

      <FinishButton>
        <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
      </FinishButton>
    </Container>
  );
}

export default Cart;
