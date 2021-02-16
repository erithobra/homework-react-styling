import React, {Component} from 'react';
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Item from "./components/Item";
import Blog from "./components/Blog";

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Blog />
                <List />
                <Item />
                <Footer />
            </div>
        )
    }
}


export default App;
