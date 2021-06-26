import React, { Fragment, useEffect } from 'react'
import styled from "styled-components"
import {auth,provider} from "../firebase" 
import {useSelector,useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import Header_list from './Header_list'
import {selectUserName,
    selectUserPhoto,
        setUserLogin,setSignOut}
 from "../features/user"
function Header() {
    const dispatch  = useDispatch()
    const history = useHistory()
  const userName = useSelector(selectUserName)



  useEffect(()=> {
    auth.onAuthStateChanged(async (user)=> {
        if(user) {
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            }))
            history.push("/home")
        }
    })
  },[])
  const SignIn = ()=> {
      auth.signInWithPopup(provider)
      .then((result)=> {
          let user = result.user
          dispatch(setUserLogin({
              name:user.displayName,
              email:user.email,
              photo:user.photoURL
              
          }))
      })
  }
  const signOut = ()=> {
      auth.signOut()
      .then(()=> {
          dispatch(setSignOut())
          history.push("/home")
      })
  }
    return (
        <Container>
                <Logo src = "../../images/logo.svg" />
             {!userName ? 
               <LoginContainer>
                    <Login onClick = {()=> SignIn()}>Login</Login> 
               </LoginContainer> :
                <Fragment>
                       <Nav>
                                  <Header_list/>
                        </Nav>
                <UserImg onClick = {signOut} src = "https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.6435-9/186558505_1943115975845959_2391272715276236650_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=A-Biq8brgIUAX8svn0D&_nc_oc=AQmLtmQQCkWOciRvU3KgSBIasfzn43uueSpf71x_rhFYdaA6xNloeelrxXgyTLgXDXM&tn=2WKtUC5dEm-mFoVb&_nc_ht=scontent.fpnh22-1.fna&oh=5898b69a6bb6a96856c19b0febb46adf&oe=60D77391" />
      
                </Fragment>
            }
             
               </Container >
    )
}

export default Header


const Container = styled.div`
overflow-x:hidden;
height:70px;
background:#090b13;
display: flex;
`
const Logo = styled.img`
width: 70px;
cursor: pointer;
display: flex;
align-items: center;
padding:0 36px;
`

const Nav = styled.div`
flex:1;
display: flex;
align-items: center;
margin-left:70px ;
`
const UserImg = styled.img `
width: 50px;
height: 50px;
border-radius: 50%;
margin-top:10px;
margin-right:15px;
cursor: pointer;
`

const Login = styled.button`
margin-top: 20px;
width: 80px;
color:white;
height: 40px;
border:1px solid #f9f9f9;
padding:8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform:uppercase;
background-color: rgba(0,0,0,0.6);
transition: 300ms;
cursor: pointer;
&:hover {
    background-color: #f9f9f9;
    color:#000;
    border-color: transparent;
}

`
const LoginContainer = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
`