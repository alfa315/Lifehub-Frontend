import React, { Component } from 'react';
import NavBar from '../navbar/navbar.js'
import TodoContainer from '../todos/TodoContainer.js'
import EventSearchBox from '../events/EventSearchBox.js'
import { Grid, Segment, Card, Image } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <NavBar handleclick={this.props.handleClick} />
        <h1>LIFEHUB</h1>
        <Grid columns='equal'>
          <Grid.Row columns={2}>
            <Grid.Column >
              <Card centered>
                <Card.Content>
                  <Card.Header>
                    Event Search
                  </Card.Header>
                  <Card.Meta>
                    Enter Search Term to Find Events
                  </Card.Meta>
                  <Card.Description>
                    <EventSearchBox handleSubmit={this.props.handleSearchSubmit} handleChange={this.props.handleSearchChange}/>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Segment><p>Daily Weather</p></Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={1}>
            <Grid.Column>
              <Segment><TodoContainer userId={this.props.userId} /></Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment><p>Goal of the Day</p></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment><p>Question of the Day</p></Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default HomePage;
