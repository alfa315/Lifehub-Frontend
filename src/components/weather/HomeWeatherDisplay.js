import React from 'react'
import { Card, Image, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Button, Input } from 'semantic-ui-react'

const HomeWeatherDisplay = (props) => {
  if(props.weatherData.length === 0 || props.weatherData === undefined) {
    return (
      <div className='ui-segment'>
        <Segment>
          <Dimmer active>
            <Loader size='huge' active inline='center'>Looking at the sky...</Loader>
          </Dimmer>
        </Segment>
      </div>
    )
  } else {
    return(
      <Card.Content>
        <Image floated='right' size='small' src={`https://www.metaweather.com/static/img/weather/${props.weatherData.consolidated_weather[0].weather_state_abbr}.svg`} />
        <Card.Header>
          <font size='3.7'>{props.weatherData.title.toUpperCase()}</font>
        </Card.Header>
        <Card.Meta>
          <p>{props.weatherData.consolidated_weather[0].weather_state_name}</p>
          <p>{props.weatherData.consolidated_weather[0].applicable_date}</p>
        </Card.Meta>
        <Card.Description>
          <p>Temperature High: {Math.round(props.weatherData.consolidated_weather[0].max_temp * (9/5) + 32)}</p>
          <p>Temperature Low: {Math.round(props.weatherData.consolidated_weather[0].min_temp * (9/5) + 32)}</p>
          <form onChange={props.handleChange} onSubmit={e => { e.preventDefault(); }}>
            <Input><input type='text' placeholder='Enter City Name' /></Input>
          </form>
          <div className='weather-set-button'><Button basic size='tiny' > <font size="3.7"><Link to='/weather' style={{color: 'black'}} className="item">
            View Weather
          </Link></font></Button></div>
        </Card.Description>
      </Card.Content>
    )
  }

}

export default HomeWeatherDisplay
