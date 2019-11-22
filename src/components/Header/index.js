import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Content, CartContainer, CartCount } from './styles';

function Header({ navigation, cart }) {
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

export default connect(
  state => ({
    cart: state.cart.length,
  }),
  null
)(Header);

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
