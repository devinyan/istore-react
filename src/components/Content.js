import React, { Component } from 'react';
import Product from './Product';
import Filter from './Filter';
import axios from 'axios';

export default class Content extends Component {



    constructor(){
        super();
        console.log(this);
        this.state ={
            products : []
        }
       
      }
      static defaultProps = {
        products : []
      }
      componentWillMount() {
        this.getProductsByCategory();
      }
      getProductsByCategory() {
        let self = this;
        let isContainMatch = this.props.match ?  true : false;
        let category = isContainMatch ? this.props.match.params.category  : 'all';
        let callURL = 'https://easy-mock.com/mock/5b14997f27efb177b0e1052f/products/' + category;
        axios.get(callURL)
          .then(res => {
              console.log("self this "+self.props.products);
              //self.props.products = res.data.products;
            this.setState({
                products: res.data.products
            });
          });
      }




  render(){
    return (
        <div className="is-content">
        <div className="container">
            <div id="globalMessages">
            </div>
            <div className="col-sm-12 facetNavigation">
                <Filter/>
            </div>
            <div className="col-sm-12">
                <div className="plp-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="istore-plp-grid clearfix">

                                {
                                    this.state.products.map((item, index) => {
                                        return <Product key = {index}{...item}/>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="is-plp-title">
                            <div className="bottom clearfix">
                                <div className="col-md-12">
                                    <div className="right">
                                    </div>
                                </div>
    
                            </div>
    
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
      
    )
  }
}

