import { deleteEntry } from './JournalService';
import { Link } from 'react-router-dom';

const JournalDetail = ({ entry, removeEntry, updateEntry }) => {

    const handleDelete = () => {
        deleteEntry(entry._id)
            .then(() => {
                removeEntry(entry._id)
            })
    };

    return (
        <>
            <li>
                <p>Date {entry.date}</p>
                <br></br>
                <Link type="submit" value="view-entry" to={"/entry/" + entry._id}>View Entry </Link>
                <br></br>
                <div className="journal_entry_button">
                    <button onClick={() => handleDelete()}> 🗑 </button>
                </div>

            </li>

        </>
    )
};

export default JournalDetail;