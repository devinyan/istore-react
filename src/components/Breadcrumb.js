import React from 'react';
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import axios from 'axios';
// https://github.com/icd2k3/react-router-breadcrumbs-hoc

// breadcrumbs can be any type of component or string
// const UserBreadcrumb = ({ match }) => (
// <span>{getProductName(match.params.pid)}</span>
// )
const UserBreadcrumb = () => ( <span>Testing</span> )
// define some custom breadcrumbs for certain routes (optional)
const routes = [
  { path: '/product/detail/:pid', breadcrumb: UserBreadcrumb },
  { path: '/', breadcrumb: 'HomePage' },
  { path: '/carts', breadcrumb: 'Cart' },
  { path: '/login', breadcrumb: 'Login' },
  { path: '/product/detail', breadcrumb: 'Detail Info'},
  { path: '/product', breadcrumb: 'Product' }
];

function getProductName(id) {
  let callURL = 'https://easy-mock.com/mock/5b14997f27efb177b0e1052f/products/detail/' + id;
  axios.get(callURL)
  .then(function(response){  
    console.log(response);
    return  response.data.product.title;
  }); 
}

const Breadcrumbs = ({ breadcrumbs }) => (

	<div id="breadcrumb" className="container">
		<ul className="clearfix">
				{breadcrumbs.map((breadcrumb, index) => (				
					<li key={breadcrumb.key}>
							<NavLink to={breadcrumb.props.match.url}>
								{breadcrumb}
							</NavLink>
							{(index < breadcrumbs.length - 1) ?  ">" : ""}
					</li>

				))}
		</ul>
	</div>
);

export default withBreadcrumbs(routes)(Breadcrumbs);