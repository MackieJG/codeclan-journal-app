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
//     const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: 'daily-total',
//                 borderColour:'rgba(187, 30, 132)',
//                 backgroundColor: 'rgba(187, 9, 132, 0.5)',
//                 data: [20, 23, 25, 9, 18, 17, 22, 20, 23, 25, 9, 18, 17, 22],
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
//         <>
//         <Line options= { options } data = { data } />
//         </>
//         )
//     };

// export default LineChart;



