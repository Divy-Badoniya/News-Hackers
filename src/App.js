import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state = {
    progress: 0,
  }

  apikey = process.env.REACT_APP_NEWS_API_KEY;
  
  setProgress = (p)=>{
    this.setState({progress: p});
  }

  render() {
    const pgsz = 9;
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apikey}   key="general" pagesize={pgsz} category='general' />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apikey}   key="business" pagesize={pgsz} category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apikey}   key="entertainment" pagesize={pgsz} category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apikey}   key="health" pagesize={pgsz} category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apikey}   key="science" pagesize={pgsz} category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apikey}   key="sports" pagesize={pgsz} category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apikey}   key="technology" pagesize={pgsz} category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}