import React from 'react'
import { useState } from 'react';
import { postEntry } from './JournalService';

const JournalForm = ({ addEntry }) => {

  const [formData, setFormData] = useState({
    date: "",
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

  const onSubmit = (e) => {
    e.preventDefault();
    postEntry(formData).then((data) => {
      addEntry(data);
    })
    setFormData({
      date: "",
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
          type="text"
          id="date"
          name="date"
          value={formData.date}
          required />
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
    </form>
  )
}

export default JournalForm;