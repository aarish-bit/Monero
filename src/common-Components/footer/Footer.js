import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import './Footer.scss'

const Footer = props => {
 return(   
    <div className="footer">
        <div className="col-md-12  col-sm-12  col-xs-12 social" >          
        
         <span><b>SOCIAL MEDIA</b></span><br />
         <MDBContainer>
            <MDBBtn social="fb" className="facebook">
              <MDBIcon fab icon="facebook-f"/> Facebook
            </MDBBtn>
            
            <MDBBtn social="tw" className="twitter">
              <MDBIcon fab icon="twitter" /> Twitter
            </MDBBtn>
            
            <MDBBtn social="gplus" className="Google">
              <MDBIcon fab icon="google-plus-g" /> Google +
            </MDBBtn>
         </MDBContainer>        
        </div>

        <div className="col-md-12 col-sm-12 col-xs-12 address">
        
        <p>
        <span><b>REGISTERED OFFICE ADDRESS</b></span><br />
        5th floor,A Block,<br />
        Amanora Chambers,<br />
        Behind Amanora Mall,<br />
        Pune-411046<br />
        </p>

        </div>  
    </div>
 )
}

export default Footer
