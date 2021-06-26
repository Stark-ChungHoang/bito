import React, { Fragment, useEffect } from 'react'
import styled from "styled-components";
import ImageSlider from './ImageSlider';
import Movie from './Movie';
import Viewers from './Viewers';
import db, { auth, provider } from "../firebase"
import { useSelector, useDispatch } from 'react-redux';
import {getUser} from "../features/disney"
import { selectUserName, setUserLogin } from '../features/user';
import { useHistory } from 'react-router';
import Login from './Login';

function Home() {

    const dispatch  = useDispatch()
  const userName = useSelector(selectUserName)
//   const SignIn = ()=> {
//       auth.signInWithPopup(provider)
//       .then((result)=> {
//           let user = result.user
//           dispatch(setUserLogin({
//               name:user.displayName,
//               email:user.email,
//               photo:user.photoURL
              
//           }))
//       })
//   }

const abc = ()=> {
    db.collection("movies").get().then(x=> {
        let tempMovies = x.docs.map((doc)=> {
            return {id:doc.id, ...doc.data()}
        })
       dispatch(getUser(tempMovies))
    })
}
    useEffect(()=> {
       abc()
    },[])

    return (
        <Container>
                  {!userName ? 
                  <Login /> :
                     <Fragment>
                              <ImageSlider />
                          <Viewers />
                          <Movie />  
                     </Fragment>                
                  }
        </Container>
    )
}

export default Home

const Container = styled.main`
overflow-x: hidden;
position: relative;
padding: 0 calc(3.5vw + 5px);
min-height: calc(100vh - 70px);

    &:after {
            content: "";
            position: absolute;
                top:0;
                left:0;
                right: 0;
                bottom: 0;
                        background: url("../../images/home-background.png") center center;
                z-index: -1;
                    }
`
