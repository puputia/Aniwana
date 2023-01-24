import React from 'react';
import styled from 'styled-components';

const Footerdiv = styled.div`
    position : relative;
    height: 6em;
    width : 100%;
    background-color : #2E294E;
    text-align : center;
    p {
        font-size : 0.8rem;
        margin : 1px;
    }
`

const Text = styled.div`
    padding-top : 18px;
    color: white
`

const Footer = () => {
    return (
        <Footerdiv>
            <Text>
                <p>문의 : jokj624@sookmyung.ac.kr, coolkim99@sookmyung.ac.kr</p>
                <p>© 2021. All Rights Reserved.</p>
                <p><a href="https://github.com/jokj624/OMG-Test" style={{ color: '#616161' }}>OMG-Test's Github</a></p>
            </Text>
        </Footerdiv>
    );

};

export default Footer;