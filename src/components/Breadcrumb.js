import React from 'react';
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import ProductTitleBreadcrumb from './ProductTitleBreadcrumb';
// https://github.com/icd2k3/react-router-breadcrumbs-hoc

const routes = [
  { path: '/product/detail/:pid', breadcrumb: ProductTitleBreadcrumb },
  { path: '/', breadcrumb: 'HomePage' },
  { path: '/carts', breadcrumb: 'Cart' },
  { path: '/login', breadcrumb: 'Login' },
  { path: '/product/detail', breadcrumb: 'Detail Info'},
  { path: '/product', breadcrumb: 'Product' }
];

const Breadcrumbs = ({ breadcrumbs }) => (

	<div id="breadcrumb" className="container">
		<ul className="clearfix">
				{breadcrumbs.map((breadcrumb, index) => (				
					<li key={breadcrumb.key} style={{float:'left'}}>
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