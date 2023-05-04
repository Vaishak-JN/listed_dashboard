import colors from "../global/COLORS"



const ScheduleCard = () => {
    return (
        <div className="shedule-card">
            <div className="shedule-header">
                <h3> Today's schedule</h3>
                <span>See all </span>
            </div>
            <div className="shedules">
                <div className="shedule" style={{ borderColor: "#9BDD7C" }}>
                    <h4>Meeting with suppliers from Kuta Bali</h4>
                    <p>14.00-15.00 </p>
                    <p>at Sunset Road, Kuta, Bali</p>
                </div>
                <div className="shedule" style={{ borderColor: "#6972C4" }}>
                    <h4>Check operation at Giga Factory 1</h4>
                    <p>18.00-20.00 </p>
                    <p>18.00-20.00 </p>
                </div>
            </div>
        </div>
    )
}

export default ScheduleCard