import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components used by the Pie chart
Chart.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const data = {
    labels: ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'],
    datasets: [
      {
        data: [700000, 1200000, 800000, 1500000, 50000, 600000],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  const options = {
    plugins:{
        title:{
            display:true,
            text:'Active Cases Distribution',
            font: {
                size: 14
              },
              padding: {
                top: 10,
                bottom: 20
              }
        }
    }
  }

  return <Pie data={data} options={options} />;
};