import JournalDetail from "./JournalDetail";
import BarChart from "./BarChart";

const JournalList = ({ journalEntries, removeEntry, updateEntry }) => {
    if (!journalEntries) return <h2>Loading...</h2>
    const journalList = journalEntries.map((entry) => {
        return (
            <JournalDetail entry={entry} removeEntry={removeEntry} key={entry._id} updateEntry={updateEntry} />
        )
    });
    return (
        <>
            {journalList}
            <div style={{ position: "relative", margin: "auto", height: "40vh" }}>
            <BarChart />
            </div>
        </>
    )
}

export default JournalList;