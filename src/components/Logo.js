import React, { PureComponent } from 'react';
import logo from '../static/img/logo-hybris.png';
export default class Logo extends PureComponent {
  render(){
    return (
      <div className="col-sm-2">
				<div className="is-logo">
          <div className="is-header-logo">
            <a href="/">
              <img title="iStore Site" alt="iStore Site" src={logo}/>
            </a>
	      	</div>
        </div>
        <div className="shoptext">
					<a href="/">Shopping</a>
        </div>
			</div>
    )
  }

}

