import React from 'react'
import { Grid, Card, Image, Loader } from 'semantic-ui-react'

const WeeklyWeather = (props) => {
  if(props.weatherData.length === 0) {
    return (
      <div className='ui-segment loader'>
        <Loader size='huge' active inline indeterminate>Checking Weather...</Loader>
      </div>
    )
  } else if(props.weatherData === undefined) {
    return(
      window.alert("Weather Data unavailable at the moment, please try again.")
    )
  } else {
    return(
      <Grid className='weather-grid' stackable columns={3}>
        {props.weatherData.map((day) => {
          return(
            <Grid.Column>
              <Card.Group>
                <Card centered>
                  <Card.Content>
                    <Image floated='right' size='small' src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} />
                    <Card.Header>
                      <font size='3.7'>{day.applicable_date}</font>
                    </Card.Header>
                    <Card.Meta>
                      {day.weather_state_name}
                    </Card.Meta>
                    <Card.Description>
                      <p>Temperature High: {Math.round(day.max_temp * (9/5) + 32)}</p>
                      <p>Temperature Low: {Math.round(day.min_temp * (9/5) + 32)}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Column>
          )
        })}
      </Grid>
    )
  }
}

export default WeeklyWeather
