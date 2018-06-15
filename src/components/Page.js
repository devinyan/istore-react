import React, { PureComponent } from 'react';
import LoginForm from './LoginForm';
import Content from './Content';
import Breadcrumb from './Breadcrumb';
import Detail from './Detail';
import {Carts} from './Detail';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from './HomePage';
export default class Page extends PureComponent {

  render(){
    return (
    <BrowserRouter>
      <div id="page">
        <Route component={Breadcrumb} /> 
        <div id="content" className="clearfix">
            <div className="container">
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginForm} />
                <Route path="/product" component={Content} />
                <Route path="/category/:category" component={Content} />
                <Route path="/product/detail/:pid" component={Detail} />
                <Route path="/carts" component={Carts} />
            </div>
        </div>
    </div>
    </BrowserRouter>
    )
  }
}

