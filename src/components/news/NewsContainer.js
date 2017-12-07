import React from 'react'
import NewsDisplay from './NewsDisplay.js'

export default class  NewsContainer extends React.Component {
  state = {
    goals: [],
    randomNum: null,
    news: [],
    links: [],
    images: [],
    numStart: 0
  }

  componentWillMount() {
    this.fetchGoals()
    this.fetchNews()
  }

  fetchGoals = () => {
    fetch('http://localhost:3000/api/v1/goals')
		 .then(response => response.json())
		 .then(data => this.setState({
       goals: data,
       randomNum: Math.floor((Math.random() * data.length) + 1)
    }))
  }

  fetchNews = () => {
    fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=5d636e1db94d4279805aa9acc9e68fc2')
		 .then(response => response.json())
		 .then(data => this.setState({
       news: data.articles.map((item) => item.title),
       links: data.articles.map((item) => item.url),
       images: data.articles.map((item) => item.urlToImage)
     }))
  }

  handleClickUp = (event) => {
    this.state.numStart < 9 ? this.setState({numStart: this.state.numStart + 1}) : null
  }

  handleClickDown = (event) => {
    this.state.numStart > 0 ? this.setState({numStart: this.state.numStart - 1}) : null
  }

  render() {

    return(
      <NewsDisplay
        goals={this.state.goals}
        num={this.state.randomNum}
        news={this.state.news}
        links={this.state.links}
        images={this.state.images}
        numStart={this.state.numStart}
        upClick={this.handleClickUp}
        downClick={this.handleClickDown}
      />
    )
  }
}
