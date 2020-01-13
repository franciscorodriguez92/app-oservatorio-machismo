import React, {Component} from 'react';
import './App.css';
import AppBarSimple from "./components/AppBarSimple";
import Footer from "./components/Footer"
import examples from "./data/examples.json"
import Grid from '@material-ui/core/Grid';
import Examples from './components/Examples'


// Import Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


import Chart from "./Chart.jsx";

import Header from "./components/Header"


let options = {
  title: {
    text: ""
  },
  series: [
    {
      allowPointSelect: true,
      point: {
        events: {}
      },
      data: null,
      type: "column"
    }
  ],
  plotOptions: {
    series: {
      //pointWidth: 20
    }
  },
  xAxis: {
    type: "category",
    labels: {
      style: {
        fontSize: "13px",
        fontFamily: "Verdana, sans-serif"
      }
    },
  },
  yAxis: [
    {
      min: 0,
      title: {
        text: "N"
      }
    },
    {
      title: {
        text: "Distribución tweets",
        align: "high",
        offset: 0,
        rotation: 0,
        y: -20
      },
      opposite: true
    }
  ],
  credits: false
};


class App extends React.Component {

  state = {
    examples: examples,
    selectedTerm: ""
  }

  componentDidMount(){
    const url = "/data";
    fetch(url)
        .then(response => response.json())
        //.then(response => console.log(response))
        .then(data => {

          //let newData = [250]
          let newData = []
          console.log("keys:")
          console.log(Object.values(data).length)
          for (let i = 0; i < Object.keys(data).length; i++) {

            newData.push({
              name: Object.keys(data)[i],
              x: i,
              y: Object.values(data)[i]
            });
          }

          console.log('data:')
          console.log(newData)
          options.series[0].data = newData;
  
          this.setState({ data: newData });
        });
    
  }
 
  onChange = e => {
    //console.log(e.target.value)
    this.setState({selectedTerm: e.target.value});
    //console.log(this.state.selectedTerm);
  }
  // render() {
  //   console.log("esto:")
  //   console.log(this.props.options);
  //   return (
  //     <HighchartsReact
  //       highcharts={Highcharts}
  //       constructorType={"chart"}
  //       updateArgs={[true]}
  //       //allowChartUpdate={true}
  //       //updateArgs={[true, true, true]}
  //       options={options}
  //       ref={this.highchartsChart}
  //       //callback={this.callback}
  //     />
  //   );
  // }

  render() {
    //console.log(this.state.selectedTerm);
    return (

      <div>
        <AppBarSimple></AppBarSimple>
        <Header></Header>
        <select name="select" onChange={this.onChange}>
          <option value="blanco"></option> 
          <option value="feminazi">feminazi</option> 
          <option value="nenaza">nenaza</option>
          <option value="zorra">zorra</option>
        </select>

        <Grid container justify="center" >
        <Grid spacing={3} alignItems="center" justify="center" container>

        <Examples examples={this.state.examples.examples} selectedTerm={this.state.selectedTerm}/>


        </Grid>

        </Grid>


        {this.state && this.state.data && (
          <Chart options={options} highcharts={Highcharts} ref={"chart"} />
        )}
        <Footer title = "Pie de página" description = "Descripción del pie de página"></Footer>
      </div>
    );
  }
  

}

export default App;
