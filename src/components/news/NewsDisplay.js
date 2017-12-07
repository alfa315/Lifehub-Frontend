import React from 'react'
import { Card, List } from 'semantic-ui-react'

const NewsDisplay = (props) => {
  return(
    <div>
      <Card.Content className='news-card'>
        <Card.Header>
          <font size='3.7'>News</font>
        </Card.Header>
        <Card.Meta>
        </Card.Meta>
        <Card.Description>
          <div className='news-subheader'>
            <h5>Trending Headlines</h5>
          </div>
          <div className='news-list'>
            <List>
              <List.Item><a href={props.links[0]}>{props.news[0]}</a></List.Item>
              <List.Item><a href={props.links[1]}>{props.news[1]}</a></List.Item>
              <List.Item><a href={props.links[2]}>{props.news[2]}</a></List.Item>
              <List.Item><a href={props.links[3]}>{props.news[3]}</a></List.Item>
              <List.Item><a href={props.links[4]}>{props.news[4]}</a></List.Item>
            </List>
          </div>
        </Card.Description>
      </Card.Content>
    </div>
  )
}

export default NewsDisplay
