import Layout from "../components/Layout"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import { getUsers } from "../store/users/action"


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
const Grapihcs = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.user)

    const [male, setMale] = useState(0)
    const [female, setFemale] = useState(0)

    const getData = () => {
        let countMale = 0
        let countFemale = 0
        users.forEach(el => {
            if (el.gender === 'male') {
                countMale++
            } else if (el.gender === 'female') {
                countFemale++
            }
        })
        setMale(countMale)
        setFemale(countFemale)
    }

    console.log(users)

    useEffect(() => {
        getData()
    }, [users])

    useEffect(() => {
        dispatch(getUsers())
    }, [])
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Graph of gender users',
            },
        },
    }

    const data = {
        labels: ['Male', '  Female'],
        datasets: [
            {
                label: 'Total',
                data: [`${male}`, `${female}`],
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
        ]
    }

    return (
        <>
            <Layout>
                <div className="w-[70vw]">
                    <Bar options={options} data={data} />
                </div>
            </Layout>
        </>
    )
}

export default Grapihcs