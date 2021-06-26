import React from 'react'
import styled from "styled-components";

function Viewers() {
   
    return (
        <Container>
            <Wrap>
                <img src="../../images/viewers-disney.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="../../images/viewers-pixar.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="../../images/viewers-marvel.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="../../images/viewers-starwars.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="../../images/viewers-national.png" alt="" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
padding:30px 0 26px;

margin-top: 30px;
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(5,minmax(0, 1fr));
`

const Wrap = styled.div`
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
border-radius: 10px;
transition: 300ms;
border: 3px solid rgba(249, 249,249,0.1);
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
   &:hover {
       transform: scale(1.05);
       box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
       border-color:rgba(249,249, 249, 0.8);
   }
`