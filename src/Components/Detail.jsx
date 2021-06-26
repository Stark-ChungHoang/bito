import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from "styled-components";
import db from '../firebase';

function Detail() {
    const [movie,setMovie] = useState()
    let {id} = useParams();
//     const movieList = useSelector(state => state.disney.movie);
//     const index = movieList.findIndex(sp=> sp.id === id)
 
// useEffect(()=> {
//  setMovie(movieList[index])

// },[])


    useEffect(()=> {
        db.collection("movies")
        .doc(id)
        .get()
          .then((doc)=> {
              if(doc.exists){
                setMovie(doc.data());
              } else {
                        alert("err")
              }
          })
        
  },[])

 
    return (
        <Container>
            {movie && 
            (<Fragment>
                  <Background>
               <img src={movie.backgroundImg} alt="" />
           </Background>
           <ImageTitle>
               <img src={movie.titleImg} alt="" />
           </ImageTitle>
           <Control>
                    <PlayButton>
                        <img src="../../images/play-icon-black.png" alt="" />
                        <span>PLAY</span>
                    </PlayButton>

                    <TrailerButton>
                    <img src="../../images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <CommunicateButton>
                    <img src="../../images/group-icon.png" alt="" />

                    </CommunicateButton>
                
           </Control>
           <SubTitle>
                {movie.subTitle}
                    </SubTitle>
                    <Decrision>
                    {movie.description}
                    </Decrision>
    
            </Fragment>)
            }
             </Container>
    )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position: relative;

`
const Background = styled.div`
position: fixed;
top:0;
left: 0;
bottom:0;
right:0;
z-index: -1;
opacity: 0.8;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const ImageTitle = styled.div`
margin-top: 50px;
height: 30%;
width: 35vw;
  img {

  }
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const Control = styled.div`
display: flex;
align-items: center;
margin-top: 80px;

`
const PlayButton = styled.div`

padding:0 24px;
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
border:none;
cursor: pointer;
letter-spacing: 1.8px;
background: rgb(249,249,249);
span {
    color:black;
    font-weight: bold;
}
&:hover {
    background:rgb(198,198,198);
    transition: 400ms;
}

`
const TrailerButton = styled(PlayButton)`
margin-left:30px;
background: rgb(0 , 0, 0 , 0.3);
border:1px solid rgb(249 , 249, 249);
span {
    color:white;
}
`
const AddButton = styled.button`
cursor: pointer;
margin-left: 20px;
width: 44px;
height: 44px;
border-radius: 50%;
justify-content: center;
display: flex;
align-items: center;
border:2px solid white;
background-color: rgba(0,0,0,0.6);
span {
    font-size:30px;
    color:white;

}
&:hover {
    background:rgb(198,198,198);
    transition: 400ms;
}
`
const CommunicateButton = styled(AddButton)`
background: black;
`
const SubTitle = styled.div`
font-size:15px;
margin-top:26px;
min-height:20px;
`
const Decrision = styled.div`
font-size: 20px;
margin-top:20px;
`