import React, { Component } from 'react';
import styled from 'styled-components';


class Item extends Component {
    render () {
        const UL = styled.div`
            padding = 0px 0px 0px -40px;
        `
        const Div = styled.div`
            background-color: #EAB444;
            display: flex;
            justify-content: space-between;
            width: 65%;
            margin: 10px auto;
            padding: 20px;
            box-shadow: 3px 4px 2px 2px lightgray;
            
        `
        const ItemName = styled.a`
        color: #472628;
        font-weight: 700;
        `
        const Vote = styled.div`
        color: #C37842;
        display: flex;
        font-weight: 700;
        `
        const UpVote = styled.a`
        color: #C37842;
        font-weight: 700;
        &:hover {
            cursor: pointer;
        }
        `
        const DownVote = styled.a`
        color: #C37842;
        font-weight: 700;
        &:hover {
            cursor: pointer;
        }
        `

        return (
            <UL>
                {this.props.items.map((item, index) => {
                    return (
                        <Div>
                            <ItemName>{item.name}</ItemName>
                            <Vote>
                                <UpVote onClick = {() => this.props.vote(1, index)}>Up<br /></UpVote> | 
                                <DownVote onClick = {() => this.props.vote(-1, index)}> Down<br/></DownVote>
                                <a>({item.vote})</a>
                            </Vote>
                        </Div>
                    )
                })}
            </UL>
        )
    }
}


export default Item;