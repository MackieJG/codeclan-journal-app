import React from 'react'
import logo from '../images/make_an_entry.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postEntry } from './JournalService';
import './JournalForm.css';
import { LogoImage } from './StyledLogo';


const JournalForm = ({ addEntry }) => {

  const [formData, setFormData] = useState({
    date: "",
    sleep: 0,
    meals: 0,
    screentime: 0,
    downtime: 0,
    mood: 0,
    optimism: 0,
    hydration: 0,
    how_1: "",
    what_1: "",
    what_2: "",
    what_3: "",
    how_2: "",
    what_4: "",
    what_5: "",
    what_6: "",
  })

  const onChange = (e) => {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  }
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    postEntry(formData).then((data) => {
      addEntry(data)
      navigate('/list')
    })
  };



  return (
    <div class="outer-form-container">
      <LogoImage imagePath={logo} />

      <div className="formContainer">
        <form onSubmit={onSubmit} id="journal-form" >
          <div className="formWrap">
            <label htmlFor="date">Select a date</label>
            <input className="datebox"
              onChange={onChange}
              type="date"
              id="date"
              name="date"
              value={formData.date}
              required />
          </div>

          <div className="formWrap">
            <label htmlFor="sleep">I got a good night's sleep</label>
            <select class="options"
              onChange={onChange}
              id="sleep"
              name="sleep"
              value={formData.sleep}
              required >
              <option value="1">Strongly Agree</option>
              <option value="2">Agree somewhat</option>
              <option value="3">Neutral</option>
              <option value="4">Disagree somewhat</option>
              <option value="5">Strongly Disagree</option>
            </select>
          </div>
          <div className="formWrap">
            <label htmlFor="meals"> I had a healthy breakfast, lunch and dinner</label>
            <select class="options"
              onChange={onChange}
              id="meals"
              name="meals"
              value={formData.meals}
              required >
              <option value="1">Strongly Agree</option>
              <option value="2">Agree somewhat</option>
              <option value="3">Not fussed</option>
              <option value="4">Disagree somewhat</option>
              <option value="5">Strongly Disagree</option>
            </select>
          </div>
          <div className="formWrap">
            <label htmlFor="screentime">My screentime was reasonable </label>
            <select class="options"
              onChange={onChange}
              id="screentime"
              name="screentime"
              value={formData.screentime}
              required >
              <option value="1">Strongly Agree</option>
              <option value="2">Agree somewhat</option>
              <option value="3">Not fussed</option>
              <option value="4">Disagree somewhat</option>
              <option value="5">Strongly Disagree</option>
            </select>
          </div>
          <div className="formWrap">
            <label htmlFor="downtime">I had a good amount of downtime </label>
            <select class="options"
              onChange={onChange}
              id="downtime"
              name="downtime"
              value={formData.downtime}
              required >
              <option value="1">Strongly Agree</option>
              <option value="2">Agree somewhat</option>
              <option value="3">Not fussed</option>
              <option value="4">Disagree somewhat</option>
              <option value="5">Strongly Disagree</option>
            </select>
          </div>
          <div className="formWrap">
            <label htmlFor="mood">I felt good today </label>
            <select class="options"
              onChange={onChange}
              id="mood"
              name="mood"
              value={formData.mood}
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
              <label htmlFor="hydration">I was able to hydrate well today </label>
              <select class="options"
                onChange={onChange}
                id="sleep"
                name="sleep"
                value={formData.hydration}
                required >
                <option value="1">Strongly Agree</option>
                <option value="2">Agree somewhat</option>
                <option value="3">Not fussed</option>
                <option value="4">Disagree somewhat</option>
                <option value="5">Strongly Disagree</option>
              </select>
            </div>
          </div>
          <br>
          </br>
          <div className="journalWrap">
            <label htmlFor="how_1">How did you feel today in general?</label>
            <textarea
              onChange={onChange}
              type="text"
              id="how_1"
              name="how_1"
              value={formData.how_1}
              required />
          </div>
          <div className="journalWrap">
            <label htmlFor="what_1">What was your favorite part of today?</label>
            <textarea
              onChange={onChange}
              type="text"
              id="what_1"
              name="what_1"
              value={formData.what_1} />
          </div>
          <div className="journalWrap">
            <label htmlFor="what_2">What was the best thing about CodeClan today and why?</label>
            <textarea
              onChange={onChange}
              type="text"
              id="what_2"
              name="what_2"
              value={formData.what_2} />
          </div>
          <div className="journalWrap">
            <label htmlFor="what_3">What was the hardest part about CodeClan today and why?</label>
            <textarea
              onChange={onChange}
              type="text"
              id="what_3"
              name="what_3"
              value={formData.what_3} />
          </div>
          <div className="journalWrap">
            <label htmlFor="how_2">How did you find today’s lessons?</label>
            <textarea
              onChange={onChange}
              type="text"
              id="how_2"
              name="how_2"
              value={formData.how_2} />
          </div>
          <div className="journalWrap">
            <label htmlFor="what_4">What could CodeClan do better?</label>
            <textarea
              onChange={onChange}
              type="text"
              id="what_4"
              name="what_4"
              value={formData.what_4} />
          </div>
          <div className="journalWrap">
            <label htmlFor="what_5">What could you do better?</label>
            <textarea
              onChange={onChange}
              type="text"
              id="what_5"
              name="what_5"
              value={formData.what_5} />
          </div>
          <div className="journalWrap">
            <label htmlFor="what_6">What are you most proud of today and why?</label>
            <textarea
              onChange={onChange}
              type="text"
              id="what_6"
              name="what_6"
              value={formData.what_6} />
          </div>
          <br>
          </br>
          <input className="save-button" type="submit" value="Save" id="save" />
        </form>
      </div>
    </div>

  )
};

export default JournalForm;