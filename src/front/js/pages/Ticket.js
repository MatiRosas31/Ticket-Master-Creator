import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Ticket = () => {
  const location = useLocation();
  const API_KEY = "AIzaSyAmq2tfFItL34vpdLWEze1b1mWILmWDjGc"
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [description, setDescription] = useState(""); // Estado para almacenar la descripción
  const [openedFor, setOpenedFor] = useState("");
  const [priority, setPriority] = useState("");
  const [configurationItem, setConfigurationItem] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [satisfactionLevel, setSatisfactionLevel] = useState("");


  const generateResponse = async (text) => {
    console.log("Este es el texto que le llega: ", text);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
              parts:[{text: `Create a ticket based on this conversation. Insert as much detail as you can about the issue and how it was handled. DO NOT EVER ADD **. The ticket MUST follow this template: 
                Description: /n
                Location: Working from home /n
                Troubleshooting steps performed: /n
                
                If the issue was resolved add a the end "Issue resolved". If the issue was not resolved add "Escalating ticket for further".
                ${text}`}]
          }]
        })
      });
      const data = await response.json();
      const trimmedData = data.candidates[0].content.parts[0].text.trim();
      console.log("Este es la respuesta que devuelve:  ", trimmedData);
      setDescription(trimmedData);
    } catch (error) {
      console.error(error);
    }
  }

  const generateShortDescription = async (text) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
              parts:[{text: `Generate a short description (not longer than 60 characters) based on this conversation. Style should be something like: 'Unable to access PC: Windows ran into some issues'. Keep it short. Always make sure to include error message if any. Do NOT add solution or steps performed. ${text}`}]
          }]
        })
      });
      const data = await response.json();
      const trimmedData = data.candidates[0].content.parts[0].text.trim();
      console.log("Short Description response: ", trimmedData);
      setShortDescription(trimmedData);
    } catch (error) {
      console.error(error);
    }
  }
  const generateRestofFields = async (text) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
              parts:[{text: `Create a ticket based on this conversation. The ticket MUST follow this template: 
                Opened for: 
                Priority: 
                Category: 
                Sub-Category: 
                Configuration Item: 
                Satisfaction Level:

                Priority options must be one of the following: Low, Medium, High
                ${text}`}]
          }]
        })
      });
      const data = await response.json();
      const trimmedData = data.candidates[0].content.parts[0].text.trim();
      console.log("generateRestofFields response: ", trimmedData);
      // Parse the response to extract the fields
      const lines = trimmedData.split('\n');
      console.log("Este es el split: ", lines);
      const fields = {};
      lines.forEach(line => {
        const [key, ...value] = line.split(':');
        fields[key.trim()] = value.join(':').trim();
      });
      console.log("Este es el fields: ", fields);

      setOpenedFor(fields['Opened for'] || "");
      setPriority(fields['Priority'] || "");
      setCategory(fields['Category'] || "");
      setSubCategory(fields['Sub-Category'] || "");
      setConfigurationItem(fields['Configuration Item'] || "");
      setSatisfactionLevel(fields['Satisfaction Level'] || "");
       // Obtener la fecha actual y establecerla en el estado
       const currentDate = new Date().toISOString().split('T')[0];
       setIncidentDate(currentDate);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (location.state && location.state.text) {
      generateResponse(location.state.text);
      generateShortDescription(location.state.text);
      generateRestofFields(location.state.text);
    }
  }, [location.state]); // Ejecutar el efecto cuando location.state cambie


  return (
    <div className="container-fluid mt-5">
      <div className="card p-4 shadow w-100 mx-auto" style={{ maxWidth: '90%' }}>
        <h5 className="card-title mb-4">New Incident Form</h5>
        <form>
          <div className="row">
            <div className="col-12 col-lg-6 mb-5">
              <div className="mb-3">
                <label htmlFor="openedFor" className="form-label">Opened For</label>
                <input type="text" className="form-control" id="openedFor" placeholder="Wait a few moments while data is being loaded...✨" value={openedFor} onChange={(e) => setOpenedFor(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="incidentPriority" className="form-label">Priority ⚠</label>
                <select className="form-select" id="incidentPriority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="incidentCategory" className="form-label">Category</label>
                <input type="text" className="form-control" id="incidentCategory" placeholder="Wait a few moments while data is being loaded...✨" value={category} onChange={(e) => setCategory(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="incidentSubCategory" className="form-label">Sub-Category</label>
                <input type="text" className="form-control" id="incidentSubCategory" placeholder="Wait a few moments while data is being loaded...✨" value={subCategory} onChange={(e) => setSubCategory(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="incidentDate" className="form-label">Date 📅</label>
                <input type="date" className="form-control" id="incidentDate" value={incidentDate} onChange={(e) => setIncidentDate(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="configurationItem" className="form-label">Configuration Item</label>
                <input type="text" className="form-control" id="configurationItem" placeholder="Wait a few moments while data is being loaded...✨" value={configurationItem} onChange={(e) => setConfigurationItem(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="userSatisfaction" className="form-label">User Satisfaction Level 📈</label>
                <input type="text" className="form-control" id="userSatisfaction" placeholder="Wait a few moments while data is being loaded...✨" value={satisfactionLevel} onChange={(e) => setSatisfactionLevel(e.target.value)} />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <div className="mb-3">
                <label htmlFor="incidentTitle" className="form-label">Short Description</label>
                <input type="text" className="form-control" id="shortDescription" placeholder="Wait a few moments while data is being loaded...✨" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="incidentDescription" className="form-label">Description</label>
                <textarea className="form-control" id="incidentDescription" rows="4" placeholder="Wait a few moments while data is being loaded...✨" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Ticket;