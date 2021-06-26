import React from 'react'
import styled from "styled-components"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
function Movie() {
    const movieList = useSelector(state => state.disney.movie)

    return (
        <Container>
            <h4>Recomended for You</h4>
            <Content>
                {movieList &&
                    movieList.map((movie) => {
                        return (
                           
                                <Wrap key = {movie.id}>
                                     <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt="" />
                                    </Link>
                                </Wrap>
                   
                        )
                    })}



            </Content>
        </Container>
    )
}

export default Movie

const Container = styled.div`

`
const Content = styled.div`
display:grid;
grid-gap: 25px;

grid-template-columns: repeat(4,minmax(0 , 1fr));

`

const Wrap = styled.div`
cursor: pointer;
overflow: hidden;
transition: 0.4s;
&:hover {
    transform: scale(1.05);
    border-color:rgba(249,249,249, 0.8);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
}
img{
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`