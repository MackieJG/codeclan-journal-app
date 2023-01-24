// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const BarChart = () => {
//     const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: 'sleep-stats',
//                 data: [2, 3, 5, 4, , 2, 3],
//                 backgroundColor: 'rgba(187, 9, 132, 0.5)',
//             },
//             {
//                 label: 'meal-stats',
//                 data: [1, 3, 5, 4, 5, 4, 5],
//                 backgroundColor: 'rgba(81, 89, 132, 0.5)',
//             },
//             {
//                 label: 'screen-stats',
//                 data: [1, 5, 1, 3, 1, 4, 2],
//                 backgroundColor: 'rgba(25, 88, 102, 0.5)',
//             },
//             {
//                 label: 'downtime-stats',
//                 data: [2, 2, 1, 2, 5, 2, 4],
//                 backgroundColor: 'rgba(125, 99, 132, 0.5)',
//             },
//             {
//                 label: 'mood-stats',
//                 data: [3, 5, 3, 4, 5, 3, 4],
//                 backgroundColor: 'rgba(180, 79, 112, 0.5)',
//             },
//             {
//                 label: 'hydration-stats',
//                 data: [2, 2, 2, 1, 2, 4, 5],
//                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             }
//         ]
//     }

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: { position: 'top' },
//             title: { display: true, text: '.self-summary' }
//         }
//     }

//     return (
//         <>
            
//                 <Bar options={options} data={data} />
        
//         </>
//     )

// };

// export default BarChart;

