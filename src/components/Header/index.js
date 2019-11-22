import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Content, CartContainer, CartCount } from './styles';

export default function Header({ navigation }) {
  const cart = useSelector(state => state.cart.length);

  return (
    <Container>
      <Content>
        <Logo />
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={30} color="#FFF" />
          <CartCount>{cart}</CartCount>
        </CartContainer>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
