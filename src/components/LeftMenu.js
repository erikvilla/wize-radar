import React, { Component } from 'react'
import { Menu, Image, Icon } from 'semantic-ui-react'
import './LeftMenu.css'

export default class TopMenuComponent extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render () {
    const activeItem = 'gamepad'

    return (
      <Menu icon vertical inverted fixed='left' id='LeftMenu'>
        <Menu.Item name='gamepad' active={activeItem === 'gamepad'} onClick={this.handleItemClick}>
          <Image src='/wizeline.png' size='mini' />
        </Menu.Item>

        <Menu.Item name='line chart' active={activeItem === 'line chart'} onClick={this.handleItemClick}>
          <Icon name='line chart' />
        </Menu.Item>

        <Menu.Item name='video play' active={activeItem === 'video play'} onClick={this.handleItemClick}>
          <Icon name='video play' />
        </Menu.Item>
      </Menu>
    )
  }
}
