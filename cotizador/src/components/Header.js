import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const ContenedorHeader=styled.header`
background-color:#26C6DA;
padding:10px;
font-weight:bold;
color:#FFFFFF;

`;
const TextoHeader=styled.h2`
margin:0;
padding:10px;
font-size:2rem;
font-family:'Slabo 27px',serif;
text-align:center;

`;
const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}
 Header.propTypes = {
    titulo: PropTypes.string.isRequired
 }
export default Header;