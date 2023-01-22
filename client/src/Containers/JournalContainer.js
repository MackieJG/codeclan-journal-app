import React from 'react'
import { useState, useEffect } from "react";
import JournalForm from '../Components/JournalForm'
import JournalList from '../Components/JournalList'
import { getEntries } from '../Components/JournalService'


const JournalContainer = () => {

    const [journalEntries, setJournalEntries] = useState([]);

    useEffect(() => {
        getEntries().then((allJournalEntries) => {
            setJournalEntries(allJournalEntries);
        })

    }, []);

    const addEntry = (journalEntry) => {
        const newEntries = [...journalEntries, journalEntry]
        setJournalEntries(newEntries)
    };

    const removeEntry = (id) => {
        const newEntries = [...journalEntries]
        const indexToDel = newEntries.map(entry => entry._id).indexOf(id)
        newEntries.splice(indexToDel, 1)
        setJournalEntries(newEntries)
    };

    const updateEntry = (journalEntry) => {
        const newEntries = [...journalEntries]
        const indexToUpdate = newEntries.map(entry => entry._id).indexOf(journalEntry.id)
        newEntries[indexToUpdate] = journalEntry
        setJournalEntries(newEntries)
    };



    return (
        <div class="journal-container">
            <JournalForm addEntry={addEntry} />
            <JournalList journalEntries={journalEntries} removeEntry={removeEntry} updateEntry={updateEntry} />
        </div>
    )
}

export default JournalContainer;