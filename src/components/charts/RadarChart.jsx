import { Chart, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';
import React from 'react';
import { Radar } from 'react-chartjs-2';

Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

export const RadarChart = () => {
  const data = {
    labels: ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'],
    datasets: [
      {
        label: 'Critical Cases',
        data: [2000, 5000, 3000, 4000, 500, 2500],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options= {
    plugins:{
        title:{
            display:true,
            text:'Critical Cases by Continent',
            font: {
            size: 14
            }
        }
    }
  }

  return <Radar data={data} options={options}/>;
};