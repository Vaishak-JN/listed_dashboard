import colors from "../global/COLORS"
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const PieChartCard = () => {
    const [pieData, setPieData] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        try {
            setLoading(true)
            const res = await fetch("https://61a8d90a33e9df0017ea3ba9.mockapi.io/products")
            const result = await res.json()
            setPieData(result)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false
            },
            title: {
                display: false,
                text: '',
            },
        },
    };

    useEffect(() => {
        getData()

    }, [])

    const label = pieData.map(data => data.product)
    console.log(pieData)
    // console.log(label)

    const data = {
        labels: label,
        datasets: [
            {
                data: pieData.map(data => data.share),
                backgroundColor: colors.map(color => color),
                borderColor: colors.map(color => color),
                borderWidth: 1,
            },
        ],
    };


    const content = pieData.map((data, i) =>
        <div className="pie-chart-labels" key={data.product + i}>
            <span className="product-label" style={{ backgroundColor: colors[i] }}></span>
            <p>
                <span className="product-name">{data.product}</span>
                <br />
                <span className="product-share">{data.share} %</span>


            </p>

        </div>
    )
    return (
        <div className="pie-chart-card">
            <div>
                <h3>Top Products</h3>
                <select>
                    <option>May - June 2021 </option>
                </select>
            </div>
            <div className="pie-chart">
                <div>
                    <Pie data={data} options={options} />
                </div>
                <div className="label-content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default PieChartCard