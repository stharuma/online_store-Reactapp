import React,{Component} from 'react';
import ProductListing from '../features/product-listing';

import data from '../data/products.json'

export default class Home extends Component {
    render(){
        return( <div>
            <h1>Home !!!!</h1>
            <ProductListing  products={data.products}/>
        </div>);
    }
}