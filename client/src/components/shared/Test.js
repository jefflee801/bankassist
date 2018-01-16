import React from 'react';
import Zion from '../../images/Zion-Canyon.jpg';
import styled from 'styled-components';
import ThirtyDayChart from './ThirtyDayChart';

const maxHeight = () => {
    const windowHeight = window.innerHeight;
    return `height: 50em !important`
  }
  
const RegistrationContainer = styled.div`
    padding-top: 20px;
    ${maxHeight()};
    background-image: url(${Zion});
    `

const Test = () => (
        <RegistrationContainer>
            <ThirtyDayChart />
            <br />
        </RegistrationContainer>
    ) 

export default Test;