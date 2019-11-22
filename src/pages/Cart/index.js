/* eslint-disable react/static-property-placement */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ImageProduct,
  InfoProduct,
  TitleProduct,
  PriceProduct,
  Amount,
  ValueAmount,
  Controls,
  QtndControls,
  RemoveCart,
  PriceAmount,
  Total,
  TotalText,
  TotalCart,
  FinishButton,
  FinishButtonText,
} from './styles';

function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: product.price * product.amount,
    }))
  );

  const total = useSelector(state =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <Products>
            {cart.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ImageProduct source={{ uri: product.image }} />

                  <InfoProduct>
                    <TitleProduct>{product.title}</TitleProduct>
                    <PriceProduct>R$ {product.price}</PriceProduct>
                  </InfoProduct>

                  <RemoveCart
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <Icon name="delete-forever" size={25} color="#7159c1" />
                  </RemoveCart>
                </ProductInfo>

                <Amount>
                  <Controls>
                    <QtndControls onPress={() => decrement(product)}>
                      <Icon
                        name="remove-circle-outline"
                        size={15}
                        color="#7159c1"
                      />
                    </QtndControls>
                    <ValueAmount value={String(product.amount)} />
                    <QtndControls onPress={() => increment(product)}>
                      <Icon
                        name="add-circle-outline"
                        size={15}
                        color="#7159c1"
                      />
                    </QtndControls>
                  </Controls>

                  <PriceAmount>R$ {product.subtotal}</PriceAmount>
                </Amount>
              </Product>
            ))}
          </Products>

          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalCart>{total}</TotalCart>
          </Total>

          <FinishButton>
            <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
          </FinishButton>
        </>
      ) : (
        <TotalText>Carrinho Vazio</TotalText>
      )}
    </Container>
  );
}

export default Cart;
