import JournalDetail from "./JournalDetail";
import './JournalList.css';
import BarChart from "./BarChart";
import { LogoImage } from "./StyledLogo";
import logo from "../images/edit_an_entry.png";


const JournalList = ({ journalEntries, removeEntry, updateEntry }) => {
    if (journalEntries.length === 0) return <h2>Loading...</h2>
    console.log(journalEntries);
    const journalList = journalEntries.map((entry) => {
        return (
            <JournalDetail entry={entry} removeEntry={removeEntry} key={entry._id} updateEntry={updateEntry} />
        )
    });


    return (
        <>
            <LogoImage imagePath={logo} />

            <div className="journal_list">
                <ul className="no_marker">
                    {journalList}
                </ul>
                <BarChart data={journalEntries} />
            </div>
        </>
    )
}

export default JournalList;