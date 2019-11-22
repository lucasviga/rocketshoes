/* eslint-disable react/static-property-placement */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActios from '../../store/modules/cart/actions';

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
  AddCart,
  RemoveCart,
  RemoveAmount,
  PriceAmount,
  Total,
  TotalText,
  TotalCart,
  FinishButton,
  FinishButtonText,
} from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
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

                  <RemoveCart onPress={() => removeFromCart(product.id)}>
                    <Icon name="delete-forever" size={25} color="#7159c1" />
                  </RemoveCart>
                </ProductInfo>

                <Amount>
                  <RemoveAmount onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={15}
                      color="#7159c1"
                    />
                  </RemoveAmount>
                  <ValueAmount value={String(product.amount)} />
                  <AddCart onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={15} color="#7159c1" />
                  </AddCart>

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

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActios, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

Cart.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
};
