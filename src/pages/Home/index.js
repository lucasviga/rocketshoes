import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

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
  Loading,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const amount = useSelector(state =>
    state.cart.reduce((TotalAmount, product) => {
      TotalAmount[product.id] = product.amount;
      return TotalAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const response = await api.get('/products');

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.tron.log('erro', error);
      }
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ImageProduct source={{ uri: item.image }} />
              <Title>{item.title}</Title>

              <Price>{item.price}</Price>

              <AddCartButton onPress={() => handleAddProduct(item.id)}>
                <CartAmount>
                  <Icon name="add-shopping-cart" size={20} color="#FFF" />
                  <CartAmountText>{amount[item.id] || 0}</CartAmountText>
                </CartAmount>

                <AddCartText>ADICIONAR</AddCartText>
              </AddCartButton>
            </Product>
          )}
        />
      )}
    </Container>
  );
}
