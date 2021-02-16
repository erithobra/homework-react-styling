import React from 'react';
import styled from 'styled-components';



function List() {
    const List = styled.div`
        display: flex;
        justify-content: center;
    `

    const H1 = styled.h1`
    width: 75%;
    background-color: #EAB444;
    display: flex;
    justify-content: center;
    height: 75px;
    align-items: center; 
    `

    return (
        <List>
            <H1>Your List</H1>
        </List>
    )
}


export default List;