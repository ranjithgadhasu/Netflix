import React from 'react'; 
import Img from "../images/tab-1-pic.png";
import { styled } from 'styled-components';
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { generateMedia } from 'styled-media-query';



function TabContentOne() {
  return (
    <TabContentOneContainer>
     <div className="container">
       <div className='tab-content'>
        <div>
        <span className='title' style={{marginButton: '2rem'}}>
            If you decide Netflix isn't for - no problem. No commetment. Cancel online anytime
        </span>
        <br />
        <Link to='/choose-plan'>
        <Button style={{marginTop: '2rem'}}>try it now</Button>
        </Link>
        </div>
       <img src={Img} alt=""/>
       </div>
     </div>
    </TabContentOneContainer>
  );
};



export default TabContentOne;

//  Media Query 
const customMedia = generateMedia({
smDesktop: '1440px',
tablet: '960px'


})
//Main Content Container 
const TabContentOneContainer = styled.div`
 background: var(--main-deep-dark);
   .container {
    margin: 0 10%;
  }

img {
    width: 31.875rem;
}


.title {
  margin-top: 2rem;
  ${customMedia.lessThan('smDesktop') `
   font-size: 1.5rem;
   line-height: 1;
  
  `}
  
}


.tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:  2rem;
    align-items: center;
    font-size: 2.5rem;
    padding: 2.5rem;
    ${customMedia.lessThan('tablet') `
     grid-template-columns: 100%;
     text-align:  center;
     padding-left: 0;
     padding-right: 0;
   `}
   
}

`;
