import { useEffect, useState } from "react"


const CountCard = ({ card, color }) => {
    const { icon, title, amount, isCurrency } = card

    const [count, setCount] = useState(amount / 100)

    let x = amount / 100

    const counter = () => {
        // for (let i = 0; i <= amount; i++) {
        if (count === amount) return
        if (count > amount) {
            setCount(amount)
            return
        }
        setTimeout(() => {
            setCount(prev => prev + x)
        }, 3)
        // }
    }

    useEffect(() => {
        counter()
    }, [count])

    return (
        <div className="counter-card" style={{ backgroundColor: color }}>
            <img src={icon} alt="icon" />
            <p>{title}</p>
            <h3>{isCurrency && "$"} {count.toLocaleString("en-US")}</h3>
        </div>
    )
}

export default CountCard