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
                    vote: 0,
                },
                {
                    name: "Vespa Scooter",
                    vote: 0,
                },
                {
                    name: "Shake Shack Milkshake",
                    vote: 0,
                },
                {
                    name: "12oz Stumptown Coffee",
                    vote: 0,
                }
            ]
        }
    }


    vote = (num, index) => {
        if(this.state.items[index].vote + num >= 0) {
            const votes = this.state.items[index].vote + num;
            const items = this.state.items;
            // this.state.post.likes = votes;
            items[index].vote = votes;
            this.setState({
            items: items,
            error: null
        })
        } else {
            this.setState({  // setState triggers a re-render
                error: "Can't vote below zero!"
            })
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
            color: #472628;
        `
        return (
            <List>
                <H1>Your List</H1>
                <Item items = {this.state.items} vote={this.vote} error={this.state.error}/>
            </List>
        )
    }
}

export default List;