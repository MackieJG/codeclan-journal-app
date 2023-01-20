import React from 'react'
import JournalEntry from '../Components/JournalEntry'
import JournalList from '../Components/JournalList'

const JournalContainer = () => {

    const [journalntries, setJournalEntries] = useState([]);

    useEffect(() => {
        getBookings().then((allBookings) => {
            setBookings(allBookings);
        })

    }, [])
    return (
        <div>JournalContainer</div>
    )
}

export default JournalContainer