import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {sphere} from 'react-icons-kit/icomoon/sphere';
import {ic_expand_more} from 'react-icons-kit/md/ic_expand_more';
import { generateMedia } from 'styled-media-query';

class Footer extends Component {
    state = {
        langContent: false
     }

    handleTogglle = e => {
      e.preventDefault() ;
      this.setState({
        langContent: !this.state.langContent 
      })
    }

  render() {
    return (
      <FooterContainer>
        <span style={{marginLeft:'10%', color: '#999'}}>Questions? &nbsp; <Link to='/'>Call 1-877-742-1335</Link></span>
    <div className='footer-columns'>
        <ul>
          <li>
           <Link>Gift Cards Terms</Link> 
          </li>   
         </ul> 
         <ul>
          <li>
           <Link>Terms of Use</Link> 
          </li>  
         </ul> 
         <ul>
          <li>
           <Link>Privacy Statement</Link> 
           </li>
         </ul> 
         </div>
         {/* Language Button */}
         <div className='lang-btn' onClick={this.handleTogglle}>
        <Icon icon={sphere} size={20} />
        &nbsp;&nbsp;English&nbsp;&nbsp;
        <Icon icon={ic_expand_more} />
         </div>
  

    {/* Toggle Language Content */}
    {this.state.langContent && (
    <div className='lang-toggle'>
        <ul>
            <li>English</li>
        </ul>
        <ul>
            <li>Hindhi</li>
        </ul>
    </div>
  )}
      </FooterContainer>
    );
  };
};

export default  Footer;

//Media 
const customMedia = generateMedia({
  tablet: '740px'
})


//Footer container
const FooterContainer = styled.footer`
   justify-content: center;
   background: rgba(0,0,0,0.8);
   padding-top: 3rem;
   padding-bottom: 6rem;
   margin-top: 6rem;
   position: relative;
   z-index: 5;
   
    

   .footer-columns a {
    color: #999; 
  }
  .footer-columns ul {
    list-style: none;
    
  }

  .footer-columns a:hover {
    color: #fff;
    text-decoration: underline;
  }

 
span a {
  color: gray; 
  font-size: 0.9rem;
}

/* Define the hover color for the link */
span a:hover {
  color: #fff;
  text-decoration: underline;
}
span:hover {
    color: #fff;
    text-decoration: underline;
  }

 
 .footer-columns {
    width: 80%;
    margin: 1rem auto 0;
    color: #999;
    font-size: 0.9rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    line-height: 2.5rem;
    cursor: pointer;
    ${customMedia.lessThan ('tablet')`
    grid-template-columns: repeat(2, 1fr);
 `}
     
 }

 p {
    text-decoration: underline;
    cursor: pointer;
 }

 // Language  Butoon
 .lang-btn {
   background: transparent;
   border: 0.9px solid #333;
   margin-left: 10%;
   padding: 0.3rem;
   width: 8rem;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   margin-left: 40px;
   margin-right: 2rem;
   color: #999;
   padding: 1rem;
   margin: 2rem 0 2rem;
   cursor: pointer;
 }

 // Toggle Language content
 .lang-toggle {
   margin-left: 0%;
   position: absolute;
   margin-top: -3.5rem;
  }

.lang-toggle ul li {
  list-style:none;
}
 

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
    text-decration: none;
    &:hover {
        bacground: #0085ff;
        color: #fff;
    }
  }
`;
