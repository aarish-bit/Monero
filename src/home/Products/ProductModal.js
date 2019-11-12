import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Products.scss'


class ProductModal extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         modal:false
      }
    
    this.toggle = this.toggle.bind(this);
  
   }
  
   toggle() 
   {
     this.setState(prevState => ({
       modal: !prevState.modal
     }));
   }
  
    render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
      console.log(this.props)
      return (
        <div>
           <img src={this.props.src } onClick={this.toggle}
             alt={this.props.title} 
             className= "products"
           />
         
           <div className="modal">
           <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
           <ModalHeader toggle={this.toggle} close={closeBtn}>{this.props.title}</ModalHeader>
           <ModalBody className="modal_body">
             <img src={this.props.src } 
               alt={this.props.title} 
               className= "products"
             />
             <br />
             <label><b>album-id:</b></label>{this.props.albumid}
             <br />
             <label><b>Sr.no:</b></label>{this.props.id}
             <br />
             <label><b>url:</b></label>{this.props.url}
           </ModalBody>
           <ModalFooter>
             <Button color="secondary" onClick={this.toggle}>ok</Button>
           </ModalFooter>
         </Modal>
           </div>
           
        </div>
      )
    }
  }
  
  export default ProductModal