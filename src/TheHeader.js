import React from 'react';
import styled from 'styled-components';


const StyledTheHeader = styled.div `
background-color: #00BFFF;
padding: 20px;
font-size: 20px;
font-family: 
`


const Header = () => {
return (
    <StyledTheHeader>
        <h1> NASA Photo of the Day<span role="img" aria-label='go!'>🚀</span>!
      </h1>
    </StyledTheHeader>
)

}


export default Header