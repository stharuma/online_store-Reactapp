import React,{Component} from 'react';
import Cart from '../features/cart'

export default class CartPage extends Component {
    render(){
        return( <div>
            <h1>My Cart !!!</h1>
            <Cart/>
        </div>);
    }
}