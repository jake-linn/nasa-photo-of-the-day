import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div `
font-size: 25px;
font-family: courier new;

`



const Title = (props) => {

    return (
<StyledTitle>
<p> {props.title}</p>
</StyledTitle>

    )

}

export default Title