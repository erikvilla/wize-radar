import React, { Component } from 'react'
import { Menu, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './LeftMenu.css'

export default class TopMenuComponent extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render () {
    const activeItem = 'gamepad'

    return (
      <Menu icon vertical inverted fixed='left' id='LeftMenu'>
        <Menu.Item name='gamepad' active={activeItem === 'gamepad'} onClick={this.handleItemClick}>
          <Link to='/'><Image src='/wizeline.png' size='mini' /></Link>
        </Menu.Item>

        <Menu.Item name='line chart' active={activeItem === 'line chart'} onClick={this.handleItemClick}>
          <Icon name='line chart' size='medium'/>
        </Menu.Item>

        <Menu.Item name='heartbeat' active={activeItem === 'heartbeat'} onClick={this.handleItemClick}>
          <Icon name='heartbeat' />
        </Menu.Item>
      </Menu>
    )
  }
}
