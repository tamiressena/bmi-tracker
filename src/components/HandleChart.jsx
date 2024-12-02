import React from 'react'
import Chart from 'react-google-charts';
import { useEffect, useState } from 'react';

const HandleChart = ({data}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const chartWidth = windowWidth < 800 ? '90%' : '650px';

  
    const options = {
      series: [{ color: "#951fee", lineWidth: 3 }],
      chartArea: { width: "80%", height: "70%", backgroundColor: 'none' },
      curveType: "function",
      pointSize: 4,
        hAxis: {textStyle: {
            fontName: 'IBM Plex Mono', 
            fontSize: 12,
            color: '000'
        }},
      vAxis: { title: "BMI", 
        titleTextStyle: {
            fontName: 'IBM Plex Mono', 
            fontSize: 18,
            bold: false,
            italic: false,
          },
        textStyle: {
            fontName: 'IBM Plex Mono', 
            fontSize: 12,
        }, },
      legend: "none",
      backgroundColor: 'transparent',
    };

  return (
    <div>
        <div className="chart">
        <Chart
          loader={<div>Loading Chart</div>}
          chartType="LineChart"
          width={chartWidth} 
          height="400px"
          pointsVisible="true"
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default HandleChart
