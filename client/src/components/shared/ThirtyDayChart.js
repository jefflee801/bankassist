import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LineChart from './LineChart';
import ToolTip from './ToolTip';
import InfoBox from './InfoBox';
import moment from 'moment';

class ThirtyDayChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
          fetchingData: true,
          data: null,
          hoverLoc: null,
          activePoint: null
        }
      }
      handleChartHover(hoverLoc, activePoint){
        this.setState({
          hoverLoc: hoverLoc,
          activePoint: activePoint
        })
      }
      componentDidMount(){
        const getData = () => {
          const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
    
          fetch(url).then( r => r.json())
            .then((bitcoinData) => {
              const sortedData = [];
              let count = 0;
              for (let date in bitcoinData.bpi){
                sortedData.push({
                  d: moment(date).format('MMM DD'),
                  p: bitcoinData.bpi[date].toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
                  x: count, //previous days
                  y: bitcoinData.bpi[date] // numerical price
                });
                count++;
              }
              this.setState({
                data: sortedData,
                fetchingData: false
              })
            })
            .catch((e) => {
              console.log(e);
            });
        }
        getData();
      }

  render () {
    return (
        <Card centered={true} color={'green'} style={{ width: '950px'}}>
        <Grid textAlign='center' relaxed>
            <Grid.Row>
                <h1>30 Day Bitcoin Price Chart</h1>
            </Grid.Row>
            <Grid.Row>
                { !this.state.fetchingData ?
                <InfoBox data={this.state.data} />
                : null }
            </Grid.Row>
            <Grid.Row textAlign='center'>
                {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}<br />
            </Grid.Row>
            <Grid.Row>
                <div className='chart'>
                    { !this.state.fetchingData ?
                    <LineChart data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
                    : null }
                </div>
            </Grid.Row>
        </Grid>
        </Card>
    ) 
  }

}

const mapStateToProps = state => ({
  user: state.user
}) 

export default withRouter(connect(mapStateToProps)(ThirtyDayChart)); 