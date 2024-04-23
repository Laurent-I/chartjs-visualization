import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const BarChart = () => {
  const data = {
    labels: ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'],
    datasets: [
      {
        label: 'Cases',
        data: [1200000, 3000000, 2500000, 4000000, 500000, 1500000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Deaths',
        data: [30000, 60000, 50000, 70000, 10000, 20000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Recoveries',
        data: [800000, 2000000, 1800000, 3000000, 300000, 1000000],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: false,
        title: {
          display: true,
          text: 'Continent',
        },
      },
      y: {
        stacked: false,
        title: {
            display: true,
            text: 'Cases, Deaths, and Recoveries',
          },
      },
    },
    plugins:{
        title:{
            display:true,
            text:'Cases, Deaths, and Recoveries',
            font: {
                size: 14
              },
              padding: {
                top: 10,
                bottom: 30
              }
        }
    }
  };

  return <Bar data={data} options={options} />;
};
