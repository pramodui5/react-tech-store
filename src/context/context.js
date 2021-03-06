import React, { Component } from 'react';
import {linkData} from './linkData';
import {socialData} from './socialData';
import {items} from './productData';

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
    state={
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true
    };

    componentDidCatch(){
        // from contentful items

        this.setProducts(items);
    }

    //set products

    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const {id} = item.sys;
            const product = {id, ...item.fields}
            return product;
        })
        console.log(storeProducts);
    }

    //handle sidebar
    handleSidebar = () => {
        this.setState({sidebarOpen:!this.state.sidebarOpen});
    }
    //handle cart
    handleCart = () => {
        this.setState({cartOpen:!this.state.cartOpen});
    }
    //close cart
    closeCart = () => {
        this.setState({cartOpen: false});
    }
    //open cart
    openCart = () => {
        this.setState({cartOpen: true});
    }
    render(){
        return(
        <ProductContext.Provider value={{
            ...this.state,
            handleSidebar:this.handleSidebar,
            handleCart:this.handleCart,
            closeCart: this.closeCart,
            openCart:this.closeCart
          }}
        >
            {this.props.children}
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}