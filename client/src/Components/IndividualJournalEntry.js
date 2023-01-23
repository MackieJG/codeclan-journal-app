import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEntry } from "./JournalService";


const IndividualJournalEntry = ({handleUpdate, handleDelete}) => {
    console.log(IndividualJournalEntry)

    const {id} = useParams();
    const [entry, setEntry] = useState({});

    useEffect(() => {
        getEntry(id).then(data => setEntry(data));
    }, [id]);

    return (
        <>
        <p>Journal Entry Date: {entry.date}</p>
        <p>How many hours sleep did you get? {entry.sleep}</p>
        <p>How many meals did you have today? {entry.meals}</p>
        <p>How many hours screentime did you have today? {entry.screentime}</p>
        <p>How many hours family time did you have today? {entry.family}</p>
        <p>How was your mood today? {entry.mood}</p>
        <p>How optimism did you feel today? {entry.optimism}</p>
        <p>How many glasses of water did you have today? {entry.hydration}</p>
        <p>How did you feel today in general? {entry.how_1}</p>
        <p>What was your favorite part of today? {entry.what_1}</p>
        <p>What was the best thing about CodeClan today and Why? {entry.what_2}</p>
        <p>What was the hardest part about CodeClan today and Why? {entry.what_3}</p>
        <p>How did you find today’s lessons? {entry.how_2}</p>
        <p>What could CodeClan do better? {entry.what_4}</p>
        <p>What could you do better? {entry.what_5}</p>
        <p>What are you most proud of today and Why? {entry.what_6}</p>
        <button onClick={handleUpdate}>Edit</button>
        <button onClick={handleDelete}>🗑 </button>
        </>
    );
};

export default IndividualJournalEntry;