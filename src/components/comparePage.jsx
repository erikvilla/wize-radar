import React from 'react'
import Radar from './radar'
import ComparisonTable from './ComparisonTable'

import { Divider, Dropdown, Grid, Header, Image, Icon, List, Menu, Segment } from 'semantic-ui-react'

const comparePage = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Segment>
              <ComparisonTable />
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
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

export default comparePage
