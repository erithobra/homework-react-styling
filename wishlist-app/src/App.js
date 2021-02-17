import React, {Component} from 'react';
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Blog from "./components/Blog";

import { Route } from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
          <div>
              <header>
                <Header />
              </header>
              <main>
                <Route exact path="/blog" component = {Blog} />
                <Route exact path="/" component = {List} />
              </main>
              <footer>
                <Footer />
              </footer>
          </div>      
        )
    }
}


export default App;
