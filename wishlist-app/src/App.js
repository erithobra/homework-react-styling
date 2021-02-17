import React, {Component} from 'react';
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";



class App extends React.Component {

    render() {
        return (
            
              <div>
                <Header />

                <List />

                <Footer />
              </div>
              
        )
    }
}


export default App;
