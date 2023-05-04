import CardsSection from "./CardsSection"
import InfoSection from "./InfoSection"
import LineChart from "./LineChart"
import MainNav from "./MainNav"


const Main = () => {
    return (
        <main className="dash-main">
            <MainNav />
            <CardsSection />
            <LineChart />
            <InfoSection />
        </main>
    )
}

export default Main