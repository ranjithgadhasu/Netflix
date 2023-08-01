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
        <span style={{marginLeft:'18%', fontSize: '1.125rem'}}>Questions? <Link>Call 1-877-742-1335</Link></span>
    <div className='footer-columns'>
        <ul>
          <li>
           <Link>FAQ</Link> 
          </li>  
          <li>
           <Link>Investor Relations</Link> 
          </li>  
          <li>
           <Link>Ways to Watch</Link> 
          </li>  
          <li>
           <Link>Corporate Information</Link> 
          </li> 
          <li>
           <Link>Netflix Originals</Link> 
          </li>   
         </ul> 
         <ul>
          <li>
           <Link>Help Center</Link> 
          </li>  
          <li>
           <Link>Jobs</Link> 
          </li>  
          <li>
           <Link>Terms of Use</Link> 
          </li>  
          <li>
           <Link>Contact Us</Link> 
          </li>   
         </ul> 
         <ul>
          <li>
           <Link>Account</Link> 
          </li>  
          <li>
           <Link>Redeem Gift Cards</Link> 
          </li>  
          <li>
           <Link>Privacy</Link> 
          </li>  
          <li>
           <Link>Speed Test</Link> 
          </li>   
         </ul> 
         <ul>
          <li>
           <Link>Media Center</Link> 
          </li>  
          <li>
           <Link>Buy Gift Cards</Link> 
          </li>  
          <li>
           <Link>Cookie Preferences</Link> 
          </li>  
          <li>
           <Link>Speed Test</Link> 
          </li>   
         </ul> 
         {/* Language Button */}
         <div className='lang-btn' onClick={this.handleTogglle}>
        <Icon icon={sphere} size={20} />
        &nbsp;&nbsp;English&nbsp;&nbsp;
        <Icon icon={ic_expand_more} />
         </div>
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
    <span style={{marginLeft: '15%', fontSize: '0.9rem'}}>Netflix India</span>
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
   background: var(--main-deep-dark);
   padding-top: 10rem;
   padding-bottom: 3rem;
   color: #999;
   
    

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
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    line-height: 2.5rem;
    cursor: pointer;
    ${customMedia.lessThan ('tablet')`
    grid-template-columns: repeat(2, 1fr);
 `}
     
 }


 // Language  Butoon
 .lang-btn {
   background: transparent;
   border: 0.9px solid #333;
   padding: 0.3rem;
   width: 8rem;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   margin-left: 40px;
   margin: 2rem 0 2rem;
   cursor: pointer;
 }

 // Toggle Language content
 .lang-toggle {
   margin-left: 15%;
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
