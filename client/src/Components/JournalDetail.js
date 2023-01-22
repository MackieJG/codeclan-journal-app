import { deleteEntry, putEntry } from './JournalService';

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

    return (
        <>
            <p>Journal Entry Date: {entry.date}</p>
            {/* <p>Checked in? {entry.checked_in ? 'true' : 'false'}</p> */}
            {/* <button onClick={() => handleUpdate()}>Check {entry.checked_in ? 'Out' : 'In'}</button> */}
            <button onClick={()=> handleUpdate()}></button>
            <button onClick={() => handleDelete()}> 🗑 </button>
            <hr />
        </>
    )
};

export default JournalDetail;