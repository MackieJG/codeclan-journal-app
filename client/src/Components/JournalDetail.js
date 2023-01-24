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
        <div className="list_component">          
            <li>
                <p>Date: {entry.date}</p>
              
                <Link to={"/entry/" + entry._id}>View Entry </Link>
                <br></br>
                <div className="journal_entry_button">
                <button onClick={() => handleDelete()}> 🗑 </button>
                </div>
                
                <hr />
            </li>
        </div>
        </>
    )
};

export default JournalDetail;