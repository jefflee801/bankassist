import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { TimeBasedLineChart } from 'mx-react-components';


class LineChart extends Component {
    render() {
        const lineChartData = [
            {x: 1483228800, y: 900},
            {x: 1485907200, y: 1100},
            {x: 1488326400, y: 1200},
            {x: 1491004800, y: 1400},
            {x: 1493596800, y: 1400},
            {x: 1496275200, y: 1350},
            {x: 1498867200, y: 1550},
            {x: 1501545600, y: 1650},
            {x: 1504224000, y: 1750},
            {x: 1506816000, y: 1850},        
        ];

        return (
            <div>
                <Header as="h4"  content='Net Worth' />
                    <TimeBasedLineChart
                            data={lineChartData}
                            height={400}
                            margin={{ top: 30, right: 0, bottom: 30, left: 75 }}
                            rangeType={'month'}
                            shadeBelowZero={true}
                            showZeroLine={false}
                            style={{ boxSizing: 'content-box' }}
                            width={700}
                    />
            </div>
        )
    }
}
        
export default LineChart; 