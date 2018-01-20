import React from 'react'
import Radar from './radar'
import HealthTable from './healthTable'

import { Divider, Dropdown, Grid, Header, Image, Icon, List, Menu, Segment } from 'semantic-ui-react'

const statusPage = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Header as='h1'>
              <Icon name='lock' />
              <Header.Content>
                Team Status
              </Header.Content>
            </Header>
            <HealthTable />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as='h1'>
              <Icon name='lock' />
              <Header.Content>
                Radar
              </Header.Content>
            </Header>
            <Segment>
              <Radar />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h2'>
              Timeline
            </Header>

            <Segment>

            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </div>
  )
}

export default statusPage
