import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const Header = styled.header`
            background-color: #F9F854;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 10px;
            box-shadow: 0px 4px 0px 0px lightgray;
        `

        const H1 = styled.h1`
            width: 50%;
            font-weight: 900;
        `

        const Nav = styled.nav`
            display: flex;
            justify-content: flex-end;
            width: 50%;


        `
        const StyledLink = styled(Link)`
            margin: 0px 10px 0px 10px;
            color: black;
            text-decoration: none;
            font-weight: 900;

        `

        return (
            <Header>
                <H1>Wishlist App</H1>
                <Nav>
                    <StyledLink to={"/blog/"}>Blog</StyledLink>
                    <StyledLink to={"/"}>Lists</StyledLink>
                    <StyledLink to={"/signup/"}>Sign Up</StyledLink>
                    
                </Nav>
            </Header>
        )
    }
}

export default Header;