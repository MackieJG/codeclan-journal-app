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
            <p>Journal Entry Date: {entry.date}</p>
            <button onClick={() => handleDelete()}> 🗑 </button>
            <Link to={"/entry/" + entry._id}>View Entry </Link>
            <hr />
        </>
    )
};

export default JournalDetail;