import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import CartItem from './CartItem';
import lyncicon from '../static/img/Lync-icon.png';
var EventEmitter = require('events').EventEmitter;
let emitter = new EventEmitter();
export default class Detail extends Component {


  constructor() {
    super();
    this.state = {
      product: {},
      style: {
        display: 'none'
      }
    }
  }

  addToCart = () => {
    let cartLists = cookie.load('cartLists') ? cookie.load('cartLists') : [];
    cartLists.push(this.state.product);
  }

  componentWillMount() {
    this.getProductByID();
  }
  componentDidMount(){
    document.getElementsByClassName('is-content')[0].style.display='none';    
  }
  getProductByID() {
    let pid = this.props.match.params.pid;
    let callURL = 'https://easy-mock.com/mock/5b14997f27efb177b0e1052f/products/detail/' + pid;
    axios.get(callURL)
      .then(res => {
        this.setState({
          product: res.data.product
        });
      });
  }

  render(){
    
    return (
      <div className="istore-pdp"> 
          <div className="istore-pdp-body"> 
          <div className="istore-pdp-images"> 
            <div className="pdp-images-tag"> 
            <span>全新</span> 
            </div> 
            <div className="pdp-picture"> 
            <div className="pdp-picture-img" id="primary_image"> 
              <img src={this.state.product.primaryImage} alt={this.state.product.title} title={this.state.product.title} id="pdpProduct" width="455" height="515" /> 
            </div> 
            </div> 
            <div className="pdp-picture-list"> 
            <div className="scrollbtn pdp-picture-list-arrow left"></div> 
            <ul className="clearfix pdp-picture-list-control" data-maxindex="4"> 
            {
               this.state.product.images && this.state.product.images.map((item, index) => {
                    return <li key = {index} data-index="0" className=""> <img src={item.image} data-primaryimagesrc={this.state.product.primaryImage} data-galleryposition="0" alt="" height="82" /> </li> 
                })
            }
            </ul> 
            <div className="scrollbtn pdp-picture-list-arrow right"></div> 
            </div>
            <div className="pdp-review-stars"> 
            </div> 
          </div> 
          <div className="istore-pdp-details"> 
            <div className="pdp-seller"> 
            <span className="seller-name owner-lync">卖家<span className="owner-lync"> <a href="IM:&lt;sip:larryli@beijing.objectiva.local&gt;" alt="点击联系卖家" title="点击联系卖家"> <img src={lyncicon} className="lync-img" alt="" /> {this.state.product.owner}</a> </span></span> 
            </div> 
            <div className="pdp-details-title"> 
            <h3 className="details-title">{this.state.product.title}</h3> 
            </div> 
            <div className="clearfix pdp-details-well"> 
            <div className="pull-left"> 
              <div id="pdp_variant_price">
              <span className="pdp-well-price">{this.state.product.price}</span>
              </div> 
            </div> 
            </div> 
            <div className="bundle"> 
            </div>
            <input id="hasVariantProduct" type="hidden" value="true" /> 
            <input id="baseProductCode" type="hidden" value="1-11-64-0002001" /> 
            <input id="variantProductCode" type="hidden" value="1-11-64-0002002" /> 
            <div className="pdp-OptionSelector featureOptionSelector"> 
            <div className="option-items"> 
              <div className="feature-Name">
              规格
              </div> 
              <span className="feature-option isSelected" id="0000002002" feature-code="0000002001" stock-status="inStock">400克一袋</span> 
            </div> 
            </div> 
            <div className="variantSelectorErrorMsg">
              basket.error.variant.selector
            </div> 
            <div className="deliverycost">
              运费：包邮
            </div> 
            <div className="yCmsContentSlot add-to-cart"> 
            <div className="yCmsComponent pdp-details-addcart clearfix"> 
              <div className="pdp-well-number"> 
              <label htmlFor="qtyInput" className="hidden"> 数量</label> 
              <div className="qty-group"> 
                <input type="text" maxLength="3" size="1" id="qtyInput" name="qtyInput" className="qty qty-input form-control" defaultValue="1" /> 
                <div className="qty-btn-group"> 
                <button className="qty-up"><span className="istore-icon-chevron-left"></span></button> 
                <button className="qty-down" disabled=""><span className="istore-icon-chevron-right"></span></button> 
                </div> 
              </div> 
              </div> 
              <div id="actions-container-for-AddToCart" className="pdp-cart-btn productAddToCartPanelContainer clearfix"> 
              <div className="pdp-info"> 
              </div> 
              <div className="productAddToCartPanel clearfix"> 
                <div id="AddToCart-PickUpInStoreAction" data-index="1" className="productAddToCartPanelItem"> 
                </div> 
                <div id="AddToCart-AddToCartAction" data-index="2" className="productAddToCartPanelItem"> 
                <form id="addToCartForm" className="add_to_cart_form" action="/cart/add" method="post">
                  <input type="hidden" maxLength="3" size="1" id="qty" name="qty" className="qty" value="1" /> 
                  <input type="hidden" name="productCodePost" value="1-11-64-0002001" /> 
                  <button type="button" onClick={this.addToCart} className="btn btn-default btn-block js-pdp-btn-cart"> 加入购物车</button> 
                  <div> 
                  <input type="hidden" name="CSRFToken" value="bddc76e9-493c-427f-ad94-c7220678f965" /> 
                  </div>
                </form>
                </div> 
                <div id="AddToCart-ShareOnSocialNetworkAction" data-index="3" className="productAddToCartPanelItem"> 
                </div> 
              </div> 
              </div> 
              <div className="pdp-stock"> 
              <div className="stock_message">
                <span className="stock_level">999</span>&nbsp; 有货
              </div> 
              </div>
            </div>
            </div>
          </div> 
          </div> 
          <div className="istore-pdp-description"> 
          <div className="istore-pdp-details"> 
            <div className="details-title"> 
            <ul> 
              <li id="descriptionDiv" className="active">详细描述</li> 
            </ul> 
            </div> 
            <div className="bodyDiv" id="descriptionDivBody"> 
            <div className="productDescriptionText"> 
              <p className="description_p"></p>
              <div align="center">
              <img src="https://img.alicdn.com/imgextra/i1/2899369615/TB2w0eZftzJ8KJjSspkXXbF7VXa_!!2899369615.jpg" alt ="" className="img-ks-lazyload" data-spm-anchor-id="a220o.1000855.0.i1.727e2420ktoymr" align="absmiddle" />
              <img src="https://img.alicdn.com/imgextra/i1/2899369615/TB25FOWa6gy_uJjSZKzXXb_jXXa_!!2899369615.jpg"  alt ="" className="img-ks-lazyload" align="absmiddle" />
              <img src="https://img.alicdn.com/imgextra/i1/2899369615/TB2Sd5Va7fb_uJkHFJHXXb4vFXa_!!2899369615.jpg"  alt ="" className="img-ks-lazyload" align="absmiddle" />
              </div>
              <p></p> 
            </div> 
            <div className="productFeatureclassNamees"> 
            </div>
            </div> 
            <div className="bodyDiv" id="reviewDivBody" style={this.state.style}> 
            <div className="row pdp-bottom"> 
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
              <div className="prodReview clearfix"> 
                <a href="" id="write_review_action_main" className="write">review.write.title</a> 
              </div>
              </div> 
              <div className="summary"> 
              </div> 
            </div> 
            </div> 
          </div> 
          </div> 
     </div>
    )
  }

}



