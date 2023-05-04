import { useEffect, useState, useCallback } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import colors from '../global/COLORS';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);



const LineChart = () => {

    const [lineData, setLineData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getData = useCallback(async () => {
        try {
            setLoading(true)
            const res = await fetch("https://61a8d90a33e9df0017ea3ba9.mockapi.io/data")
            const result = await res.json()
            setLineData(result)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setError(true)
        }
    }, [])



    useEffect(() => {
        getData()

    }, [])

    const options = {
        responsive: true,
        cubicInterpolationMode: "monotone",
        // aspectRatio: 1,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                // display: true,

            },
        },
        scales: {
            y: {
                type: 'linear',
                font: {
                    size: 14
                }
                // beginAtZero: true,
                // labels: {
                //     // This more specific font property overrides the global property
                //     font: {
                //         size: 14
                //     }
                // }

            },
            x: {
                // type: 'linear',
                beginAtZero: true,
                font: {
                    size: 14
                }
                // labels: {
                //     // This more specific font property overrides the global property
                //     font: {
                //         size: 14
                //     }
                // }

            },
        },

    };



    const dataset = lineData?.length && lineData.map((data, i) => {
        return {
            label: data.role,
            data: data.data.map((d, i) => {
                console.log(d)
                return {
                    x: d.week,
                    y: d.value,
                }
            }),
            borderColor: colors[i],
            backgroundColor: colors[i],
        }
    })


    const data = {
        // labels: labels,
        datasets: dataset

    };

    // console.log(lineData)
    return (
        <div className="chart">
            <div className='chart-header'>
                <div>
                    <h3>Activities</h3>
                    <select>
                        <option>May - June 2021 </option>
                    </select>
                </div>
                <div className="data-label">
                    {lineData?.length && lineData.map((data, i) =>
                        <div key={data.role}>
                            <span className="role-label" style={{ backgroundColor: colors[i] }}></span>
                            <span>{data.role}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="line-chart">

                {lineData?.length && <Line options={options} data={data} />}
            </div>
        </div>

    );
}


export default LineChart