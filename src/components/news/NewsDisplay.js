import React from 'react'
import { Card, List, Icon } from 'semantic-ui-react'

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
              <List.Item>
                <a href={props.links[props.numStart]}>{props.news[props.numStart]}</a>
              </List.Item>
              <img className='news-image'src={props.images[props.numStart]} alt={`news-${props.numStart}`}/>
              <div className='arrow-icons'>
                <Icon onClick={props.downClick} size='huge' name='arrow left' />
                <Icon onClick={props.upClick} size='huge' name='arrow right' />
              </div>
            </List>
          </div>
        </Card.Description>
      </Card.Content>
    </div>
  )
}

export default NewsDisplay
