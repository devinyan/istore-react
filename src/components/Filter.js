import React, { PureComponent } from 'react';


export default class Filter extends PureComponent {
  render(){
    return (
        <div className="plp-filter">
            <div className="plp-filter-item">
                <div className="plp-filter-header">价格</div>
                <div className="plp-filter-value">
                    <form action="#" method="get">
                        <input type="hidden" name="q" value=":modificationDate:status:ForSale:price:¥0-¥19.99"/>
                        <input type="hidden" name="text" value=""/>
                        <label className="filter-value">
                            <input type="checkbox" /> ¥0-¥19.99
                            <span className="facetValueCount">(1)</span>
                        </label>
                    </form>
                    <form action="#" method="get">
                        <input type="hidden" name="q" value=":modificationDate:status:ForSale:price:¥20-¥49.99"/>
                        <input type="hidden" name="text" value=""/>
                        <label className="filter-value">
                            <input type="checkbox" /> ¥20-¥49.99
                            <span className="facetValueCount">(4)</span>
                        </label>
                    </form>
                
                </div>
            </div>
        </div>
    )
  }
}

