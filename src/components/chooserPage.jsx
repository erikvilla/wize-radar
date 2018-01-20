import React, { Component } from 'react'
import { Button, Checkbox, Menu, Header, Icon, Image, Input, Segment, Table, Label } from 'semantic-ui-react'

import ChooseTeam from './ChooseTeam'
import ChooseTeamTable from './ChooseTeamTable'

export default class chooserPage extends Component {
  state = {
    activeItem: 'recommended',
    attributes: [
      {
        name: 'Service Levels',
        icon: 'service-levels',
        color: 'green',
        teams: [
          {name: 'Team Dow Jones', sentiments: [], health: []},
          {name: 'Team Fox', sentiments: [], health: []},
          {name: 'Team News OS', sentiments: [], health: []},
        ]
      },
      {
        name: 'Customer Centricity',
        icon: 'customer-centricity',
        color: 'red',
        teams: [
          {name: 'Team NatGeo', sentiments: [], health: []},
          {name: 'Team Roadmap', sentiments: [], health: []},
          {name: 'Team Shape', sentiments: [], health: []},
        ]
      },
    ]
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render () {
    const {activeItem} = this.state

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='recommended' active={activeItem === 'recommended'} onClick={this.handleItemClick} />
          <Menu.Item name='customized' active={activeItem === 'customized'} disabled onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input transparent icon={{name: 'search', link: true}} placeholder='Search teams...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment.Group>


          <ChooseTeam attributes={this.state.attributes[0]} />

          <ChooseTeam attributes={this.state.attributes[1]} />

          <Segment textAlign='center' style={{backgroundColor: '#f2f3f7'}}>
            <Button size='huge' color='blue'>
              Compare selected teams
            </Button>
          </Segment>
        </Segment.Group>
      </div>
    )
  }
};
