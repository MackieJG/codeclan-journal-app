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
            {/* <div className="doing_logo">
                <img id="doing-logo" src={doing_logo} alt="" />
            </div> */}

            <li>
                <p>Date {entry.date}</p>

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