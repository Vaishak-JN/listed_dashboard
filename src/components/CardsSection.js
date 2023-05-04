import revenues from "../assets/total-revenue.png"
import transactions from "../assets/total-transaction.png"
import likes from "../assets/total-likes.png"
import users from "../assets/total-users.png"
import CountCard from "./CountCard"

const colors = ["#DDEFE0", "#F4ECDD", "#EFDADA", "#DEE0EF"]

const Cards = [
    {
        title: "Total Revenues",
        amount: 2129430,
        icon: revenues,
        isCurrency: true
    },
    {
        title: "Total Transactions",
        amount: 1520,
        icon: transactions,
        isCurrency: false
    },
    {
        title: "Total Likes",
        amount: 9721,
        icon: likes,
        isCurrency: false
    },
    {
        title: "Total users",
        amount: 892,
        icon: users,
        isCurrency: false
    },
]

const CardsSection = () => {


    return (
        <div className="cards-section">
            {Cards.map((card, i) => <CountCard key={card.title + i} card={card} color={colors[i]} />)}
        </div>
    )
}

export default CardsSection