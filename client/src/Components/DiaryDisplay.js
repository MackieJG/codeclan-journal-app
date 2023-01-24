import RadarChart from "./RadarChart"
import './DiaryDisplay.css'

const DiaryDisplay = ({ entry }) => {


    return (
        <>
            <div className="diary-display">
                <div className="diary-text">
                    <p>{entry.how_1}</p>
                    <p>{entry.what_1}</p>
                    <p>{entry.what_2}</p>
                    <p>{entry.what_3}</p>
                    <p>{entry.how_2}</p>
                    <p>{entry.what_4}</p>
                    <p>{entry.what_5}</p>
                    <p>{entry.what_6}</p>

                </div>
                <div clasName="diary-radar" style={{ position: "relative", margin: "auto", height: "40vh" }}>
                    <RadarChart data={entry} />
                </div>
            </div>
        </>
    )

}


export default DiaryDisplay;