import React, { Component } from 'react'
import SizeChart from './SizeChart';
import Cart from '../Cart/Cart';
import DrawerToggleButton from '../Cart/DrawerToggleButton'
import './Tshirt.scss'
//import _ from 'lodash'

class Tshirt extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      productsArray: [],
      clicked: true,
      selectedSizes: [],
      filterSize: [],
      sizeArr: [
        { id: 1, name: 'XS', value: false },
        { id: 2, name: 'S', value: false },
        { id: 3, name: 'M', value: false },
        { id: 4, name: 'ML', value: false },
        { id: 5, name: 'L', value: false },
        { id: 6, name: 'XL', value: false },
        { id: 7, name: 'XXL', value: false }
      ],
      cart: [],
      wishlist: [],
      cartdraweropen: false,
      total: 0,
      count: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.addToCart = this.addToCart.bind(this)
    this.addToWishlist = this.addToWishlist.bind(this)

  }

  drawerToggleClickHandler = (prevState) => {
    //console.log(prevState)
    this.setState((prevState) => {
      return {
        CartDrawerOpen: !prevState.CartDrawerOpen,
      }

    })
  }

  backdropClickHandler = () => {
    this.setState({ CartDrawerOpen: false })
  }

  componentDidMount() {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then(res => res.json())
      .then(
        json => {
          this.setState({
            isLoaded: true,
            products: json.products,
            productsArray: json.products
          });
        },
        error => ({
          isLoaded: true,
          error
        })
      )
  }

  handleFilter(sizes) {
    console.log("AA rha:", sizes)
    let { productsArray, sizeArr } = this.state;

    let filterArray = productsArray;
    let filters = [];

    sizeArr.map((item, index) => {
      // console.log(size,'5555')
      if (item.id === sizes.id) {
        return item.value = !sizes.value
      } else {
        return item
      }
    })

    filters = sizeArr.filter((v, i) => v.value === true && v).map(item => item.name)
    // let arr = (names) => names.filter((v,i) => names.indexOf(v) === i)
    if (filters.length) {
      filterArray = filterArray.filter(function (value, key) {
        return filters.some(size => value.availableSizes.includes(size));
      })
    } else {
      filterArray = productsArray
    }
    console.log(filters, 'filters')
    console.log(filterArray, 'filterArray')
    this.setState({
      sizeArr: sizeArr,
      filterSize: filters,
      products: filterArray
    })
  }

  handleChange(event) {
    console.log(event.target.value)
    let { products } = this.state;
    let sortArray = products;
    let name = event.target.value;
    console.log(sortArray, name)

    if (name === 0 || name === 'Select') {
      return ({ sortArray })

    } else if (name === 'lowest-highest') {
      console.log("lowest-highest")
      sortArray.sort(function (a, b) {
        // console.log(a)
        return a.price - b.price
      })

    } else if (name === 'highest-lowest') {
      sortArray.sort((a, b) => {
        return b.price - a.price;
      })
    }
    console.log(sortArray, 'aftersorting')
    this.setState({ sortArray: sortArray, [name]: event.target.value });
  }

  addToCart(e, product) {
    var value = this.state.count + 1;
    var found = false;
    var updatedCart = this.state.cart;
    updatedCart.forEach(function (prod) {
      //console.log(product.title, 'title')
      if (prod.title === product.title) {
        found = true;
        prod.quantity++;
        return prod
      } else {
        return prod
      }
    })
    console.log("updatedCart", updatedCart)
    if (!found) { updatedCart.push({ ...product, quantity: 1 }) };

    updatedCart.forEach(function (prod) {
      prod.totalprice = prod.quantity * prod.price;
    })

    var total = 0
    updatedCart.forEach(function (prod) {
      total = total + prod.totalprice;
    })

    this.setState({ cart: updatedCart,  count: value, total: total })
  }

  addToWishlist(e, product) {
    var updatedWishlist = this.state.wishlist;
    updatedWishlist.push({ ...product });
    console.log(updatedWishlist)
    this.setState({ wishlist: updatedWishlist })
  }

  render() {
    const { error, isLoaded, products, sizeArr, cart, total, count } = this.state;
    //console.log('cart', cart)
    //  console.log('wishlist', wishlist)
    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading"></div>
    }
    else {
      return (
        <div className="tshirt">
          <div className="tshirt-row">
            <div className="size-row">
              <h5><b>Sizes:</b></h5>
              <SizeChart sizeArr={sizeArr}
                handleFilter={this.handleFilter}
              />
            </div>

            <div className="items-row">
              <span className="price-range">
                <label><b>Sort price By:</b></label>
                <select className="custom-select select-price"
                  value={this.state.price}
                  name="price_range"
                  onChange={this.handleChange}
                >
                  <option value="Select">Select</option>
                  <option value="lowest-highest">lowest to highest</option>
                  <option value="highest-lowest">highest to lowest</option>
                </select>
                <span>
                  <DrawerToggleButton click={this.drawerToggleClickHandler} />
                </span>

              </span>

              <hr />

              <div className="row">
                {products.map((product, i) => {
                  return (
                    <div key={i} className="item"  >
                      {product.isFreeShipping && product.isFreeShipping === true ?
                        (<div className="isshipping">
                          <span>Free Shipping</span>
                        </div>)
                        : (<div className="noshipping"></div>)
                      }
                      <img src="user-images/user1.jpg" alt="tshirt" />
                      <br />
                      <h6>{product.title}</h6>
                      <br />
                      <label><b>${product.price}</b></label>
                      <br />
                      <button className="btn" onClick={(e) => this.addToCart(e, product)}>ADD TO CART<i className="fas fa-shopping-cart"></i></button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <Cart show={this.state.CartDrawerOpen}
              backdropClickHandler={this.backdropClickHandler}
              cart={cart}
              total={total}
              count={count}
            />
          </div>

        </div>
      )
    }
  }

}

export default Tshirt
