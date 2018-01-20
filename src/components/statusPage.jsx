import React from 'react'
import Radar from './radarSingle'
import HealthTable from './healthTable'

import { Divider, Dropdown, Grid, Header, Image, Icon, List, Menu, Segment } from 'semantic-ui-react'

const statusPage = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={9}>
            <Header as='h1'>
              <Header.Content>
                Team Status
              </Header.Content>
            </Header>
            <HealthTable />
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h1'>
              <Header.Content>
                Radar
              </Header.Content>
            </Header>
            <Segment>
              <Radar />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </div>
  )
}

export default statusPage
