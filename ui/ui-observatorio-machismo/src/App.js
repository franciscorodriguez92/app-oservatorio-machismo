import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


// Import Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


import Chart from "./Chart.jsx";


// let options = {
//   title: {
//     text: ""
//   },
//   chart: {
//     events: {
//       render: function() {
//         console.log("render");
//       }
//     }
//   },
//   series: [
//     {
//       allowPointSelect: true,
//       point: {
//         events: {}
//       },
//       data: [],
//       type: "column"
//     }
//   ]
// };

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
    console.log(options);
    return (
      <div>
        {this.state && this.state.data && (
          <Chart options={options} highcharts={Highcharts} ref={"chart"} />
        )}
      </div>
    );
  }
  

}

export default App;
