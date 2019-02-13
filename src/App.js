import React, { Component } from 'react';
import './App.css';

import Search from './components/Search'
import Results from './components/Results'
import Buttons from './components/Buttons'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
const KEY = "0fbe0f5da2c44e33bc30f7103960f65a" 


const styles = (theme) => ({
  container: {
    width: '1000px',
    margin: '2em auto',
  },
  root: {
    flexGrow: 1,
  },
  header: {
    width: '100%',
  }
})
class App extends Component {
  state = { 
    status: "",
    search: "",
    country: "",
    articles: [],
    img: "",
    txt: ""
    
  }
  handler = async(country) => {
    await this.setState({
      country: country
    })
  }
  
  getNews = async(event) => {
    event.preventDefault()
    
    
    
    const searchInput = event.target.elements.searchInput.value
    const {country} = this.state
    console.log(searchInput)
    
    const url = `https://newsapi.org/v2/top-headlines?q=${searchInput}&country=${country}&apiKey=${KEY}`
    
    console.log(url)
    
    const api_call = await fetch(url)
    
    const data = await api_call.json()
    
    console.log('data is', data)
    
    
    
    if (data.status !== "error"){
      
      if (data.totalResults !== 0){
        this.setState({
          status: "ok",
          search: searchInput,
          country: country,
          articles: data.articles,
        })
      } else {
        alert("nothing found")
        this.setState({
          status: "nothing"
        })
      }
    } else {
      this.setState({
        status: "error"
      })
    }
  }
  
  
  render() {
    return (
      <div className={this.props.classes.container} container >
      <header className={this.props.classes.header}>
      <Search getNews={this.getNews} />
      <Buttons 
      onChange = {this.handler}
      /> 
      </header>
      <div>
      <Results
      articles={this.state.articles}
      status={this.state.status}
      />
      </div>
      </div>
      );
    }
  }
  
  export default withStyles(styles)(App);
  