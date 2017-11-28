import React from 'react'
import { Card, Image, Segment, Dimmer, Loader } from 'semantic-ui-react'

const HomeWeatherDisplay = (props) => {
  if(props.weatherData.length === 0 || props.weatherData === undefined) {
    return (
      <div className='ui-segment'>
        <Segment>
          <Dimmer active>
            <Loader size='huge' indeterminate>Looking at the sky...</Loader>
          </Dimmer>
        </Segment>
      </div>
    )
  } else {
    return(
      <Card.Content>
        <Image floated='right' size='small' src={`https://www.metaweather.com/static/img/weather/${props.weatherData[0].weather_state_abbr}.svg`} />
        <Card.Header>
          <font size='3.7'>{props.weatherData[0].applicable_date}</font>
        </Card.Header>
        <Card.Meta>
          {props.weatherData[0].weather_state_name}
        </Card.Meta>
        <Card.Description>
          <p>Temperature High: {Math.round(props.weatherData[0].max_temp * (9/5) + 32)}</p>
          <p>Temperature Low: {Math.round(props.weatherData[0].min_temp * (9/5) + 32)}</p>
        </Card.Description>
      </Card.Content>
    )
  }

}

export default HomeWeatherDisplay
