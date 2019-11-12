import React, { Component } from 'react'
import './Tshirt.scss'

class SizeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeProduct:[]
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(e, size) {
   console.log(size, 'handlesize')
  this.props.handleFilter(size);
  
  // let clicked = this.state;
  // this.setState(prevState => ({
  //   clicked: !prevState.clicked
  // }));
  // console.log("clicked",clicked);
  }

  render() {
    // var value = value;

    return (
      <div className="size-chart">
      { this.props.sizeArr.map((size, i) => {
        return (
        <button key={size.id} id={size.name} onClick={(e) => this.toggle(e, size)} 
          style={{background : size.value && 'black', color: size.value && 'white'}} 
          className="btn btn-clicked">{size.name}</button>
        )}) }
      </div>
    );
  }
}



export default SizeChart;
