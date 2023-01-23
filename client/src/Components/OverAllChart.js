// import { useEffect, useState } from 'react';
// import Chart from 'chart.js';
// import { MongoClient } from 'mongodb';

// const DailyNumberScoreChart = () => {
//     const [dailyNumberScores, setDailyNumberScores] = useState([]);
//     const [chartInstance, setChartInstance] = useState(null);
//     const chartContainer = useRef(null);

//     useEffect(() => {
//         MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
//             .then((client) => {
//                 const db = client.db('codeclan_journal');
//                 const entriesCollection = db.collection('entries');
//                 return entriesCollection.find({}).toArray()
//             })
//             .then(data => {
//                 setDailyNumberScores(data);
//             })
//             .catch(console.error);
//     }, []);

//     useEffect(() => {
//         if (chartInstance) {
//             chartInstance.data.labels = dailyNumberScores.map(item => item.date);
//             chartInstance.data.datasets[0].data = dailyNumberScores.map(item => item.score);
//             chartInstance.update();
//         } else {
//             const newChartInstance = new Chart(chartContainer.current, {
//                 type: 'line',
//                 data: {
//                     labels: dailyNumberScores.map(item => item.date),
//                     datasets: [{
//                         label: 'Daily Number Scores',
//                         data: dailyNumberScores.map(item => item.score),
//                         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                         borderColor: 'rgba(255, 99, 132, 1)',
//                         borderWidth: 1,
//                         pointRadius: 5,
//                         pointHoverRadius: 8,
//                         pointBackgroundColor: 'rgba(255, 99, 132, 1)',
//                         pointBorderColor: 'rgba(255, 255, 255, 0.8)',
//                         pointBorderWidth: 2,
//                         pointHitRadius: 10,
//                         lineTension: 0,
//                         fill: false,
//                         borderDash: [5, 5]
//                     }]
//                 },
//                 options: {
//                     legend: {
//                         display: false
//                     },
//                     scales: {
//                         xAxes: [{
//                             gridLines: {
//                                 display: false
//                             }
//                         }],
//                         yAxes: [{
//                             gridLines: {
//                                 display: false
//                             },
//                             ticks: {
//                                 suggestedMin: 0,
//                                 suggestedMax: 10
//                             }
//                         }]
//                     }
//                 }