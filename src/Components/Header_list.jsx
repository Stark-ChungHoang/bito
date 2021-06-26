import React, { Fragment } from 'react';
import styled  from "styled-components"
function Header_list() {
    return (
   <Fragment>
            <Link href="#">
                            <img src="../../images/home-icon.svg" alt="chung" />
                            <span>Movie</span>
                        </Link>
            <Link href="#">
                            <img src="../../images/search-icon.svg" alt="chung" />
                            <span>Search</span>
                        </Link>
            <Link href="#">
                            <img src="../../images/watchlist-icon.svg" alt="chung" />
                            <span>WatchList</span>
                        </Link>
            <Link href="#">
                            <img src="../../images/original-icon.svg" alt="chung" />
                            <span>originals</span>
                        </Link>
            <Link href="#">
                            <img src="../../images/movie-icon.svg" alt="chung" />
                            <span>Movies</span>
                        </Link>
            <Link href="#">
                            <img src="../../images/series-icon.svg" alt="chung" />
                            <span>series</span>
                        </Link>
                        </Fragment>
    )
}

export default Header_list

const Link = styled.a`
padding:0 20px;

text-transform: uppercase;
text-decoration: none;
display: flex;
align-items: center;
img {
    width: 32px;
    height: 32px;

}
span {
    color:white;
    position: relative;
    &:after {
        content:"";
        position: absolute;
        bottom:-30%;
        left:3%;
        height: 2px;
        width: 100%;
       border-bottom:2px solid white;
       opacity: 0;
    transform: scaleX(0);
       transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94s ) 0s;
    }
    
}
&:hover {
    span:after {
        opacity: 1;
        transform: scaleX(1);
    }
}
`