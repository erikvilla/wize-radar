import React from 'react'
import { Card, Checkbox, Header, Button } from 'semantic-ui-react'
import data from '../data/practices.json';
import './radarDetail.css';
import './radar.css';
import './inputRange.css';

const items = [
  {
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'Assess',
  },
  {
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'Trial',
  },
  {
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'Adopt',
  },
]

const CardExampleGroupProps = ({items, title,}) => {
  if(!items){
    return null;
  }
  return(
    <div className="card_group input-range-container">
      <Header as='h3' className="radar_header">{title}</Header>
      <Card.Group items={items} header={"Header"} />
      <br/>
      <Button positive>Assess</Button>
    </div>
  )
}

export default CardExampleGroupProps
