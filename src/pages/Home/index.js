/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

class Home extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
  };

  state = {
    products: [],
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await api.get('/products');

      this.setState({
        products: response.data,
        loading: false,
      });
    } catch (error) {
      console.tron.log('erro', error);
    }
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products, loading } = this.state;
    const { amount } = this.props;
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

                <AddCartButton onPress={() => this.handleAddProduct(item.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
