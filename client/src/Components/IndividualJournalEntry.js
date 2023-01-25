import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEntry, putEntry } from "./JournalService";
import './IndividualJournalEntry.css';
import DiaryDisplay from "./DiaryDisplay";
import { LogoImage } from "./StyledLogo";
import logo from "../images/edit_an_entry.png";



const IndividualJournalEntry = () => {
    const sleepTips = "Be consistent with sleep times, including on the weekends. \
                Avoid large meals, caffeine, and alcohol before bedtime"
    const sleepTip2 = "Keep making sleep a top priority!"
    const sleepTip3 = "Try focusing on the quality of your sleep, such as not looking at any electronic devices for an hour before bed"

    const mealsTips = "Try less processes foods and with less sugar"
    const mealsTips2 = "Aim for a balanced diet that includes a variety of nutrient- foods from all food groups, \
                        such as fruits, vegetables, whole grains, lean protein and healthy fats."
    const mealsTips3 = "Keep up the healthy diet"

    const screentimeTips = "Take regular breaks - pomodoro technique is a good style for working.\
                            Keep your phone out of reach when you’re not using it"
    const screentimeTips2 = "Set specific times of the day to check your phone and stick to them."
    const screentimeTips3 = "Keep making time away from your screen a daily goal"

    const downtimeTips = "Make a schedule for your downtime, this will make the most of your free time."
    const downtimeTips2 = "Disconnect from technology and social media. This can help to reduce stress and increase relaxation. "
    const downtimeTips3 = "Downtime is essential to well-being so keep making sure its a priority."

    const moodTips = "Take a long break today to care of yourself, do something you enjoy.."
    const moodTips2 = "Try a short break with no distractions such as meditation to allow yourself to recentre."
    const moodTips3 = "Keep taking care of yourself."

    const hydrationTips = "Drinking water regularly throughout the day with the aim to drink 8 cups a day."
    const hydrationTips2 = "Using a water bottle with measurements to help track your intake."
    const hydrationTips3 = "Keep drinking water!"


    const { id } = useParams();
    const [entry, setEntry] = useState({});
    const [sleepTip, setSleepTip] = useState('');
    const [mealsTip, setMealsTip] = useState('');
    const [screentimeTip, setScreentimeTip] = useState('');
    const [downtimeTip, setDowntimeTip] = useState('');
    const [moodTip, setMoodTip] = useState('');
    const [hydrationTip, setHydrationTip] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getEntry(id).then(data => setEntry(data));
    }, [id]);



    const onChange = (e) => {
        const newEntry = { ...entry };
        newEntry[e.target.name] = e.target.value;
        setEntry(newEntry);
    }


    useEffect(() => {
        const value = parseInt(entry.sleep);

        if (value > 3) {
            setSleepTip(sleepTips);
        } else if (value === 3) {
            setSleepTip(sleepTip3);
        } else {
            setSleepTip(sleepTip2);
        }
    }, [entry.sleep])

    useEffect(() => {
        const value = parseInt(entry.meals);

        if (value > 3) {
            setMealsTip(mealsTips2);
        } else if (value === 3) {
            setMealsTip(mealsTips);
        } else {
            setMealsTip(mealsTips3);
        }
    }, [entry.meals])

    useEffect(() => {
        const value = parseInt(entry.screentime);

        if (value > 3) {
            setScreentimeTip(screentimeTips);
        } else if (value === 3) {
            setScreentimeTip(screentimeTips2);
        } else {
            setScreentimeTip(screentimeTips3);
        }
    }, [entry.screentime])

    useEffect(() => {
        const value = parseInt(entry.downtime);

        if (value > 3) {
            setDowntimeTip(downtimeTips);
        } else if (value === 3) {
            setDowntimeTip(downtimeTips2);
        } else {
            setDowntimeTip(downtimeTips3);
        }
    }, [entry.downtime])

    useEffect(() => {
        const value = parseInt(entry.mood);

        if (value > 3) {
            setMoodTip(moodTips);
        } else if (value === 3) {
            setMoodTip(moodTips2);
        } else {
            setMoodTip(moodTips3);
        }
    }, [entry.mood])

    useEffect(() => {
        const value = parseInt(entry.hydration);

        if (value > 3) {
            setHydrationTip(hydrationTips);
        } else if (value === 3) {
            setHydrationTip(hydrationTips2);
        } else {
            setHydrationTip(hydrationTips3);
        }
    }, [entry.hydration])

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
        <>
        <LogoImage imagePath={logo} />
            <div className="diary">
                <DiaryDisplay entry={entry} />
    
            </div>

         



            <a id="edit"> </a>
            <form onSubmit={onSubmit} class="journal-form-indi" >
                <div className="formWrap-2">
                    <label class="date" htmlFor="date">Date:</label>
                    <input class="calendar"
                        onChange={onChange}
                        type="date"
                        id="date"
                        name="date"
                        value={entry.date}
                        required />
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="sleep">I got a good night's sleep</label>
                    <select class="sleep"
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
                    <h3 class="tip-header">Your daily tip:</h3>
                    <p class="tip"> {sleepTip}</p>
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="meals"> I had healthy meals today</label>
                    <select class="meals"
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
                    <h3 class="tip-header">Your daily tip:</h3>
                    <p class="tip"> {mealsTip}</p>
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="screentime">My screentime was reasonable</label>
                    <select class="screentime"
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
                    <h3 class="tip-header">Your daily tip:</h3>
                    <p class="tip"> {screentimeTip}</p>
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="downtime">I had a good amount of downtime</label>
                    <select class="downtime"
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
                    <h3 class="tip-header">Your daily tip:</h3>
                    <p class="tip"> {downtimeTip}</p>
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="mood">I felt that my mood was good today</label>
                    <select class="mood"
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
                    <h3 class="tip-header">Your daily tip:</h3>
                    <p class="tip"> {moodTip}</p>
                </div>

                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="hydration">I was able to hydrate well today</label>
                    <select class="hydration"
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
                    <h3 class="tip-header">Your daily tip:</h3>
                    <p class="tip"> {hydrationTip}</p>
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="how_1">How did you feel today in general?</label>
                    <textarea class="select"
                        onChange={onChange}
                        type="text"
                        id="how_1"
                        name="how_1"
                        value={entry.how_1}
                        required />
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="what_1">Your favorite part of today?</label>
                    <textarea class="select"
                        onChange={onChange}
                        type="text"
                        id="what_1"
                        name="what_1"
                        value={entry.what_1} />
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="what_2">What was the best thing about CodeClan today and Why?</label>
                    <textarea class="select"
                        onChange={onChange}
                        type="text"
                        id="what_2"
                        name="what_2"
                        value={entry.what_2} />
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="what_3">What was the hardest part about CodeClan today and Why?</label>
                    <textarea class="select"
                        onChange={onChange}
                        type="text"
                        id="what_3"
                        name="what_3"
                        value={entry.what_3} />
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="how_2">How did you find today’s lessons?</label>
                    <textarea class="select"
                        onChange={onChange}
                        type="text"
                        id="how_2"
                        name="how_2"
                        value={entry.how_2} />
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="what_4">What could CodeClan do better?</label>
                    <textarea class="select"
                        onChange={onChange}
                        type="text"
                        id="what_4"
                        name="what_4"
                        value={entry.what_4} />
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="what_5">What could you do better?</label>
                    <textarea class="select"
                        onChange={onChange}
                        type="text"
                        id="what_5"
                        name="what_5"
                        value={entry.what_5} />
                </div>
                <div className="formWrap-2">
                    <label class="textarea-title" htmlFor="what_6">What are you most proud of today and Why?</label>
                    <br></br>
                    <textarea class="select"
                        onChange={onChange}
                        type="text"
                        id="what_6"
                        name="what_6"
                        value={entry.what_6} />
                </div>
                <br></br>
                <input className="save-button2" type="submit" value="Save" id="save" />
                <br></br>
            </form>

        </>




    )



};
export default IndividualJournalEntry;