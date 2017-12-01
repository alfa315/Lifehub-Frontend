import React, { Component } from 'react';
import NavBar from '../navbar/navbar.js'
import TodoContainer from '../todos/TodoContainer.js'
import EventSearchBox from '../events/EventSearchBox.js'
import HomeWeatherDisplay from '../weather/HomeWeatherDisplay.js'
import GoalsContainer from '../goals/GoalsContainer.js'
import TriviaContainer from '../trivia/TriviaContainer.js'
import { Card, Container, Header, Button, Icon } from 'semantic-ui-react'

class HomePage extends Component {
  state = {
    weatherForecast: []
  }

  componentDidMount() {
    this.fetchWeatherData()
  }

  fetchWeatherData() {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.props.weatherId}`)
    .then(res => res.json())
    .then(data => this.setState({weatherForecast: data}))
  }

  render() {
    return (
      <div className="home-page">
        <NavBar handleclick={this.props.handleClick} />
        <Container className='home-header' fluid>
          <Header
            as='h1'
            content='Imagine-a-Company'
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
          />
          <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
          <Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
          </Button>
        </Container>
        <div className='below-nav'>

            <Card.Group>
              <Card centered >
                <Card.Content>
                  <Card.Header>
                    Event Search
                  </Card.Header>
                  <Card.Meta>
                    Enter Search Term to Find Events
                  </Card.Meta>
                  <Card.Description>
                    <EventSearchBox handleChange={this.props.handleSearchChange}/>
                  </Card.Description>
                </Card.Content>
              </Card>


              <Card centered>
                <HomeWeatherDisplay
                  weatherData={this.state.weatherForecast}
                  handleChange={this.props.handleWeatherChange}
                  city={this.props.city}
                />
              </Card>
            </Card.Group>

            <Card.Group>
              <Card centered>
                <GoalsContainer />
              </Card>

              <Card centered >
                <TriviaContainer />
              </Card>
            </Card.Group>

          <TodoContainer userId={this.props.userId} />
        </div>
      </div>
    )
  }
}

export default HomePage;
