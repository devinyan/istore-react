import React from 'react';
//import axios from 'axios';
import $ from 'jquery';

var Mock = require('mockjs');

Mock.mock(/product1.json/, {
  'product': {
      'title': '肉夹馍',
      'price': '$10'
  }
})
Mock.mock(/product2.json/, {
  'product': {
      'title': '菜夹馍',
      'price': '$10'
  }
})

export default class ProductTitleBreadcrumb extends React.PureComponent {
    state = {
      productTitle: '',
    };
  
    componentDidMount() {
      // const { pid } = this.props.match.params;
      // const callURL = `https://easy-mock.com/mock/5b14997f27efb177b0e1052f/products/detail/${pid}`;
      // axios.get(callURL).then(({ data }) => {
      //   this.setState({ productTitle: data.product.title });
      // });
      var _self = this;
      const pid  = this.props.match.params.pid;
      var url;
      if( pid  === "1"){
        url='product1.json';
      }
      else{
        url='product2.json';
      }
      $.ajax({
        url: url,
        dataType: 'json'
      }).done(function (data, status, jqXHR) {
        _self.setState({ productTitle: data.product.title });
      })
    }
  
    render() {
      const { productTitle } = this.state;
      return (
        <span>{productTitle}</span>
      );
    }
}