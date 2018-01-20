import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Checkbox, Menu, Header, Icon, Image, Input, Segment, Table, Label } from 'semantic-ui-react'

class ChooseTeamTable extends Component {
  constructor (props) {
    super(props)
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  renderCircle (healthRating) {
    switch(healthRating) {
      case 'GREEN': return '/assets/oval-2.png';
      case 'YELLOW': return '/assets/triangle.png';
      case 'RED': return '/assets/rectangle.png';
    }
  }

  renderSentiment (sentiment) {
    switch(sentiment) {
      case 'HAPPY': return '😃';
      case 'MEH': return '😶';
      case 'ANGRY': return '😡';
    }
  }

  render () {
    const sentimentRow = _.map(this.props.sentiments, (sentiment, i) => {
      return <Table.Cell textAlign='center' style={{fontSize: '2em'}} key={`sentiment-${i}`}><span>{this.renderSentiment(sentiment)} </span></Table.Cell>
    });
    const healthRatings = _.map(this.props.health, (healthRating, i) => {
      return <Table.Cell textAlign='center' key={`health-${i}`}><Image centered src={this.renderCircle(healthRating)} /></Table.Cell>;
    });

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='left' style={{width: '300px'}}>
              <Header as='h3'>
                <Checkbox label={this.props.team} />
              </Header>
            </Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign='center'>
              Sentiment
            </Table.Cell>
            {
              sentimentRow
            }
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign='center'>
              Health
            </Table.Cell>
            {
              healthRatings
            }
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

ChooseTeamTable.propTypes = {
  team: PropTypes.String,
  sentiments: PropTypes.array,
  health: PropTypes.array
}

export default ChooseTeamTable
