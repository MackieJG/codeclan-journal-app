import RadarChart from "./RadarChart"
import './DiaryDisplay.css'

const DiaryDisplay = ({ entry }) => {


    return (
        <>
            <div className="diary-display">
                <div className="diary-text">
                    <h1> .self report</h1>

                    <p className="q">How did you feel today in general?</p>
                    <p className="a">{entry.how_1}</p>

                    <p className="q">Your favorite part of the day?</p>
                    <p className="a">{entry.what_1}</p>

                    <p className="q">What was the best thing about CodeClan today?</p>
                    <p className="a">{entry.what_2}</p>

                    <p className="q">what was the hardest thing about CodeClan today?</p>
                    <p className="a">{entry.what_3}</p>

                    <p className="q">How did you find today's lessons?</p>
                    <p className="a">{entry.how_2}</p>
                    
                    <p className="q">What could codeclan do better?</p>
                    <p className="a">{entry.what_4}</p>
                    
                    <p className="q">What could you do better?</p>
                    <p className="a">{entry.what_5}</p>
                    
                    <p className="q">What are you most proud of, and why?</p>
                    <p className="a">{entry.what_6}</p>
<br></br>
<a href="#edit">(JUMP TO EDIT)</a>
                   


                </div>
                <div className="diary-radar" style={{ position: "relative", height: "30vh"}}>
                    <RadarChart data={entry} />
                </div>
            </div>
        </>
    )

}


export default DiaryDisplay;