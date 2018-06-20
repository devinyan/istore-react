import React, { Component } from 'react';
import $ from 'jquery';
import Suggestions from '../components/Suggestions'
export default class Search extends Component {
  state = {
    query: '',
    results: [],
    showSuggestions :false
  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query.length>0) {
          this.getProductByKeyword();
      }
      else{
        this.setState({showSuggestions:false});
      } 
    })
  }
  getProductByKeyword = () => {
      var _self = this;
      var filterProd = [];
      $.ajax({
        url: "https://easy-mock.com/mock/5b14997f27efb177b0e1052f/products/all",
        dataType: 'json'
      }).done(function (data, status, jqXHR) {
        data.products.forEach(pro => {
          if(_self.state.query && pro.title.indexOf(_self.state.query)>=0){
            filterProd.push(pro);
          }
          if(filterProd.length === 0){
            _self.setState({showSuggestions:false});
          }
          else{
            _self.setState({showSuggestions:true});
          }
        });
        _self.setState({ results: filterProd});
      })
  }
  render() {
    return (
      <div className="siteSearch is-header-search">
      <form name="search_form_SearchBox" method="get" action="/search">
        <label className="control-label skip">Search</label>
        <div className="input-group">
          <input id="input_SearchBox" className="siteSearchInput form-control" type="text" ref={input => this.search = input} onChange={this.handleInputChange} placeholder="Search Product" />
          <div className="input-group-btn">
            <button className="siteSearchSubmit" type="submit">
              <span className="istore-icon-search"><i className="fas fa-search"></i></span>
            </button>
          </div>
          { this.state.showSuggestions && <Suggestions results={this.state.results} /> }
        </div>
      </form>
    </div>
    )
  }

}

