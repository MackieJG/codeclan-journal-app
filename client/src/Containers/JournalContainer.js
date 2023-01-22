import React from 'react'
import JournalForm from '../Components/JournalForm'
import JournalList from '../Components/JournalList'

const JournalContainer = () => {

    const [journalEntries, setJournalEntries] = useState([]);

    useEffect(() => {
        getEntries().then((allEntries) => {
            setEntries(allEntries);
        })

    }, []);

    const addEntry = (journalEntry) => {
        newEntries = [...journalEntries, journalEntry]
        setJournalEntries(newEntries)
    };

    const removeEntry = (id) => {
        const newEntries = [...journalEntries]
        const indexToDel = newEntries.map(s => s._id).indexOf(id)
        newEntries.splice(indexToDel, 1)
        setJournalEntries(newEntries)
    };

    const updateEntry = (journalEntry) => {
        const newEntries = [...journalEntries]
        const indexToUpdate = newEntries.map(s => s._id).indexOf(id)
        newEntries[indexToUpdate] = journalEntry
        setJournalEntries(newEntries)
    };



    return (
        <div class="journal-container">
            <JournalForm addEntry={addEntry} />
            <JournalList journalList={JournalList} removeEntry={removeEntry} updateEntry={updateEntry} />
        </div>
    )
}

export default JournalContainer