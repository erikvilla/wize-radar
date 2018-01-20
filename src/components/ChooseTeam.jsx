import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Checkbox, Menu, Header, Icon, Image, Input, Segment, Table, Label } from 'semantic-ui-react'
import ChooseTeamTable from './ChooseTeamTable'

class ChooseTeam extends Component {
  constructor (props) {
    super(props)
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render () {
    const teamTables = this.props.attributes.teams.map((team) => {
      return <ChooseTeamTable team={team.name} sentiments={team.sentiments} health={team.health} />
    })

    return (
      <Segment basic>
        <Header as='h3' color={this.props.attributes.color} textAlign='left' style={{paddingTop: '10px'}}>
          <Image src={`/assets/${this.props.attributes.icon}@3x.png`} />
          {this.props.attributes.name}
        </Header>

        {teamTables}
      </Segment>
    )
  }
}

ChooseTeam.propTypes = {
  attributes: PropTypes.object
}

export default ChooseTeam
