import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      // Destroy existing chart instance before creating a new one
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        scales: {
          x: { type: 'category', title: { display: true, text: 'Categories' } },
          y: { type: 'linear', title: { display: true, text: 'Values' } },
        },
      },
    });

    // Cleanup to avoid memory leaks
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
