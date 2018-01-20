import React, { Component } from 'react'

import { Button, Checkbox, Menu, Header, Icon, Image, Input, Segment, Table, Label } from 'semantic-ui-react'

class HealthTable extends Component {
  constructor (props) {
    super(props)
  }

  state = {checked: []}

  render () {

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
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='happy'>😃</span></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/balanced.png' size='mini' spaced /><span>Balanced Team</span>
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='meh'>😶</span></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/service.png' size='mini' spaced /><span>Service Mandate</span>
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/rectangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='happy'>😃</span></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/service_levels.png' size='mini' spaced /><span>Service Levels</span>
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='mad'>😡</span></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/customer.png' size='mini' spaced /><span>Customer Centricity</span>
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/rectangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='meh'>😶</span></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/tools.png' size='mini' spaced /><span>Tools and processs</span>
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/rectangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='happy'>😃</span></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/effective.png' size='mini' spaced /><span>Effective partnerships</span>
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/rectangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/rectangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='mad'>😡</span></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left' compact>
                <Checkbox label={false} />
              </Table.Cell>
              <Table.Cell textAlign='left'>
                <Image src='/assets/attributes/reporting.png' size='mini' spaced /><span>Reporting & Analytics</span>
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/rectangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/rectangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/triangle.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}>
                <Image src='/assets/oval-2.png' centered />
              </Table.Cell>
              <Table.Cell textAlign='center' style={{fontSize: '2em'}}><span role='img'
                                                                             aria-label='meh'>😶</span></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Button size='huge' as='a' href='/choose' color='blue' floated='right'>Analyze attributes</Button>
      </div>
    )
  }
}

export default HealthTable
