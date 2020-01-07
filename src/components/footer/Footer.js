import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
width: 100%;
background-color: burlywood;  
text-align: center;
`;

export class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <h1>Footer</h1>
            </FooterWrapper>
        )
    }
}

export default Footer;


