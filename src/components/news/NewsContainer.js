import React from 'react'
import NewsDisplay from './NewsDisplay.js'

export default class  NewsContainer extends React.Component {
  state = {
    goals: [],
    randomNum: null,
    news: [],
    links: []
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
       links: data.articles.map((item) => item.url)
     }))
  }



  render() {
    console.log(this.state.news)
    return(
      <NewsDisplay
        goals={this.state.goals}
        num={this.state.randomNum}
        news={this.state.news}
        links={this.state.links}
      />
    )
  }
}
