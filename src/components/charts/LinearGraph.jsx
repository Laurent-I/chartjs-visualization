import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for the Line chart
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const LinearGraph = () => {
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Africa',
      data: [50000, 55000, 52000, 58000, 60000, 59000], // Fluctuating data
      borderColor: 'rgba(255, 99, 132, 0.5)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
    },
    {
      label: 'Asia',
      data: [60000, 62000, 61000, 65000, 63000, 67000], // Fluctuating data
      borderColor: 'rgba(54, 162, 235, 0.5)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
    },
    {
      label: 'Europe',
      data: [70000, 68000, 71000, 70000, 72000, 74000], // Fluctuating data
      borderColor: 'rgba(255, 206, 86, 0.5)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      fill: true,
    },
    {
      label: 'North America',
      data: [80000, 79000, 81000, 83000, 82000, 85000], // Fluctuating data
      borderColor: 'rgba(75, 192, 192, 0.5)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
    {
      label: 'Oceania',
      data: [40000, 42000, 41000, 43000, 44000, 45000], // Fluctuating data
      borderColor: 'rgba(153, 102, 255, 0.5)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      fill: true,
    },
    {
      label: 'South America',
      data: [50000, 52000, 51000, 53000, 54000, 55000], // Fluctuating data
      borderColor: 'rgba(255, 159, 64, 0.5)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      fill: true,
    },
  ],
};
  const options = {
    scales: {
      x: {
        type: 'category',
        title:{
            display:true,
            text:'Months',
            font: {
                size: 12
                }
        }
      },
      y: {
        beginAtZero: true,
        title: {
            display: true,
            text: 'Population', // Y-axis label
            font: {
              size: 12,
            },
          },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Monthly Growth',
        font: {
          size: 14,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};