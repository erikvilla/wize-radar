import React, { Component } from 'react'
import './ComparisonTablePane.css'

import { Button, Checkbox, Grid, Header, Icon, Image, Input, Segment, Tab, Table, Card } from 'semantic-ui-react'

class ComparisonTablePane extends Component {
  constructor (props) {
    super(props)
  }

  state = {checked: []}

  render () {
    return (
      <Card.Group id='comparison-cards'>
        <Card fluid color='blue'>
          <Card.Content header='Team Dow Jones' as="Header" color='blue' />
          <Card.Content desciption>
            <Grid centered columns={2}>
              <Grid.Row>
                <Grid.Column style={{ textAlign: 'center' }}>
                  <Image src='/assets/oval-2.png' centered />
                </Grid.Column>
                <Grid.Column centered>
                  <div role='img' aria-label='happy' style={{fontSize: '2em', textAlign: 'center'}}>😃</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
        <Card fluid color='red'>
          <Card.Content header='Team Disney' as="Header" color='red' />
          <Card.Content desciption>
            <Grid centered columns={2}>
              <Grid.Row>
                <Grid.Column style={{ textAlign: 'center' }}>
                  <Image src='/assets/oval-2.png' centered />
                </Grid.Column>
                <Grid.Column centered>
                  <div role='img' aria-label='happy' style={{fontSize: '2em', textAlign: 'center'}}>😶</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
        <Card fluid color='green'>
          <Card.Content header='Team Fox' as="Header" color='green'/>
          <Card.Content desciption>
            <Grid centered columns={2}>
              <Grid.Row>
                <Grid.Column style={{ textAlign: 'center' }}>
                  <Image src='/assets/triangle.png' centered />
                </Grid.Column>
                <Grid.Column centered>
                  <div role='img' aria-label='happy' style={{fontSize: '2em', textAlign: 'center'}}>😡</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
        <Card fluid color='orange'>
          <Card.Content header='Team Bots' as="Header" color='orange' />
          <Card.Content desciption>
            <Grid centered columns={2}>
              <Grid.Row>
                <Grid.Column style={{ textAlign: 'center' }}>
                  <Image src='/assets/rectangle.png' centered />
                </Grid.Column>
                <Grid.Column centered>
                  <div role='img' aria-label='happy' style={{fontSize: '2em', textAlign: 'center'}}>😶</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>filter</Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

export default ComparisonTablePane
