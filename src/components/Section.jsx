import React from 'react';
import styled from 'styled-components';
import model from '../images/model-s.jpg';
import dowmarrow from '../images/down-arrow.svg';

function Section({title, desc, leftButton, rightButton, backgroundImg}) {
    return (
        <Wrap bgImg ={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{desc}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>{leftButton}</LeftButton>
                {rightButton && <RightButton>{rightButton}</RightButton> }
            </ButtonGroup>
            <DownArrow src={dowmarrow} />
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props=>`url(${props.bgImg})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 5px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`;

const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: 0.65;
    color: #000;
`;

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;