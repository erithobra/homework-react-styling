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

        `
        const Vote = styled.div`

        `
        const UpVote = styled.a`

        `
        const DownVote = styled.a`

        `

        return (
            <UL>
                {this.props.items.map((item) => {
                    return (
                        <Div>
                            <ItemName>{item.name}</ItemName>
                            <Vote>
                                <UpVote>{item.upVote}</UpVote> | 
                                <DownVote> {item.downVote}</DownVote>
                            </Vote>
                        </Div>
                    )
                })}
            </UL>
        )
    }
}


export default Item;