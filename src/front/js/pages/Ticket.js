import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const subCategoryOptions = {
  Access: [
    "Access Other",
    "Account Locked",
    "Password Expired",
    "Password Reset",
    "Unable to Login"
  ],
  Application: [
    "Access",
    "Availability",
    "Email",
    "Error",
    "Functionality",
    "Maintenance",
    "Performance"
  ],
  Hardware: [
    "Hardware Failure",
    "Hardware Other",
    "Lost/Stolen",
    "Operating System",
    "Physical Damage",
    "Printing"
  ],
  "Inquiry/Help": [
    "Fast/Ghost/Out of Scope Call",
    "Help Other",
    "Information",
    "Service Request"
  ],
  Network: [
    "Internet Access",
    "Network Other",
    "Performance",
    "VPN Access",
    "Wireless Access"
  ],
  Security: [
    "Application Related",
    "Attack/Breach/Threat",
    "Banned Software",
    "Data Loss Prevention (DLP)",
    "Data Related"
  ]
};

const Ticket = () => {
  const location = useLocation();
  const API_KEY = "AIzaSyAmq2tfFItL34vpdLWEze1b1mWILmWDjGc"
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [description, setDescription] = useState(""); // Estado para almacenar la descripción

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubCategory(""); // Reset sub-category when category changes
  };

  const generateResponse = async (text) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
              parts:[{text: `Create a ticket based on this conversation. The ticket MUST follow this template: 
                Description: 
                Troubleshooting steps performed:
                
                If the issue was resolved add a the end "Issue resolved". If the issue was not resolved add "Escalating ticket for further".
                ${text}`}]
          }]
        })
      });
      const data = await response.json();
      const trimmedData = data.candidates[0].content.parts[0].text.trim();
      setDescription(trimmedData); // Establecer el valor de trimmedData en el estado description
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
              parts:[{text: `Create a ticket based on this conversation. The ticket MUST follow this template: 
                Description: 
                Troubleshooting steps performed:
                
                If the issue was resolved add a the end "Issue resolved". If the issue was not resolved add "Escalating ticket for further".
                ${text}`}]
          }]
        })
      });
      const data = await response.json();
      const trimmedData = data.candidates[0].content.parts[0].text.trim();
      setDescription(trimmedData); // Establecer el valor de trimmedData en el estado description
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (location.state && location.state.text) {
      generateResponse(location.state.text);
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
                <input type="text" className="form-control" id="openedFor" placeholder="Enter name" />
              </div>
              <div className="mb-3">
                <label htmlFor="incidentPriority" className="form-label">Priority</label>
                <select className="form-select" id="incidentPriority">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="incidentCategory" className="form-label">Category</label>
                <select className="form-select" id="incidentCategory" value={category} onChange={handleCategoryChange}>
                  <option value="">Select Category</option>
                  <option value="Access">Access</option>
                  <option value="Application">Application</option>
                  <option value="Hardware">Hardware</option>
                  <option value="Inquiry/Help">Inquiry/Help</option>
                  <option value="Network">Network</option>
                  <option value="Security">Security</option>
                </select>
              </div>
              {category && (
                <div className="mb-3">
                  <label htmlFor="incidentSubCategory" className="form-label">Sub-Category</label>
                  <select className="form-select" id="incidentSubCategory" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                    <option value="">Select Sub-Category</option>
                    {subCategoryOptions[category].map((subCat, index) => (
                      <option key={index} value={subCat}>{subCat}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="incidentDate" className="form-label">Date</label>
                <input type="date" className="form-control" id="incidentDate" />
              </div>
              <div className="mb-3">
                <label htmlFor="configurationItem" className="form-label">Configuration Item</label>
                <input type="text" className="form-control" id="configurationItem" placeholder="Enter configuration item" />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <div className="mb-3">
                <label htmlFor="incidentTitle" className="form-label">Short Description</label>
                <input type="text" className="form-control" id="shortDescription" placeholder="Enter a short Description" />
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