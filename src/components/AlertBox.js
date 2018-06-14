import React, { PureComponent } from 'react';

export default class AlertBox extends PureComponent {

  render(){
    return (
      <div className="alert negative bg-danger" style = {this.props.style}>
				{this.props.message}</div>
     )
  }

}

