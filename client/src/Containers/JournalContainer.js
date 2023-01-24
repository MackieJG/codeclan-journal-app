
import '../App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import JournalForm from '../Components/JournalForm'
import JournalList from '../Components/JournalList'
import { getEntries } from '../Components/JournalService'
import NavBar from '../Components/NavBar'
import IndividualJournalEntry from '../Components/IndividualJournalEntry';



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
            <Router>
                <NavBar />
                <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/entry' element={<JournalForm addEntry={addEntry} />} />
                <Route path='/entry/:id' element={<IndividualJournalEntry />} />
                <Route path='/list' element={<JournalList journalEntries={journalEntries} removeEntry={removeEntry} updateEntry={updateEntry} />} />
                </Routes>
            </Router>
      </div>


        
    )
}

export default JournalContainer;