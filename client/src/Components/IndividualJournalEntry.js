import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEntry, putEntry } from "./JournalService";


const IndividualJournalEntry = () => {
    console.log(IndividualJournalEntry)

    const { id } = useParams();
    const [entry, setEntry] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getEntry(id).then(data => setEntry(data));
    }, [id]);


    const onChange = (e) => {
        const newEntry = { ...entry };
        newEntry[e.target.name] = e.target.value;
        setEntry(newEntry);
    }


    const onSubmit = (e) => {
        e.preventDefault();
        const id = entry._id;
        delete entry._id;

        putEntry(entry, id)
            .then(() => {
                navigate('/list')
            })
    }



    return (
        <form onSubmit={onSubmit} id="journal-form" >
            <h2>Add an Entry</h2>
            <div className="formWrap">
                <label htmlFor="date">Date:</label>
                <input
                    onChange={onChange}
                    type="date"
                    id="date"
                    name="date"
                    value={entry.date}
                    required />
            </div>
            <div className="formWrap">
                <label htmlFor="sleep">I got a good night's sleep</label>
                <select
                    onChange={onChange}
                    id="sleep"
                    name="sleep"
                    value={entry.sleep}
                    required >
                    <option value="1">Strongly Agree</option>
                    <option value="2">Agree somewhat</option>
                    <option value="3">Not fussed</option>
                    <option value="4">Disagree somewhat</option>
                    <option value="5">Strongly Disagree</option>
                </select>
            </div>
            <div className="formWrap">
                <label htmlFor="meals"> I had a healthy breakfast, lunch and dinner</label>
                <select
                    onChange={onChange}
                    id="meals"
                    name="meals"
                    value={entry.meals}
                    required >
                    <option value="1">Strongly Agree</option>
                    <option value="2">Agree somewhat</option>
                    <option value="3">Not fussed</option>
                    <option value="4">Disagree somewhat</option>
                    <option value="5">Strongly Disagree</option>
                </select>
            </div>
            <div className="formWrap">
                <label htmlFor="screentime">My screentime was reasonable</label>
                <select
                    onChange={onChange}
                    id="screentime"
                    name="screentime"
                    value={entry.screentime}
                    required >
                    <option value="1">Strongly Agree</option>
                    <option value="2">Agree somewhat</option>
                    <option value="3">Not fussed</option>
                    <option value="4">Disagree somewhat</option>
                    <option value="5">Strongly Disagree</option>
                </select>
            </div>
            <div className="formWrap">
                <label htmlFor="downtime">I had a good amount of downtime</label>
                <select
                    onChange={onChange}
                    id="downtime"
                    name="downtime"
                    value={entry.downtime}
                    required >
                    <option value="1">Strongly Agree</option>
                    <option value="2">Agree somewhat</option>
                    <option value="3">Not fussed</option>
                    <option value="4">Disagree somewhat</option>
                    <option value="5">Strongly Disagree</option>
                </select>
            </div>
            <div className="formWrap">
                <label htmlFor="mood">I felt good today</label>
                <select
                    onChange={onChange}
                    id="mood"
                    name="mood"
                    value={entry.mood}
                    required >
                    <option value="1">Strongly Agree</option>
                    <option value="2">Agree somewhat</option>
                    <option value="3">Not fussed</option>
                    <option value="4">Disagree somewhat</option>
                    <option value="5">Strongly Disagree</option>
                </select>
            </div>
            <div className="formWrap">
                <div className="formWrap">
                    <label htmlFor="hydration">I was able to hydrate well today</label>
                    <select
                        onChange={onChange}
                        id="hydration"
                        name="hydration"
                        value={entry.hydration}
                        required >
                        <option value="1">Strongly Agree</option>
                        <option value="2">Agree somewhat</option>
                        <option value="3">Not fussed</option>
                        <option value="4">Disagree somewhat</option>
                        <option value="5">Strongly Disagree</option>
                    </select>
                </div>
            </div>
            <div className="formWrap">
                <label htmlFor="how_1">How did you feel today in general?</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="how_1"
                    name="how_1"
                    value={entry.how_1}
                    required />
            </div>
            <div className="formWrap">
                <label htmlFor="what_1">What was your favorite part of today?</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="what_1"
                    name="what_1"
                    value={entry.what_1} />
            </div>
            <div className="formWrap">
                <label htmlFor="what_2">What was the best thing about CodeClan today and Why?</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="what_2"
                    name="what_2"
                    value={entry.what_2} />
            </div>
            <div className="formWrap">
                <label htmlFor="what_3">What was the hardest part about CodeClan today and Why?</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="what_3"
                    name="what_3"
                    value={entry.what_3} />
            </div>
            <div className="formWrap">
                <label htmlFor="how_2">How did you find today’s lessons?</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="how_2"
                    name="how_2"
                    value={entry.how_2} />
            </div>
            <div className="formWrap">
                <label htmlFor="what_4">What could CodeClan do better?</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="what_4"
                    name="what_4"
                    value={entry.what_4} />
            </div>
            <div className="formWrap">
                <label htmlFor="what_5">What could you do better?</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="what_5"
                    name="what_5"
                    value={entry.what_5} />
            </div>
            <div className="formWrap">
                <label htmlFor="what_6">What are you most proud of today and Why?</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="what_6"
                    name="what_6"
                    value={entry.what_6} />
            </div>
            <input type="submit" value="Save" id="save" />
        </form>
    )



};
export default IndividualJournalEntry;