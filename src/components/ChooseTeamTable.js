import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Checkbox, Menu, Header, Icon, Image, Input, Segment, Table, Label } from 'semantic-ui-react'

class ChooseTeamTable extends Component {
  constructor (props) {
    super(props)
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render () {
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
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
            <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span>😃</span></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign='center'>
              Health
            </Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
            <Table.Cell textAlign='center'><Image centered src='/assets/oval-2.png' /></Table.Cell>
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
