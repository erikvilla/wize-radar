import React, { Component } from 'react'

import { Button, Checkbox, Menu, Header, Icon, Image, Input, Segment, Table, Label } from 'semantic-ui-react'
import api from '../api/api'
import axios from 'axios'
import _ from 'lodash'


class HealthTable extends Component {
  constructor (props) {
    super(props)
  }

  state = {checked: []}

  renderCircle (healthRating) {
    switch(healthRating) {
      case 'GREEN': return '/assets/oval-2.png';
      case 'YELLOW': return '/assets/triangle.png';
      case 'RED': return '/assets/rectangle.png';
    }
  }

  renderSentiment (sentiment) {
    switch(sentiment) {
      case 'HAPPY':
        return <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='happy'>😃</span></Table.Cell>;
      case 'MEH':
        return <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='meh'>😶</span></Table.Cell>;
      case 'ANGRY':
        return <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='mad'>😡</span></Table.Cell>;
    }
  }

  componentWillMount () {
    api.teams.getTeamHealthStatus({ teamId: 2 })
      .then((response) => {
        const checkpoints = response.data.checkpoints.slice(0, 5).reverse();
        this.setState({ checkpoints: checkpoints });
      });
  }

  getAttributeTimeline (checkpoints, attribute) {
    return _.each(checkpoints, (checkpoint) => {
      checkpoint.attributes[attribute].rating;
    });
  }

  render () {

    const ATTRIBUTES = [
      { id: 'TEAM_LEADERSHIP' },
      { id: 'BALANCED_TEAM' },
      { id: 'SERVICE_MANDATE' },
      { id: 'SERVICE_LEVELS' },
      { id: 'CUSTOMER_CENTRICITY' },
      { id: 'TOOLS_AND_PROCESSES' },
      { id: 'EFFECTIVE_PARTNERSHIPS' },
      { id: 'REPORTING_AND_ANALYTICS' }
    ];

    const timelines = _.map(ATTRIBUTES, (attribute) => {
      return this.getAttributeTimeline(this.state.checkpoints, attribute.id);
    });

    const rows = _.map(ATTRIBUTES, (attribute, index) => {
     return _.map(timelines[index], (point) => {
        const rating = point.attributes[attribute.id].rating;
        return <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                  <Image src={this.renderCircle(rating)} centered />
                </Table.Cell>;
      });
    });

    return (
      <div>
        <Table celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell textAlign='center'>Attribute</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Sep 17</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Oct 17</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Nov 17</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Dec 17</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Jan 18</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Sentiment</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/team.png' size='mini' spaced /><span>Team Leadership</span>
              </Table.Cell>
              { rows[0] }
              { this.renderSentiment('HAPPY') }
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/balanced.png' size='mini' spaced /><span>Balanced Team</span>
              </Table.Cell>
              { rows[1] }
              { this.renderSentiment('HAPPY') }
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/service.png' size='mini' spaced /><span>Service Mandate</span>
              </Table.Cell>
              { rows[2] }
              { this.renderSentiment('HAPPY') }
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/service_levels.png' size='mini' spaced /><span>Service Levels</span>
              </Table.Cell>
              { rows[3] }
              { this.renderSentiment('ANGRY') }
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/customer.png' size='mini' spaced /><span>Customer Centricity</span>
              </Table.Cell>
              { rows[4] }
              { this.renderSentiment('MEH') }
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/tools.png' size='mini' spaced /><span>Tools and processs</span>
              </Table.Cell>
              { rows[5] }
              { this.renderSentiment('MEH') }
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/effective.png' size='mini' spaced /><span>Effective partnerships</span>
              </Table.Cell>
              { rows[6] }
              { this.renderSentiment('HAPPY') }
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/reporting.png' size='mini' spaced /><span>Reporting & Analytics</span>
              </Table.Cell>
              { rows[7] }
              { this.renderSentiment('MEH') }
            </Table.Row>
          </Table.Body>
        </Table>

        <Button size='huge' as='a' href='/choose' color='blue' floated='right'>Analyze attributes</Button>
      </div>
    )
  }
}

export default HealthTable
