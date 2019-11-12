import React, { Component } from 'react'
import ProductModal from './ProductModal';
import ItemPagination from './ItemPagination'
import './Products.scss'

class Products extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       error:null,
       isLoaded:false,
       items:[],
       pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(
      json => {
        this.setState({
          isLoaded:true,
          items: json
        });
      },

       error => ({
        isLoaded:true,
        error
      })
    )
  }
  render() {
       
    const {error, isLoaded } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading"></div>
    } 
    
    else {
    return (
      <div className="container">
      <div className="row product-row">
        {this.state.pageOfItems.map(item =>
         <div key={item.id} className="photos">
          <ProductModal 
            src={item.url}
            alt={item.title}
            albumid={item.albumId} 
            id={item.id}
            title={item.title}
            url={item.url}
          />
          <br />
          <b>{item.title}</b>
         </div>
        )}
       
      </div>
       <ItemPagination items={this.state.items} onChangePage={this.onChangePage} />
      </div>
    )

  }
 }
}




export default Products


 
