import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  List,
  Product,
  ImageProduct,
  Title,
  Price,
  AddCartButton,
  AddCartText,
  CartAmount,
  CartAmountText,
} from './styles';

function Home() {
  return (
    <Container>
      <List>
        <Product>
          <ImageProduct
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/chuteira-campo-nike-bravata-2-fg/06/D12-2777-006/D12-2777-006_detalhe1.jpg?ims=326x',
            }}
          />
          <Title>Chuteria Nike 7.0</Title>

          <Price>R$ 129,90</Price>

          <AddCartButton>
            <CartAmount>
              <Icon name="add-shopping-cart" size={20} color="#FFF" />
              <CartAmountText>3</CartAmountText>
            </CartAmount>

            <AddCartText>ADICIONAR</AddCartText>
          </AddCartButton>
        </Product>

        <Product>
          <ImageProduct
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/chuteira-campo-nike-bravata-2-fg/06/D12-2777-006/D12-2777-006_detalhe1.jpg?ims=326x',
            }}
          />
          <Title>Chuteria Nike 7.0</Title>

          <Price>R$ 129,90</Price>

          <AddCartButton>
            <CartAmount>
              <Icon name="add-shopping-cart" size={20} color="#FFF" />
              <CartAmountText>3</CartAmountText>
            </CartAmount>

            <AddCartText>ADICIONAR</AddCartText>
          </AddCartButton>
        </Product>
      </List>
    </Container>
  );
}

export default Home;
