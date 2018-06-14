import React from 'react';
import axios from 'axios';

export default class ProductTitleBreadcrumb extends React.PureComponent {
    state = {
      productTitle: '',
    };
  
    componentDidMount() {
      const { pid } = this.props.match.params;
      const callURL = `https://easy-mock.com/mock/5b14997f27efb177b0e1052f/products/detail/${pid}`;
      axios.get(callURL).then(({ data }) => {
        this.setState({ productTitle: data.product.title });
      });
    }
  
    render() {
      const { productTitle } = this.state;
      return (
        <span>{productTitle}</span>
      );
    }
}