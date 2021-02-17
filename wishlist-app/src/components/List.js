import React, { Component } from 'react';
import styled from 'styled-components';

import Item from "./Item";



class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    name: "Apple iPad Mini",
                    upVote: "1",
                    downVote: "1"
                },
                {
                    name: "Vespa Scooter",
                    upVote: "1",
                    downVote: "1"
                },
                {
                    name: "Shake Shack Milkshake",
                    upVote: "1",
                    downVote: "1"
                },
                {
                    name: "12oz Stumptown Coffee",
                    upVote: "1",
                    downVote: "1"
                }
            ]
        }
    }

    render() {
        const List = styled.div`
            display: flex;
            justify-content: center;
            flex-direction: column;

        `

        const H1 = styled.h1`
            width: 75%;
            background-color: #EAB444;
            display: flex;
            justify-content: center;
            height: 75px;
            align-items: center;
            margin: 30px auto 5px auto;
            box-shadow: 3px 4px 2px 2px lightgray;
        `
        return (
            <List>
                <H1>Your List</H1>
                <Item items = {this.state.items} />
            </List>
        )
    }
}

export default List;