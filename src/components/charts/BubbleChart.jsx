import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart, PointElement, Tooltip, Legend, LinearScale, Title } from 'chart.js';

// Register the necessary components for the Bubble chart
Chart.register(PointElement, Tooltip, Legend, LinearScale, Title);

export const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: 'Africa',
        data: [{ x: 10000000, y: 1200000, r: 15 }],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Asia',
        data: [{ x: 30000000, y: 3000000, r: 20 }],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      // Add more datasets for other continents
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        title:{
            display:true,
            text:'Tests',
        }
      },
      y: {
        type: 'linear',
        beginAtZero: true,
        title:{
            display:true,
            text:'Tests',
        }
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Tests vs. Cases', // Title for the Bubble chart
        font: {
          size: 24,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  return <Bubble data={data} options={options} />;
};