import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = ({ data }) => {
    const labels = data.map(entry => entry.date);

    const chart_data = {
        labels,
        datasets: [
            {
                label: 'sleep-stats',
                data: data.map(entry => entry.sleep),
                backgroundColor: 'rgba(187, 9, 132, 0.5)',
            },
            {
                label: 'meal-stats',
                data: data.map(entry => entry.meals),
                backgroundColor: 'rgba(81, 89, 132, 0.5)',
            },
            {
                label: 'screen-stats',
                data: data.map(entry => entry.screentime),
                backgroundColor: 'rgba(25, 88, 102, 0.5)',
            },
            {
                label: 'downtime-stats',
                data: data.map(entry => entry.downtime),
                backgroundColor: 'rgba(125, 99, 132, 0.5)',
            },
            {
                label: 'mood-stats',
                data: data.map(entry => entry.mood),
                backgroundColor: 'rgba(180, 79, 112, 0.5)',
            },
            {
                label: 'hydration-stats',
                data: data.map(entry => entry.hydration),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: '.self-summary' }
        }
    }

    return (
        <>
            
                <Bar options={options} chart_data={chart_data} />
        
        </>
    )

};

export default BarChart;

