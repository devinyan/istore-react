import React, { PureComponent } from 'react';
import Logo from './Logo';
import {Login} from './LoginForm';
import Navigation from './Navigation';
import {Cart} from './Detail';
import Search from './Search'

export default class Header extends PureComponent {
  render(){
    return (
      <div>
        <a href="#skip-to-content" className="skiptocontent" data-role="none">Skip to content</a>
        <a href="#skiptonavigation" className="skiptonavigation" data-role="none">Skip to navigation menu</a>
        <div className="red">
            <div className="is-header clearfix">
                <div className="container">
                    <div className="row">
                        <Logo/>
                        <Login/>
                        <div className="col-sm-7">
                            <Navigation/>
                            <Search/>
                        </div>
                        <Cart/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ul className="clear_fix">
            </ul>
        </div>
      </div>
    )
  }
}

