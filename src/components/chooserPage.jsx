import React, { Component } from 'react'
import { Button, Checkbox, Menu, Header, Icon, Image, Input, Segment, Table, Label } from 'semantic-ui-react'

import ChooseTeam from './ChooseTeam'
import ChooseTeamTable from './ChooseTeamTable'
import api from '../api/api'
import axios from 'axios'
import _ from 'lodash'

export default class chooserPage extends Component {
  state = {
    activeItem: 'recommended',
    attributes: [
      {
        name: 'Service Levels',
        icon: 'service-levels',
        id: 'SERVICE_LEVELS',
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
        id: 'CUSTOMER_CENTRICITY',
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

  mapActions () {
    const selectedAttributes = [{
      name: 'Customer Centricity',
      icon: 'customer-centricity',
      id: 'CUSTOMER_CENTRICITY'
    },
    {
      name: 'service levels',
      icon: 'service-levels',
      id: 'SERVICE_LEVELS'
    }];

    axios.all([
      api.teams.getTeamHealthStatus({ teamId: 1 }),
      api.teams.getTeamHealthStatus({ teamId: 2 }),
      api.teams.getTeamHealthStatus({ teamId: 3 })
    ])
      .then(axios.spread((res1, res2, res3) => {
        const availableTeams = [ res1.data, res2.data, res3.data ];
        const newStateAttributes = _.map(selectedAttributes, (selectedAttribute) => {
          const attr = {
            name: selectedAttribute.name,
            icon: selectedAttribute.icon,
            id: selectedAttribute.id,
            color: 'green',
            teams:  _.map(availableTeams, (singleTeam) => {
              return {
                name: singleTeam.name,
                sentiments: _.map(singleTeam.checkpoints, (checkpoint) => checkpoint.attributes[selectedAttribute.id].sentiment).reverse(),
                health: _.map(singleTeam.checkpoints, (checkpoint) => checkpoint.attributes[selectedAttribute.id].rating).reverse(),
              };
            })
          };

          return attr;
        });

        this.setState({ attributes: newStateAttributes });
        console.log(newStateAttributes);
      }));
  }

  componentWillMount () {
    this.mapActions();
  }

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
