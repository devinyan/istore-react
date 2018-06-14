import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";


export default class Product extends PureComponent {

  render(){
    const pdpUrl = '/product/detail/' + this.props.id;
    return (
      <div className="istore-plp-items ">
        <div className="plp-items-img">
            <Link to={pdpUrl}
                title={this.props.title} className="productMainLink">
               
                <img src={this.props.img}
                    alt={this.props.title} title={this.props.title} id="pdpProduct" width="" height=""/>
                {/* <img src={require(--this.props.img|)} /> */}

            </Link>
        </div>
        <div className="plp-items-text">
            <div className="items-text-title">{this.props.title}</div>
            <div className="items-text-action">
                <div className="items-text-price">{this.props.price}</div>
                <div className="items-text-owner owner-lync">
                    <span className="owner-lync">
                    <Link to={pdpUrl}>
                            <img src="../static/img/Lync-icon.png" className="lync-img" alt=""/>{this.props.owner}
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

