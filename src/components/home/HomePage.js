import React, { Component } from 'react';
import NavBar from '../navbar/navbar.js'
import TodoContainer from '../todos/TodoContainer.js'
import EventSearchBox from '../events/EventSearchBox.js'
import { Grid, Segment } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <NavBar handleclick={this.props.handleClick} />
        <h1>LIFEHUB</h1>
        <Grid columns='equal'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment><EventSearchBox handleSubmit={this.props.handleZipSubmit} handleChange={this.props.handleZipChange}/></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment><p>Stuff 1</p></Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={1}>
            <Grid.Column>
              <Segment><TodoContainer userId={this.props.userId} /></Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment><p>Stuff 2</p></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment><p>Stuff 3</p></Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default HomePage;
