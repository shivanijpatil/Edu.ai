import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

class App extends Component {
  render() {
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
      animationEnabled: false,
      exportEnabled: true,
      theme: "light2",
      title: {
        text: "Performance Analysis"
      },
      axisY: {
        title: "Score",
        // suffix: "%"
      },
      axisX: {
        title: "Days of Month",
        prefix: "D",
        interval: 2
      },
      data: [{
        type: "line",
        toolTipContent: "Day {x}: {y}%",
        dataPoints: [
          { x: 1, y: 4 },
          { x: 2, y: 1 },
          { x: 3, y: 4 },
          { x: 4, y: 2 },
          { x: 5, y: 4 },
          { x: 6, y: 10 },
          { x: 7, y: 8 },
          { x: 8, y: 9 },
          { x: 9, y: 3 },
          { x: 10, y: 4 },
          { x: 11, y: 1 },
          { x: 12, y: 7 },
          { x: 13, y: 5 },
          { x: 14, y: 4 },
          { x: 15, y: 6 },
          { x: 16, y: 8 },
          { x: 17, y: 10 },
          { x: 18, y: 3 },
          { x: 19, y: 8 },
          { x: 20, y: 4 },
          { x: 21, y: 9 },

        ]
      }]
    };

    return (
      <div className="chart-container">
        <CanvasJSChart options={options} />
      </div>

    );
  }
}

export default App;