export class Cart extends Component {

  constructor(){
    super();
    this.state = {
      products : []
    }
  }

  componentWillMount() {
    this.setCartFromCookie();
    emitter.on('CartAdded', ()=> { 
      console.log('Cart Added Received'); 
      this.setCartFromCookie();
		}); 
  }

  setCartFromCookie = () => {
    let products = cookie.load('cartLists');
    if (products) {
      this.setState({
        products : products
      });
    }
  }

  render(){
    return (
      <div className="col-sm-2">
				<div className="is-header-menu">
					<div className="header-menu-postproduct">
						<a href="/product/add" alt="Publish Product" title="Publish Product">
							<span className="istore-icon-plus-circle"><i className="fas fa-plus-circle"></i></span>
							<span>发布商品</span>
						</a>
					</div>
					<div className="miniCart">
             <a href="/carts" className="minicart">
	              <span className="istore-icon-shopping-cart"><i className="fas fa-cart-plus"></i></span>
                <span className="minicart-count">{this.state.products.length}</span>
        	   </a>
             <div id="miniCartLayer" className="miniCartPopup" data-refreshminicarturl="/cart/miniCart/SUBTOTAL/?" data-rolloverpopupurl="/cart/rollover/MiniCart">
             </div>
          </div>
        </div>
			</div>
    )
  }

}


export class Carts extends Component {


  constructor() {
    super();
    this.state = {
      products: {}
    }
  }

  deleteCartByID = (id) => {
    let newCarts = this.state.products.filter((item, index) => index !==id);
    this.setState({
      products: newCarts
    });
    cookie.save('cartLists', newCarts);
    console.log('Add to cart Event', newCarts);
    emitter.emit('CartAdded');

  }

  getCartsFromCookie = () => {
    let cartLists = cookie.load('cartLists') ? cookie.load('cartLists') : [];
    this.setState({
      products: cartLists
    });
  }

  componentWillMount() {
    this.getCartsFromCookie();
    console.log('Get Carts From Cookie', this.state.products);
  }


  render(){
    
    return (
      <div className="cart-list"> 
      <ul>
        {
          this.state.products.map((item, index) => {
            return <li key={index}><CartItem product={item} index={index} deleteCartByID={this.deleteCartByID}/></li>
          })
        }
      </ul>

     </div>
    )
  }

}


