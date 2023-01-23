import React from 'react'
import { useState } from 'react';
import { postEntry } from './JournalService';

const JournalForm = ({ addEntry }) => {

  const [formData, setFormData] = useState({
    date: "",
    sleep: 0,
    meals: 0,
    screentime: 0,
    downtime: 0,
    family: 0,
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

  // const onSelect = (e) => {
  //   const newFormData = { ...formData };
  //   newFormData[e.target.name] = e.target.value;
  //   setFormData(newFormData);
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    postEntry(formData).then((data) => {
      addEntry(data);
    })
    setFormData({
      date: "",
      sleep: 0,
      meals: 0,
      screentime: 0,
      downtime: 0,
      family: 0,
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
    });
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
          value={formData.date}
          required />
      </div>
      <div className="formWrap">
        <label htmlFor="sleep">How many hours sleep did you get?</label>
        <select
          onChange={onChange}
          id="sleep"
          name="sleep"
          value={formData.sleep}
          required >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
        </select>
      </div>
      <div className="formWrap">
        <label htmlFor="meals">How many meals did you have today?</label>
        <select
          onChange={onChange}
          id="meals"
          name="meals"
          value={formData.meals}
          required >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div className="formWrap">
        <label htmlFor="screentime">How many hours screentime did you have today?</label>
        <select
          onChange={onChange}
          id="screentime"
          name="screentime"
          value={formData.screentime}
          required >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </select>
      </div>
      <div className="formWrap">
        <label htmlFor="family">How many hours family time did you have today?</label>
        <select
          onChange={onChange}
          id="family"
          name="family"
          value={formData.family}
          required >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div className="formWrap">
        <label htmlFor="mood">How was your mood today?</label>
        <select
          onChange={onChange}
          id="mood"
          name="mood"
          value={formData.mood}
          required >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="formWrap">
        <label htmlFor="optimism">How optimism did you feel today?</label>
        <select
          onChange={onChange}
          id="optimism"
          name="optimism"
          value={formData.optimism}
          required >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="formWrap">
        <label htmlFor="hydration">How many glasses of water did you have today?</label>
        <select
          onChange={onChange}
          id="hydration"
          name="hydration"
          value={formData.hydration}
          required >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="formWrap">
        <label htmlFor="how_1">How did you feel today in general?</label>
        <input
          onChange={onChange}
          type="text"
          id="how_1"
          name="how_1"
          value={formData.how_1}
          required />
      </div>
      <div className="formWrap">
        <label htmlFor="what_1">What was your favorite part of today?</label>
        <input
          onChange={onChange}
          type="text"
          id="what_1"
          name="what_1"
          value={formData.what_1} />
      </div>
      <div className="formWrap">
        <label htmlFor="what_2">What was the best thing about CodeClan today and Why?</label>
        <input
          onChange={onChange}
          type="text"
          id="what_2"
          name="what_2"
          value={formData.what_2} />
      </div>
      <div className="formWrap">
        <label htmlFor="what_3">What was the hardest part about CodeClan today and Why?</label>
        <input
          onChange={onChange}
          type="text"
          id="what_3"
          name="what_3"
          value={formData.what_3} />
      </div>
      <div className="formWrap">
        <label htmlFor="how_2">How did you find today’s lessons?</label>
        <input
          onChange={onChange}
          type="text"
          id="how_2"
          name="how_2"
          value={formData.how_2} />
      </div>
      <div className="formWrap">
        <label htmlFor="what_4">What could CodeClan do better?</label>
        <input
          onChange={onChange}
          type="text"
          id="what_4"
          name="what_4"
          value={formData.what_4} />
      </div>
      <div className="formWrap">
        <label htmlFor="what_5">What could you do better?</label>
        <input
          onChange={onChange}
          type="text"
          id="what_5"
          name="what_5"
          value={formData.what_5} />
      </div>
      <div className="formWrap">
        <label htmlFor="what_6">What are you most proud of today and Why?</label>
        <input
          onChange={onChange}
          type="text"
          id="what_6"
          name="what_6"
          value={formData.what_6} />
      </div>
      <input type="submit" value="Save" id="save" />
    </form >
  )
}

export default JournalForm;