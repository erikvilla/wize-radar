import React, { Component } from 'react'
import { Menu, Image, Icon } from 'semantic-ui-react'
import './TopMenu.css'

export default class TopMenuComponent extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render () {
    const activeItem = 'gamepad'

    return (
      <Menu fixed='top' id='TopMenu'>
        <Menu.Menu position='left'>
          <Menu.Item header
            name='Team'
            active={activeItem === 'features'}
            onClick={this.handleItemClick}
          >
            My Team
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>
          <Menu.Item>
            <div>
              <Image src='/vidal-gonzalez-avatar.png' avatar />
              <span>Vidal Gonzalez</span>
            </div>
          </Menu.Item>
          <Menu.Item>
            <Icon.Group size='large'>
              <Icon name='bell outline' />
              <Icon corner color='red' name='warning' />
            </Icon.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
