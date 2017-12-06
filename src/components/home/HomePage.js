import React, { Component } from 'react';
import NavBar from '../navbar/navbar.js'
import TodoContainer from '../todos/TodoContainer.js'
import EventSearchBox from '../events/EventSearchBox.js'
import HomeWeatherDisplay from '../weather/HomeWeatherDisplay.js'
import NewsContainer from '../news/NewsContainer.js'
import TriviaContainer from '../trivia/TriviaContainer.js'
import Footer from '../footer/Footer.js'
import { Card, Container, Header, Grid } from 'semantic-ui-react'

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
            content='Welcome to LIFEHUB!'
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '4em' }}
          />
          <Header
            className='header-text'
            as='h2'
            content='Get organized. Get motived. A better life.'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
        </Container>
        <div className='below-nav'>
          <Grid >
            <Grid.Row>
              <Grid.Column width={4} className='left'>
                <div className='home-left'>
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
                      <NewsContainer userId={this.props.userId}/>
                    </Card>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className='home-center'>
                  <TodoContainer userId={this.props.userId} />
                </div>
              </Grid.Column>
              <Grid.Column width={4}  className='right'>
                <div className='home-right'>

                    <Card centered>
                      <HomeWeatherDisplay
                        weatherData={this.state.weatherForecast}
                        handleChange={this.props.handleWeatherChange}
                        city={this.props.city}
                      />
                    </Card>

                    <Card centered >
                      <TriviaContainer userId={this.props.userId}/>
                    </Card>

                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <Footer />
      </div>
    )
  }
}

export default HomePage;
