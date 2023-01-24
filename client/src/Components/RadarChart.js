import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Radar } from 'react-chartjs-2';

    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Title,
        Tooltip,
        Legend
);



const RadarChart = ({ data }) => {
    const labels =['Sleep', 'Meals', 'Screentime', 'Downtime', 'Mood', 'Hydration'];

    const chartData = [
        data.sleep,
        data.meals,
        data.screentime,
        data.downtime,
        data.mood,
        data.hydration
    ]
;
    const chart_data = {
        labels,
        datasets: [
            {
                label: data.date,
                data: chartData,
                backgroundColor: 'rgba(187, 22, 82, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ]
    }

    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: { position: 'top' },
    //         title: { display: true, text: '.self-summary' }
    //     }
    // }

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 1,
                suggestedMax: 5
            }
        }
    };

    return (
        <>

            <Radar options={options} data={chart_data} />

        </>
    )

};

export default RadarChart;
