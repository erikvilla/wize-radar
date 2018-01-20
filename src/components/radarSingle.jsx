import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  MarkSeries,
  LabelSeries,
  VerticalGridLines,
  HorizontalGridLines,
  CircularGridLines,
  Hint
} from 'react-vis';
import {
  Grid,
  Header,
  Segment,
  Checkbox,
  Form } from 'semantic-ui-react'

import {DISCRETE_COLOR_RANGE} from './theme';
import RadarDetail from './radarDetail';

import practiceItems from '../data/practices.json';

import '../../node_modules/react-vis/dist/style.css';
import './radar.css';

const practices = [
  'Standup',
  'Sprint Planning',
  'Sass',
  'TDD',
  'Domain driven design',
  'Integration testing',
  'Functional testing',
  'Unit testing',
  'UX Workshops',
  'Kubernetes',
  'GCP',
  'Continuous deployment',
  'Continuous Integration'
]

function generateData(rotation = 0) {
  const maxLabelNumber = practices.length-1;
  const labelNumber = () => Math.floor(Math.random() * maxLabelNumber);
  return [
    {x: Math.random() * 6, y: Math.random() * (6 - 3 + 1), label: practices[labelNumber()], size: 1, style:{fontSize: 9}, rotation:rotation},
    {x: Math.random() * 6, y: Math.random() * 3, label: practices[labelNumber()], size: 1, style:{fontSize: 9}, rotation:rotation},
    {x: Math.random() * (6 - 3), y: Math.random() * 3, label: practices[labelNumber()], size: 1, style:{fontSize: 9}, rotation:rotation},
    {x: Math.random() * (5 - 3), y: Math.random() * (6 - 3), label: practices[labelNumber()], size: 1, style:{fontSize: 9}, rotation:rotation},
    {x: Math.random() * (6 - 3 + 1), y: Math.random() * 3, label: practices[labelNumber()], size: 1, style:{fontSize: 9}, rotation:rotation},
    {x: Math.random() * (6 - 3 + 1), y: Math.random() * 3, label: practices[labelNumber()], size: 1, style:{fontSize: 9}, rotation:rotation},
  ];
}

export default class Example extends React.Component {
  state = {
    data: generateData(10),
    duration: 12,
  }
  handleChange = (e, { value }) => {
    this.setState({
      duration: value,
      data: generateData(10),
      practiceItems: null,
      itemTitle: null,
    })
  }

  generatePracticeDescription = () => {
    const maxLabelNumber = practices.length-1;
    const labelNumber = () => Math.floor(Math.random() * maxLabelNumber);
    const key = practices[labelNumber()];
    this.setState({
      practiceItems: practiceItems[key],
      itemTitle: key,
    });
  }

  render() {
    const {data, data2, data3, data4, duration} = this.state;
    const titleMap = {
      2: 'Adopt',
      3: 'Trial',
      4: 'Assess',
      5: 'Hold',
    }

    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
              <XYPlot
                yDomain={[0, 5]}
                xDomain={[0, 5]}
                width={500}
                height={500}>
                <XAxis
                  tickValues={[0, 1, 2, 3, 4, 5]}
                  tickFormat={v => titleMap[v]}
                />
                <YAxis
                  tickValues={[0, 1, 2, 3, 4, 5]}
                  tickFormat={v => ''}
                />
                <MarkSeries
                  className="mark-series-example"
                  strokeWidth={2}
                  sizeRange={[1, 5]}
                  data={data}
                  color={DISCRETE_COLOR_RANGE[0]}
                  />
                <LabelSeries
                  animation
                  allowOffsetToBeReversed
                  data={data}
                  />
                <CircularGridLines
                  tickValues={[0, 1, 2, 3, 4, 5]}
                />
              </XYPlot>
          </Grid.Column>
          <Grid.Column>
            <RadarDetail items={this.state.practiceItems} title={this.state.itemTitle} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
