import JournalDetail from "./JournalDetail";
import './JournalList.css';
import BarChart from "./BarChart";
import logo from "../images/doing.png";

const JournalList = ({ journalEntries, removeEntry, updateEntry, chartData }) => {
    if (journalEntries.length === 0) return <h2>Loading...</h2>
    console.log(journalEntries);
    const journalList = journalEntries.map((entry) => {
        return (
            <JournalDetail entry={entry} removeEntry={removeEntry} key={entry._id} updateEntry={updateEntry} />
        )
    });


    return (
        <>
            <img className="doing-image" id="self-logo" src={logo} alt="" />
            <div className="journal_list">
                <ul className="no_marker">
                    {journalList}
                </ul>
                <BarChart data={journalEntries}/>
            </div>
        </>
    )
}

export default JournalList;