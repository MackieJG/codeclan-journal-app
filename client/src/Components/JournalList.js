import JournalDetail from "./JournalDetail";

const JournalList = ({ journalEntries, removeEntry, updateEntry }) => {
    if (!journalEntries) return <h2>Loading...</h2>
    const journalList = journalEntries.map((entry) => {
        return (
            <JournalDetail entry={entry} removeEntry={removeEntry} key={entry._id} updateEntry={updateEntry} />
        )
    });
    return (
        <>
        <div className="journal_list">
            <ul>
            {journalList}
            </ul>
        </div>
        </>
    )
}

export default JournalList;