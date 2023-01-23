import { deleteEntry, putEntry } from './JournalService';
import IndividualJournalEntry from './IndividualJournalEntry';
import { Link } from 'react-router-dom';

const JournalDetail = ({ entry, removeEntry, updateEntry }) => {

    const handleUpdate = () => {
        const updatedEntry = { ...entry };
        putEntry(updatedEntry)
            .then((data) => {
                updateEntry(data);
            })
    }

    const handleDelete = () => {
        deleteEntry(entry._id)
            .then(() => {
                removeEntry(entry._id)
            })
    };

    const JournalEntry = ((entry) => {
        return (
            <>
            <IndividualJournalEntry entry={entry} removeEntry={removeEntry} key={entry._id} updateEntry={updateEntry} handleUpdate={handleUpdate} />
            </>
        )
    })

    return (
        <>
            <p>Journal Entry Date: {entry.date}</p>
            <button onClick={() => handleDelete()}> 🗑 </button>
            <Link to={"/entry/" + entry._id}>View Entry </Link>
            <hr />
        </>
    )
};

export default JournalDetail;