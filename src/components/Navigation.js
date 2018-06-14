import React, { Component } from 'react';
import axios from 'axios';



export default class Navigation extends Component {
  constructor(){
    super();
    this.state = {
      category: []
    }
  }

  componentWillMount() {
    this.getCategory();
  }

  getCategory() {
    const callURL = 'https://easy-mock.com/mock/5b14997f27efb177b0e1052f/category';
    axios.get(callURL)
      .then(res => {
        this.setState({
          category: res.data.category
        });
      });
  }

  render() {
    return ( 
      <div className="is-header-anything">
          <div className="is-header-navgation">
            {
              this.state.category.map((item, index) => {
                return <a key = {index} href={item.path}>{item.name}</a>
              })
            }
          </div>
    </div>
    )
  }

}

