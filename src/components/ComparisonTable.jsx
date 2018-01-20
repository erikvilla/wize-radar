import React, { Component } from 'react'

import { Button, Checkbox, Menu, Header, Icon, Image, Input, Segment, Tab, Table, Label } from 'semantic-ui-react'

import ComparisonTablePane from './ComparisonTablePane'

class ComparisonTable extends Component {
  constructor (props) {
    super(props)
  }

  state = {checked: []}

  render () {
    const panes = [
      { menuItem: 'Service Levels', render: () => <Tab.Pane><ComparisonTablePane /></Tab.Pane> },
      { menuItem: 'Customer Centricity', render: () => <Tab.Pane></Tab.Pane> },
    ]
    return (
      <Tab panes={panes} />
    )
  }
}

export default ComparisonTable
