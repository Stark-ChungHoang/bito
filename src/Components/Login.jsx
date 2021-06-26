import React from 'react'
import { auth, provider } from "../firebase"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin, setSignOut
}
    from "../features/user"
import { useHistory } from 'react-router'


function Login() {
    const dispatch = useDispatch()
    const history = useHistory()

    const SignIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user
            
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
             

                }))
               
                history.push("/home")
            })
            .catch(err=> {
                alert(err)
            })
    }
    return (
        <Container>

            <CTA>
                <CTALogoOne src="../../images/cta-logo-one.svg" />
                <SignUp onClick = {SignIn}  >GET ALL THERE</SignUp>
                <Decription>
                    Nếu bạn là một fan của thể loại phim siêu anh hùng thì không thể bỏ qua danh sách phim Marvel dưới đây. Cùng Điện máy XANH điểm qua những phim điện ảnh giải trí của Marvel sắp xếp theo thứ tự chuẩn nhất tính đến 2020 nhé!
                            </Decription>
                <CTALogoTwo src="../../images/cta-logo-two.png" />
            </CTA>

        </Container>
    )
}

export default Login

const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: center;
justify-content: center;
z-index: 1;

&:before{
    position: absolute;
    content: "";
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image:url("../../images/login-background.jpg");
    background-size: cover;
    background-repeat: no repeat;
}
`
const CTA = styled.div`
max-width: 650px;
padding:80px 40px;
width: 90%;
align-items: center;
margin-top: 100px;
flex-direction: column;
display: flex;

`
const CTALogoOne = styled.img`


`
const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding:17px 0;
border-radius: 4px;
text-align: center;
font-size:18px;
cursor: pointer;
transition: 400ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 14px;
&:hover {
    background-color:#0483ee ;
}

`
const Decription = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
line-height: 1.5;
`

const CTALogoTwo = styled.img`

width: 90%;
margin-top: 20px;
`