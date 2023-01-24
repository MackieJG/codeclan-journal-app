// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const LineChart = () => {
//     const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: 'sleep-stats',
//                 data: [2, 3, 5, 4, , 2, 3],
//                 borderColor: 'rgb(187, 9, 132)',
//                 backgroundColor: 'rgba(187, 9, 132, 0.5)',
//                 pointRadius: 5,
//                 pointHoverRadius: 8,
//                 fill: false
//             },
//             {
//                 label: 'meal-stats',
//                 data: [1, 3, 5, 4, 5, 4, 5],
//                 borderColor: 'rgb(81, 89, 132)',
//                 backgroundColor: 'rgba(81, 89, 132, 0.5)',
//                 pointRadius: 5,
//                 pointHoverRadius: 8,
//                 fill: false
//             },
//             {
//                 label: 'screen-stats',
//                 data: [1, 5, 1, 3, 1, 4, 2],
//                 borderColor: 'rgb(25, 88, 102)',
//                 backgroundColor: 'rgba(25, 88, 102, 0.5)',
//                 pointRadius: 5,
//                 pointHoverRadius: 8,
//                 fill: false
//             },
//             {
//                 label: 'downtime-stats',
//                 data: [2, 2, 1, 2, 5, 2, 4],
//                 borderColor: 'rgb(125, 99, 132)',
//                 backgroundColor: 'rgba(125, 99, 132, 0.5)',
//                 pointRadius: 5,
//                 pointHoverRadius: 8,
//                 fill: false
//             },
//             {
//                 label: 'mood-stats',
//                 data: [3, 5, 3, 4, 5, 3, 4],
//                 borderColor: 'rgb(180, 79, 112)',
//                 backgroundColor: 'rgba(180, 79, 112, 0.5)',
//                 pointRadius: 5,
//                 pointHoverRadius: 8,
//                 fill: false
//             },
//             {
//                 label: 'hydration-stats',
//                 data: [2, 2, 2, 1, 2, 4, 5],
//                 borderColor: 'rgb(180, 79, 112)',
//                 backgroundColor: 'rgba(180, 79, 112, 0.5)',
//                 pointRadius: 5,
//                 pointHoverRadius: 8,
//                 fill: false
//             }]
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: { position: 'top' },
//             title: { display: true, text: '.self-summary' }
//         }
//     }

//     return (
//         <Line options= { options } data = { data } />
//         )
//     };

// export default LineChart;
