import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageSlider() {
let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };
    return (
        <Carousel {...settings}>
            <ImgSlider>
                    <img src="../../images/slider-badag.jpg" alt="" />
            </ImgSlider>
            <ImgSlider>
                    <img src="../../images/slider-badging.jpg" alt="" />
            </ImgSlider>
            <ImgSlider>
                    <img src="../../images/slider-scales.jpg" alt="" />
            </ImgSlider>
            <ImgSlider>
                    <img src="../../images/slider-scale.jpg" alt="" />
            </ImgSlider>
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`
margin-top: 20px;
.slick-list {
        overflow: visible;
    }
    li.slick-active button:before {
        color:white;
    }
    button {
        z-index: 1;
    }
ul li button {
    &:before {
        font-size:10px;
        color:rgb(150,158,171)
    }
}

`
const ImgSlider = styled.div`
img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
    transition: 300ms;
        
    &:hover{
        border:4px solid rgba(249,249, 249, 0.8);
    }
}
`
