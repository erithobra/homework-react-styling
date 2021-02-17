import React from 'react';
import styled from 'styled-components';

function Header() {
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
    `

    const Nav = styled.nav`
        display: flex;
        justify-content: flex-end;
        width: 50%;


    `
    const A = styled.a`
        margin: 0px 10px 0px 10px;

    `
    return (
        <Header>
            <H1>Wishlist App</H1>
            <Nav>
                <A>Blog</A>
                <A>Lists</A>
                <A>Sign Up</A>
                
            </Nav>
        </Header>
    )
}


export default Header;